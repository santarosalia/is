import * as PIXI from "pixi.js";

export class Map {
  tileSize = 32;
  cols: number;
  rows: number;
  starTiles = new Set<number>(); // 별 타일 좌표 저장
  container: PIXI.Container;

  constructor(app: PIXI.Application) {
    this.container = new PIXI.Container();
    app.stage.addChild(this.container);

    // 컨테이너 크기에 맞춰서 타일 개수 계산
    this.cols = Math.ceil(app.screen.width / this.tileSize);
    this.rows = Math.ceil(app.screen.height / this.tileSize);

    // 우주 배경 생성
    const background = new PIXI.Graphics();
    background.rect(0, 0, this.cols * this.tileSize, this.rows * this.tileSize);
    background.fill(0x0a0a2a); // 어두운 우주 색상
    this.container.addChild(background);

    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        const tile = new PIXI.Graphics();
        const isStar = Math.random() < 0.15; // 15% 확률로 별 생성

        if (isStar) {
          // 별 그리기
          tile.circle(this.tileSize / 2, this.tileSize / 2, 2);
          tile.fill(0xffffff);
          
          // 별의 빛나는 효과
          tile.circle(this.tileSize / 2, this.tileSize / 2, 1);
          tile.fill(0xffffaa);
        } else {
          // 우주 공간 (투명하게)
          tile.rect(0, 0, this.tileSize, this.tileSize);
          tile.fill({color: 0x000000, alpha:0});
        }

        tile.x = x * this.tileSize;
        tile.y = y * this.tileSize;
        this.container.addChild(tile);

        if (isStar) {
          this.starTiles.add(y * this.cols + x);
        }

      }
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

    // 새로운 크기로 재계산
    this.cols = Math.ceil(app.screen.width / this.tileSize);
    this.rows = Math.ceil(app.screen.height / this.tileSize);

    // 우주 배경 재생성
    const background = new PIXI.Graphics();
    background.rect(0, 0, this.cols * this.tileSize, this.rows * this.tileSize);
    background.fill(0x0a0a2a);
    this.container.addChild(background);

    // 타일들 재생성
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        const tile = new PIXI.Graphics();
        const isStar = Math.random() < 0.15;

        if (isStar) {
          tile.circle(this.tileSize / 2, this.tileSize / 2, 2);
          tile.fill(0xffffff);
          
          tile.circle(this.tileSize / 2, this.tileSize / 2, 1);
          tile.fill(0xffffaa);
        } else {
          tile.rect(0, 0, this.tileSize, this.tileSize);
          tile.fill({color: 0x000000, alpha:0});
        }

        tile.x = x * this.tileSize;
        tile.y = y * this.tileSize;
        this.container.addChild(tile);

        if (isStar) {
          this.starTiles.add(y * this.cols + x);
        }
      }
    }
  }
}


