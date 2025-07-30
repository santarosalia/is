import * as PIXI from "pixi.js";
import * as Matter from "matter-js";

export class Map {
  tileSize = 32;
  cols: number;
  rows: number;
  starTiles = new Set<number>(); // 별 타일 좌표 저장
  container: PIXI.Container;
  
  // Matter.js 관련 속성들
  engine: Matter.Engine;
  world: Matter.World;
  stars: Array<{ body: Matter.Body; sprite: PIXI.Graphics; velocity: { x: number; y: number } }> = [];
  playerBody: Matter.Body | null = null;

  constructor(app: PIXI.Application) {
    this.container = new PIXI.Container();
    app.stage.addChild(this.container);

    // Matter.js 엔진 초기화
    this.engine = Matter.Engine.create();
    this.world = this.engine.world;
    
    // 중력 설정 (우주에서는 중력이 없음)
    this.world.gravity.y = 0;

    // 컨테이너 크기에 맞춰서 타일 개수 계산
    this.cols = Math.ceil(app.screen.width / this.tileSize);
    this.rows = Math.ceil(app.screen.height / this.tileSize);

    // 우주 배경 생성
    const background = new PIXI.Graphics();
    background.rect(0, 0, this.cols * this.tileSize, this.rows * this.tileSize);
    background.fill(0x0a0a2a); // 어두운 우주 색상
    this.container.addChild(background);

    // 별들 생성 (물리 객체로)
    this.createStars();

    // 경계 벽 생성
    this.createWalls();
  }

  createStars() {
    try {
      for (let y = 0; y < this.rows; y++) {
        for (let x = 0; x < this.cols; x++) {
          const isStar = Math.random() < 0.02; // 2% 확률로 별 생성 (매우 적게)

          if (isStar) {
            // 별 스프라이트 생성
            const starSprite = new PIXI.Graphics();
            
            // 별의 중심
            starSprite.beginFill(0xffffff);
            starSprite.circle(this.tileSize / 2, this.tileSize / 2, 2);
            starSprite.endFill();
            
            // 별의 빛나는 효과
            starSprite.beginFill(0xffffaa);
            starSprite.circle(this.tileSize / 2, this.tileSize / 2, 1);
            starSprite.endFill();

            starSprite.x = x * this.tileSize + this.tileSize / 2;
            starSprite.y = y * this.tileSize + this.tileSize / 2;
            this.container.addChild(starSprite);

            // 별 물리 객체 생성 (플레이어와 상호작용하지 않도록 설정)
            const starBody = Matter.Bodies.circle(
              starSprite.x,
              starSprite.y,
              4, // 반지름
              {
                restitution: 0.3, // 탄성 (적당하게)
                friction: 0.001, // 마찰 (매우 낮게 - 우주 환경)
                density: 0.1, // 밀도 (적당하게)
                render: {
                  fillStyle: '#ffffff'
                },
                // 플레이어와의 충돌 그룹을 다르게 설정
                collisionFilter: {
                  group: -1, // 별들만의 그룹
                  category: 0x0002, // 별 카테고리
                  mask: 0x0001 // 플레이어와만 상호작용
                }
              }
            );

            // 랜덤한 초기 속도 부여 (우주에서 자유롭게 움직임)
            const initialVelocity = {
              x: (Math.random() - 0.5) * 3,
              y: (Math.random() - 0.5) * 3
            };
            
            Matter.Body.setVelocity(starBody, initialVelocity);
            
            // 별의 지속적인 움직임을 위한 속도 저장
            const starVelocity = {
              x: initialVelocity.x,
              y: initialVelocity.y
            };

            Matter.World.add(this.world, starBody);
            this.stars.push({ body: starBody, sprite: starSprite, velocity: starVelocity });
            this.starTiles.add(y * this.cols + x);
          }
        }
      }
    } catch (error) {
      console.error("별 생성 오류:", error);
    }
  }

  createWalls() {
    const wallThickness = 20;
    const walls = [
      // 위쪽 벽
      Matter.Bodies.rectangle(
        this.cols * this.tileSize / 2,
        -wallThickness / 2,
        this.cols * this.tileSize,
        wallThickness,
        { 
          isStatic: true,
          collisionFilter: {
            group: -2, // 벽 그룹
            category: 0x0004, // 벽 카테고리
            mask: 0x0001 // 플레이어와만 상호작용
          }
        }
      ),
      // 아래쪽 벽
      Matter.Bodies.rectangle(
        this.cols * this.tileSize / 2,
        this.rows * this.tileSize + wallThickness / 2,
        this.cols * this.tileSize,
        wallThickness,
        { 
          isStatic: true,
          collisionFilter: {
            group: -2,
            category: 0x0004,
            mask: 0x0001
          }
        }
      ),
      // 왼쪽 벽
      Matter.Bodies.rectangle(
        -wallThickness / 2,
        this.rows * this.tileSize / 2,
        wallThickness,
        this.rows * this.tileSize,
        { 
          isStatic: true,
          collisionFilter: {
            group: -2,
            category: 0x0004,
            mask: 0x0001
          }
        }
      ),
      // 오른쪽 벽
      Matter.Bodies.rectangle(
        this.cols * this.tileSize + wallThickness / 2,
        this.rows * this.tileSize / 2,
        wallThickness,
        this.rows * this.tileSize,
        { 
          isStatic: true,
          collisionFilter: {
            group: -2,
            category: 0x0004,
            mask: 0x0001
          }
        }
      )
    ];

    walls.forEach(wall => {
      Matter.World.add(this.world, wall);
    });
  }

