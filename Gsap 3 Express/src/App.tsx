import { useRef } from "react";
import TimeLine from "./TimeLines/TimeLine";
function App() {
  const container = useRef(null);

  return (
    <div className="w-full h-screen text-white bg-stone-900" ref={container}>
      <div className="w-full h-full">
        <TimeLine />
      </div>
    </div>
  );
}

export default App;
