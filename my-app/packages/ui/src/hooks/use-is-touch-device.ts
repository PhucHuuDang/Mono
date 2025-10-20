import { useState, useEffect } from "react";

export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          (navigator as any).msMaxTouchPoints > 0
      );
    };

    checkTouch();
    window.addEventListener("touchstart", checkTouch, { once: true });

    return () => {
      window.removeEventListener("touchstart", checkTouch);
    };
  }, []);

  return isTouch;
}