  setPlayerBody(playerBody: Matter.Body) {
    this.playerBody = playerBody;
    
    // 플레이어의 충돌 필터 설정
    playerBody.collisionFilter = {
      group: 0, // 플레이어 그룹
      category: 0x0001, // 플레이어 카테고리
      mask: 0x0002 | 0x0004 // 별들과 벽과 상호작용
    };
    
    Matter.World.add(this.world, playerBody);
  }

  update() {
    try {
      // 별들의 지속적인 움직임 업데이트
      this.stars.forEach(star => {
        if (star.body && star.sprite) {
          // 별이 화면 경계에 닿으면 방향 전환
          const x = star.body.position.x;
          const y = star.body.position.y;
          const maxX = this.cols * this.tileSize;
          const maxY = this.rows * this.tileSize;
          
          // 경계에서 튕겨나가기
          if (x <= 10 || x >= maxX - 10) {
            star.velocity.x *= -0.8; // 약간의 감속과 함께 방향 전환
          }
          if (y <= 10 || y >= maxY - 10) {
            star.velocity.y *= -0.8; // 약간의 감속과 함께 방향 전환
          }
          
          // 플레이어와의 충돌 감지 및 처리 (더 부드럽게)
          if (this.playerBody) {
            const distance = Matter.Vector.magnitude(
              Matter.Vector.sub(star.body.position, this.playerBody.position)
            );
            
            // 충돌 거리 내에 있을 때 별의 속도 조정 (더 큰 거리에서 감지)
            if (distance < 80) {
              // 플레이어로부터 멀어지는 방향으로 속도 조정
              const direction = Matter.Vector.normalise(
                Matter.Vector.sub(star.body.position, this.playerBody.position)
              );
              
              // 거리에 따른 회피 강도 조정
              const avoidanceStrength = Math.max(0.5, (80 - distance) / 80);
              
              // 기존 속도에 회피 벡터를 추가
              star.velocity.x += direction.x * avoidanceStrength;
              star.velocity.y += direction.y * avoidanceStrength;
              
              // 속도 제한
              const maxSpeed = 4;
              const currentSpeed = Math.sqrt(star.velocity.x * star.velocity.x + star.velocity.y * star.velocity.y);
              if (currentSpeed > maxSpeed) {
                star.velocity.x = (star.velocity.x / currentSpeed) * maxSpeed;
                star.velocity.y = (star.velocity.y / currentSpeed) * maxSpeed;
              }
            }
          }
          
          // 벽과의 충돌 감지 및 처리 (단순화)
          const wallThickness = 20;
          
          // 위쪽 벽
          if (y <= wallThickness) {
            star.velocity.y = Math.abs(star.velocity.y) * 0.9;
            star.body.position.y = wallThickness + 5;
          }
          // 아래쪽 벽
          if (y >= maxY - wallThickness) {
            star.velocity.y = -Math.abs(star.velocity.y) * 0.9;
            star.body.position.y = maxY - wallThickness - 5;
          }
          // 왼쪽 벽
          if (x <= wallThickness) {
            star.velocity.x = Math.abs(star.velocity.x) * 0.9;
            star.body.position.x = wallThickness + 5;
          }
          // 오른쪽 벽
          if (x >= maxX - wallThickness) {
            star.velocity.x = -Math.abs(star.velocity.x) * 0.9;
            star.body.position.x = maxX - wallThickness - 5;
          }
          
          // 별의 속도를 지속적으로 적용 (부드러운 움직임)
          const currentVelocity = star.body.velocity;
          const targetVelocity = star.velocity;
          
          // 부드러운 속도 전환 (더 느리게)
          const smoothFactor = 0.05;
          const newVelocity = {
            x: currentVelocity.x + (targetVelocity.x - currentVelocity.x) * smoothFactor,
            y: currentVelocity.y + (targetVelocity.y - currentVelocity.y) * smoothFactor
          };
          
          Matter.Body.setVelocity(star.body, newVelocity);
          
          // 스프라이트 위치 업데이트
          star.sprite.x = star.body.position.x;
          star.sprite.y = star.body.position.y;
          star.sprite.rotation = star.body.angle;
        }
      });

      // Matter.js 물리 시뮬레이션 업데이트 (별들과 플레이어 분리)
      Matter.Engine.update(this.engine, 1000 / 60);
    } catch (error) {
      console.error("물리 시뮬레이션 업데이트 오류:", error);
    }
  }

  isOnStar(px: number, py: number) {
    const tileX = Math.floor(px / this.tileSize);
    const tileY = Math.floor(py / this.tileSize);
    const index = tileY * this.cols + tileX;
    return this.starTiles.has(index);
  }

  // 윈도우 리사이즈 시 맵 재생성
  resize(app: PIXI.Application) {
    // 기존 컨테이너 정리
    this.container.removeChildren();
    this.starTiles.clear();

    // 기존 별들 제거
    this.stars.forEach(star => {
      Matter.World.remove(this.world, star.body);
    });
    this.stars = [];

    // 새로운 크기로 재계산
    this.cols = Math.ceil(app.screen.width / this.tileSize);
    this.rows = Math.ceil(app.screen.height / this.tileSize);

    // 우주 배경 재생성
    const background = new PIXI.Graphics();
    background.rect(0, 0, this.cols * this.tileSize, this.rows * this.tileSize);
    background.fill(0x0a0a2a);
    this.container.addChild(background);

    // 별들 재생성
    this.createStars();
    
    // 벽 재생성
    this.createWalls();
  }
}


