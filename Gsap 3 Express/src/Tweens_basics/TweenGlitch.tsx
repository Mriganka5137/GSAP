import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

// Animation on Play , Pause, Resume, Reverse - Animation on click

const TweenGlitch = () => {
  const container = useRef(null);
  const { contextSafe } = useGSAP(() => {}, { scope: container });

  const play = contextSafe(() => {
    gsap.fromTo(
      ".circle",
      {
        scale: 0,
        duration: 1,
        ease: "circ",
      },
      {
        scale: 1,
        duration: 1,
        ease: "circ",
      }
    );
  });
  return (
    <div
      onMouseEnter={play}
      ref={container}
      className="flex items-center justify-center bg-blue-600 rounded-full w-96 h-96"
    >
      <div className="w-full h-full bg-yellow-300 rounded-full circle"></div>
    </div>
  );
};

export default TweenGlitch;
