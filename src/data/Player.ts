import * as PIXI from "pixi.js";

export class Player {
  sprite: PIXI.Graphics;
  speed = 2;
  keys: Record<string, boolean> = {};

  constructor(app: PIXI.Application) {
    this.sprite = new PIXI.Graphics();
    this.sprite.rect(0, 0, 28, 28);
    this.sprite.fill(0xffcc00);
    this.sprite.x = 500;
    this.sprite.y = 500;
    app.stage.addChild(this.sprite);

    window.addEventListener("keydown", (e) => (this.keys[e.key] = true));
    window.addEventListener("keyup", (e) => (this.keys[e.key] = false));
  }

  update() {
    if (this.keys["ArrowUp"]) this.sprite.y -= this.speed;
    if (this.keys["ArrowDown"]) this.sprite.y += this.speed;
    if (this.keys["ArrowLeft"]) this.sprite.x -= this.speed;
    if (this.keys["ArrowRight"]) this.sprite.x += this.speed;
  }
}