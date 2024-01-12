import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useCallback, useRef } from "react";
const HoverEffects = () => {
  const container = useRef(null);
  let tween: gsap.core.Tween;
  const { contextSafe } = useGSAP(
    () => {
      tween = gsap.to(".text", {
        color: "red",
        paused: true,
      });
    },
    { scope: container }
  );

  const handleMouseEnter = useCallback(
    contextSafe(() => {
      tween.play();
    }),
    [contextSafe]
  );
  const handleMouseLeave = useCallback(
    contextSafe(() => {
      tween.reverse();
    }),
    [contextSafe]
  );

  return (
    <div ref={container} className="flex items-center gap-5 mt-5">
      <div className="w-10 h-10 rounded-full bg-slate-300 dot"></div>
      <div
        className="text-5xl font-bold uppercase text"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Home
      </div>
    </div>
  );
};

export default HoverEffects;
