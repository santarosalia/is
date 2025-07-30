import { useEffect, useRef } from "react";
import { Game } from "../data/Game";

interface Props {
    onShowDialog: (text: string) => void;
  }

const Universe = ({ onShowDialog }: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const gameRef = useRef<Game | null>(null);

    useEffect(() => {
      if (ref.current) {
        gameRef.current = new Game(ref.current, onShowDialog);
        
        return () => {
          if (gameRef.current) {
            gameRef.current.destroy();
            gameRef.current = null;
          }
        };
      }
    }, [onShowDialog]);
  
    return <div ref={ref} style={{ width: "100wh", height: "100vh" }} />;
};

export default Universe;