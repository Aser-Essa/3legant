import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

function useContainerAndWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  const [searchParams] = useSearchParams();
  const defaultGrid = width >= 680 ? 4 : 1;
  const gridType = searchParams.get("grid") || defaultGrid;
  const ref = useRef();
  const [containerWidth, setContainerWidth] = useState(
    width > 680 ? 1120 : 260,
  );

  useEffect(() => {
    if (ref.current) {
      setContainerWidth(ref.current.clientWidth);
    }
    const handleResize = () => {
      if (ref.current) {
        setContainerWidth(ref.current.clientWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [gridType]);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return window.removeEventListener("resize", () =>
      setWidth(window.innerWidth),
    );
  }, []);

  return { ref, containerWidth, width, gridType };
}

export default useContainerAndWindowWidth;
