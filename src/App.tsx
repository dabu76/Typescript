import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function SetType(x: number): number {
  return x * 2;
}

function App() {
  return (
    <>
      <div>{SetType(3)}</div>
    </>
  );
}

export default App;
