import * as PIXI from "pixi.js";
import { Player } from "../data/Player";
import { Map } from "../data/Map";

export class Game {
  app: PIXI.Application;
  map: Map | null = null;
  player: Player | null = null;
  private isInitialized = false;

  constructor(container: HTMLElement, onShowDialog: (text: string) => void) {
    // 새로운 방식으로 Application 초기화
    this.app = new PIXI.Application();
    // 비동기 초기화
    this.app.init({
      width: container.clientWidth ,
      height: container.clientHeight ,
      backgroundColor: 0x333333
    }).then(() => {
      // 초기화 완료 후 canvas 추가 (기존 canvas가 있다면 제거 후 추가)
      const existingCanvas = container.querySelector('canvas');
      if (existingCanvas) {
        container.removeChild(existingCanvas);
      }
      container.appendChild(this.app.canvas as HTMLCanvasElement);

      // 초기화 완료 후 Map과 Player 생성
      this.map = new Map(this.app);
      this.player = new Player(this.app);
      
      // 플레이어의 물리 객체를 맵에 연결
      if (this.map && this.player) {
        this.map.setPlayerBody(this.player.getBody());
      }
      
      this.isInitialized = true;

      this.app.ticker.add(() => {
        if (this.isInitialized && this.player && this.map) {
          this.player.update();
          this.map.update(); // 맵의 물리 시뮬레이션 업데이트

          // 별 타일 위에 있을 때 대사창 띄우기
          if (this.map.isOnStar(this.player.sprite.x, this.player.sprite.y)) {
            onShowDialog("별빛이 반짝이며 신비로운 에너지를 느낀다...");
          }
        }
      });
    }).catch((error) => {
      console.error("PIXI.js 초기화 실패:", error);
    });
  }

  destroy() {
    if (this.app && this.isInitialized) {
      try {
        // canvas를 DOM에서 제거
        if (this.app.canvas && this.app.canvas.parentNode) {
          this.app.canvas.parentNode.removeChild(this.app.canvas);
        }
        this.app.destroy(true);
      } catch (error) {
        console.error("PIXI.js 정리 중 오류:", error);
      }
    }
  }
}