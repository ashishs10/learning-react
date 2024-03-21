import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-t">
        React with tailwind
      </h1>
      <Card username="Ashish Singh" post="Junior React Dev" />
      <Card />
    </>
  );
}

export default App;
