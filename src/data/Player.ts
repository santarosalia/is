import * as PIXI from "pixi.js";
import * as Matter from "matter-js";

export class Player {
  sprite: PIXI.Graphics;
  body: Matter.Body;
  speed = 2;
  keys: Record<string, boolean> = {};
  velocity = { x: 0, y: 0 };
  maxVelocity = 8;
  acceleration = 0.3;
  deceleration = 0.95;
  currentRotation = 0; // 현재 회전값
  targetRotation = 0; // 목표 회전값
  rotationSpeed = 0.1; // 회전 속도

  constructor(app: PIXI.Application) {
    this.sprite = new PIXI.Graphics();
    
    // 현대적인 우주선 디자인
    // 메인 바디 (더 둥글고 유선형)
    this.sprite.beginFill(0x1a1a2e); // 어두운 네이비
    this.sprite.drawRoundedRect(0, 0, 28, 28, 8);
    this.sprite.endFill();
    
    // 메탈릭 효과를 위한 그라데이션
    this.sprite.beginFill(0x4a90e2); // 밝은 블루
    this.sprite.drawRoundedRect(2, 2, 24, 24, 6);
    this.sprite.endFill();
    
    // 코크핏 (투명한 유리창 효과)
    this.sprite.beginFill(0x87ceeb, 0.7); // 반투명 하늘색
    this.sprite.drawEllipse(14, 8, 8, 6);
    this.sprite.endFill();
    
    // 코크핏 테두리
    this.sprite.lineStyle(2, 0xffffff, 0.8);
    this.sprite.drawEllipse(14, 8, 8, 6);
    
    // 날개 (더 날렵한 디자인)
    this.sprite.beginFill(0x2c3e50); // 다크 그레이
    this.sprite.drawRoundedRect(0, 12, 6, 16, 3); // 왼쪽 날개
    this.sprite.drawRoundedRect(22, 12, 6, 16, 3); // 오른쪽 날개
    this.sprite.endFill();
    
    // 날개 하이라이트
    this.sprite.beginFill(0x3498db, 0.6);
    this.sprite.drawRoundedRect(1, 13, 4, 14, 2);
    this.sprite.drawRoundedRect(23, 13, 4, 14, 2);
    this.sprite.endFill();
    
    // 엔진 노즐
    this.sprite.beginFill(0xe74c3c); // 빨간색 엔진
    this.sprite.drawEllipse(14, 26, 4, 2);
    this.sprite.endFill();
    
    // 엔진 불빛 (더 강렬한 효과)
    this.sprite.beginFill(0xff6b35); // 오렌지
    this.sprite.drawEllipse(14, 28, 3, 1);
    this.sprite.endFill();
    
    this.sprite.x = 500;
    this.sprite.y = 500;
    app.stage.addChild(this.sprite);

    // 플레이어 물리 객체 생성 (우주선)
    this.body = Matter.Bodies.rectangle(
      500 + 14, // x + width/2
      500 + 14, // y + height/2
      28, // width
      28, // height
      {
        restitution: 0.1, // 탄성 (낮게 설정하여 튕겨나가지 않도록)
        friction: 0.05, // 마찰 (우주에서는 마찰이 거의 없음)
        density: 0.8, // 밀도 (우주선은 적당한 무게)
        render: {
          fillStyle: '#ffcc00'
        },
        // 플레이어의 충돌 필터 설정
        collisionFilter: {
          group: 0, // 플레이어 그룹
          category: 0x0001, // 플레이어 카테고리
          mask: 0x0002 | 0x0004 // 별들과 벽과 상호작용
        }
      }
    );

    window.addEventListener("keydown", (e) => (this.keys[e.key] = true));
    window.addEventListener("keyup", (e) => (this.keys[e.key] = false));
  }

  update() {
    // 키보드 입력에 따른 가속도 적용
    if (this.keys["ArrowUp"]) {
      this.velocity.y -= this.acceleration;
    }
    if (this.keys["ArrowDown"]) {
      this.velocity.y += this.acceleration;
    }
    if (this.keys["ArrowLeft"]) {
      this.velocity.x -= this.acceleration;
    }
    if (this.keys["ArrowRight"]) {
      this.velocity.x += this.acceleration;
    }

    // 속도 제한
    this.velocity.x = Math.max(-this.maxVelocity, Math.min(this.maxVelocity, this.velocity.x));
    this.velocity.y = Math.max(-this.maxVelocity, Math.min(this.maxVelocity, this.velocity.y));

    // 감속 (키를 누르지 않을 때)
    if (!this.keys["ArrowUp"] && !this.keys["ArrowDown"]) {
      this.velocity.y *= this.deceleration;
    }
    if (!this.keys["ArrowLeft"] && !this.keys["ArrowRight"]) {
      this.velocity.x *= this.deceleration;
    }

    // 매우 작은 속도는 0으로 만들기
    if (Math.abs(this.velocity.x) < 0.1) this.velocity.x = 0;
    if (Math.abs(this.velocity.y) < 0.1) this.velocity.y = 0;

    // 속도 벡터를 기반으로 우주선 회전
    if (Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y) > 0.1) {
      const angle = Math.atan2(-this.velocity.y, -this.velocity.x);
      // 우주선이 위쪽을 기본 방향으로 하므로 -90도 회전
      this.targetRotation = angle - Math.PI / 2;
    }

    // 부드러운 회전 적용
    const rotationDiff = this.targetRotation - this.currentRotation;
    
    // 각도 차이를 -π에서 π 범위로 정규화
    let normalizedDiff = rotationDiff;
    while (normalizedDiff > Math.PI) normalizedDiff -= 2 * Math.PI;
    while (normalizedDiff < -Math.PI) normalizedDiff += 2 * Math.PI;
    
    // 선형 보간으로 부드러운 회전
    this.currentRotation += normalizedDiff * this.rotationSpeed;
    this.sprite.rotation = this.currentRotation;

    // 물리 객체에 속도 적용
    Matter.Body.setVelocity(this.body, this.velocity);

    // 스프라이트 위치를 물리 객체 위치에 맞춤
    this.sprite.x = this.body.position.x - 14; // width/2
    this.sprite.y = this.body.position.y - 14; // height/2
  }

  getBody() {
    return this.body;
  }
}