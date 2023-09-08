import { useLayoutEffect, useRef, useState } from "react";

const useElementHeight = () => {
  const elementRef = useRef(null);
  const [elementHeight, setElementHeight] = useState(0);
  const [elementWidth, setElementWidth] = useState(0);

  useLayoutEffect(() => {
    function handleResize() {
      if (elementRef.current) {
        const height = elementRef.current.offsetHeight;
        const width = elementRef.current.offsetWidth;
        setElementWidth(width);
        setElementHeight(height);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [elementRef]);

  return { elementHeight, elementWidth, elementRef };
};

export default useElementHeight;
