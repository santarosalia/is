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

  constructor(app: PIXI.Application) {
    this.sprite = new PIXI.Graphics();
    
    // 우주선 모양 그리기
    this.sprite.beginFill(0x00aaff); // 파란색 우주선
    this.sprite.moveTo(14, 0); // 위쪽 뾰족한 부분
    this.sprite.lineTo(28, 20); // 오른쪽 날개
    this.sprite.lineTo(20, 28); // 오른쪽 아래
    this.sprite.lineTo(8, 28); // 왼쪽 아래
    this.sprite.lineTo(0, 20); // 왼쪽 날개
    this.sprite.lineTo(14, 0); // 다시 위쪽으로
    this.sprite.endFill();
    
    // 우주선 엔진 불빛
    this.sprite.beginFill(0xffff00);
    this.sprite.drawEllipse(14, 25, 3, 1);
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