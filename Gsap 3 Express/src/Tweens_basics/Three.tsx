import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

// EASE
function Three() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.to(".img1", {
        x: 400,
        opacity: 1,
        duration: 2,
        scale: 1,
        ease: "back(2)",
      });
      gsap.to(".img2", {
        x: 400,
        opacity: 1,
        duration: 2,
        scale: 1,
        ease: "linear",
      });
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

export default Three;
