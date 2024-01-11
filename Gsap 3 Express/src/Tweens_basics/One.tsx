import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
function One() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        "img",
        {
          x: -500,
          y: 200,
          opacity: 0,
          scale: 0.5,
        },
        {
          x: 400,
          y: 200,
          opacity: 1,
          duration: 2,
          scale: 1,
        }
      );
    },
    { scope: container }
  );

  return (
    <div className=" " ref={container}>
      <img
        src="../../public/profile.jpg"
        alt=""
        width={200}
        height={100}
        className=" rounded-full"
      />
    </div>
  );
}

export default One;
