import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

// Two animations at the same time - repeat and yoyo -
function Two() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.to(".img1", {
        x: 400,
        opacity: 1,
        duration: 2,
        scale: 1,
        repeat: -1,
        yoyo: true,
        yoyoEase: true,
      });
      gsap.to(".img2", { x: 400, opacity: 1, duration: 2, scale: 1, delay: 2 });
    },
    { scope: container }
  );

  return (
    <div className="" ref={container}>
      <img
        src="../../profile.jpg"
        alt=""
        width={200}
        height={100}
        className="rounded-full img1"
      />
      <img
        src="../../profile.jpg"
        alt=""
        width={200}
        height={100}
        className="mt-5 rounded-full img2"
      />
    </div>
  );
}

export default Two;
