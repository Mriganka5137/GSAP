import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

// Animation on Play , Pause, Resume, Reverse - Animation on click
function Five() {
  const container = useRef(null);
  const { contextSafe } = useGSAP(() => {}, { scope: container });

  const play = contextSafe(() => {
    gsap.to(".img1", {
      x: 400,
      opacity: 1,
      duration: 2,
    });
  });
  return (
    <div className="flex flex-col justify-between gap-20" ref={container}>
      <img
        src="../../profile.jpg"
        alt=""
        width={200}
        height={100}
        className="rounded-full img1"
      />
      <button
        className="px-4 py-2 text-2xl text-black bg-yellow-400 w-fit rounded-xl"
        onClick={play}
      >
        Play
      </button>
    </div>
  );
}

export default Five;
