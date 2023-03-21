import React from "react";
import { LeftBar } from "./components/LeftBar/LeftBar";
import "./App.css";
import { CenterPart } from "./components/CenterPart/CenterPart";
import { RigthPart } from "./components/RigthPart/RigthPart";

function App() {
  return (
    <div className="App">
      <LeftBar />
      <CenterPart />
      <RigthPart />
    </div>
  );
}

export default App;
