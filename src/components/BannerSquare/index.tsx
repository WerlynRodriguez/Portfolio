import { useEffect, useRef } from "react";
import "./styles.css";

export default function () {

  const spanRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<any>(null);

  const rnd = (max: number) => Math.floor(Math.random() * max);

  useEffect(() => {
    const span = spanRef.current;
    if (!span) return;

    // The following code will, every (5, 10) seconds, change the background position of the square (0 0, 100% 100%)

    const changeBackgroundPosition = () => {
      span.style.backgroundPosition = `${rnd(100)}% ${rnd(100)}%`;
    };
    changeBackgroundPosition();

    intervalRef.current = setInterval(changeBackgroundPosition, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return <span ref={spanRef} className="BannerSquare"></span>;
}
