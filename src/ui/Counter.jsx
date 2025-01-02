import { useEffect, useState } from "react";
import SlideInFromLeftAnimation from "./SlideInFromLeftAnimation";

function Counter() {
  const [counter, setCounter] = useState(216_000_000);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((count) => count - 1000);
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <>
      <div className="flex flex-col gap-2 border-y border-white-shade-1 py-6">
        <p className="text-black-shade-3">Offer expires in:</p>
        <div className="flex items-center gap-4 text-[34px] font-medium">
          <SlideInFromLeftAnimation delay={0.45}>
            <div>
              <p className="flex h-[60px] w-[60px] items-center justify-center bg-white-shade-2">
                {Math.floor(counter / 24 / 60 / 60 / 1000)}
              </p>
              <p className="text-center text-xs leading-5 text-black-shade-4">
                Days
              </p>
            </div>
          </SlideInFromLeftAnimation>
          <SlideInFromLeftAnimation delay={0.45}>
            <div>
              <p className="flex h-[60px] w-[60px] items-center justify-center bg-white-shade-2">
                {Math.floor(counter / 60 / 60 / 1000) % 24}
              </p>
              <p className="text-center text-xs leading-5 text-black-shade-4">
                Hours
              </p>
            </div>
          </SlideInFromLeftAnimation>
          <SlideInFromLeftAnimation delay={0.45}>
            <div>
              <p className="flex h-[60px] w-[60px] items-center justify-center bg-white-shade-2">
                {Math.floor(counter / 60 / 1000) % 60 || 1}
              </p>
              <p className="text-center text-xs leading-5 text-black-shade-4">
                Minutes
              </p>
            </div>
          </SlideInFromLeftAnimation>
          <SlideInFromLeftAnimation delay={0.45}>
            <div>
              <p className="flex h-[60px] w-[60px] items-center justify-center bg-white-shade-2">
                {(Math.floor(counter / 1000) % 60) + 1}
              </p>
              <p className="text-center text-xs leading-5 text-black-shade-4">
                Seconds
              </p>
            </div>
          </SlideInFromLeftAnimation>
        </div>
      </div>
    </>
  );
}

export default Counter;
