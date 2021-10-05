import { useEffect, useRef, forwardRef } from "react";
import Lottie from "lottie-react";
// import { useLottie, useLottieInteractivity } from "lottie-react";
import animationData from "../img/biplane.json";

type AnimationProps = {
  className: string;
};

const Animation = forwardRef(({ className }: AnimationProps, ref: any) => {
  const _className = className ? ` ${className}` : "";

  const watch = (entries: Array<IntersectionObserverEntry>) => {
    const [entry] = entries;
    entry.isIntersecting ? ref.current.play() : ref.current.pause();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(watch, { threshold: 0 });
    ref.current.animationItem && observer.observe(ref.current?.animationItem?.wrapper);
  }, [ref]);

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      lottieRef={ref}
      className={`animation${_className}`}
    />
  );
});

export default Animation;
