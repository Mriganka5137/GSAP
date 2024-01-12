import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const One = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(container.current, {
        opacity: 0,
        duration: 1.5,
        ease: "linear",
      });
      tl.from("h1", {
        // xPercent: -100,
        opacity: 0,
        scale: 3,
        duration: 1.5,
        ease: "linear",
      });

      tl.from("h2", {
        yPercent: 100,
        opacity: 0,
        duration: 1,
      });
      tl.from(".img1", {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "circ",
      });
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
    </div>
  );
};

export default One;
