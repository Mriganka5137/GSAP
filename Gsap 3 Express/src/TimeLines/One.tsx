import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import HoverEffects from "./HoverEffects";

const One = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(container.current, {
        opacity: 0,
        duration: 1,
        ease: "linear",
      });
      tl.from(
        "h1",
        {
          opacity: 0,
          scale: 100,
          duration: 1.5,
        },
        "<"
      );

      tl.from("h2", {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        ease: "back",
      });
      tl.from(
        ".img1",
        {
          yPercent: 100,
          opacity: 0,
          duration: 1,
          ease: "back",
        },
        "<"
      );
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="w-full h-full p-20 overflow-hidden bg-slate-800"
    >
      <h1 className="font-mono font-bold tracking-tighter text-9xl">
        Hello World
      </h1>
      <h2 className="mt-10 font-serif text-5xl ">I am Mriganka</h2>
      <img
        src="../../profile.jpg"
        alt=""
        width={200}
        height={100}
        className="mt-10 rounded-full img1"
      />
      <HoverEffects />
    </div>
  );
};

export default One;
