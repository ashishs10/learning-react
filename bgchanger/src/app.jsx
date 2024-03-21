import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";

export function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2">
          <div className="flex bg-white-300 flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className=" outline-none rounded-full px-4 py-1 shadow-lg "
            >
              Red
            </button>
            <button
              onClick={() => setColor("orange")}
              className=" outline-none rounded-full px-4 py-1 shadow-lg"
            >
              Orange
            </button>
            <button
              onClick={() => setColor("Green")}
              className=" outline-none rounded-full px-4 py-1 shadow-lg"
            >
              Green
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
