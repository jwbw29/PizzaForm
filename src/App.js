import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import Confirmation from "./Confirmation";

const App = () => {
  return (
    <>
      <nav className="flex bg-tertiaryColor h-24 items-center justify-between">
        <div className="flex px-4">
          <Link className="font-headers text-6xl text-dark">BT Pizza</Link>
        </div>
        <div>
          <Link className="px-4 text-dark">Home</Link>|
          <Link className="px-4 text-dark">Last Order</Link>
        </div>
      </nav>
      <Home />
    </>
  );
};
export default App;
