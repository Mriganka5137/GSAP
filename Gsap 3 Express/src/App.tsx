import { useRef } from "react";
import One from "./Tweens_basics/One";
import Two from "./Tweens_basics/Two";
import Three from "./Tweens_basics/Three";
function App() {
  const container = useRef(null);

  return (
    <div className=" h-screen w-full  bg-stone-900 text-white" ref={container}>
      <div className=" container mx-auto p-20">
        {/* <One /> */}
        {/* <Two /> */}
        <Three />
      </div>
    </div>
  );
}

export default App;
