import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

// Staggering
function Four() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.to("img", {
        y: 400,
        opacity: 1,
        duration: 2,
        stagger: {
          amount: 0.5,
          from: "edges",
        },
        ease: "back",
      });
    },
    { scope: container }
  );

  return (
    <div className="flex w-full gap-5 " ref={container}>
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
        className="rounded-full "
      />
      <img
        src="../../profile.jpg"
        alt=""
        width={200}
        height={100}
        className="rounded-full "
      />
    </div>
  );
}

export default Four;
