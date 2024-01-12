import { useRef } from "react";
import One from "./Tweens_basics/One";
import Two from "./Tweens_basics/Two";
import Three from "./Tweens_basics/Three";
import Four from "./Tweens_basics/Four";
import Five from "./Tweens_basics/Five";
import TweenGlitch from "./Tweens_basics/TweenGlitch";
function App() {
  const container = useRef(null);

  return (
    <div className="w-full h-screen text-white bg-stone-900" ref={container}>
      <div className="container p-20 mx-auto ">
        {/* <One /> */}
        {/* <Two /> */}
        {/* <Three /> */}
        {/* <Four /> */}
        {/* <Five /> */}
        <TweenGlitch />
      </div>
    </div>
  );
}

export default App;
