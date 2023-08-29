import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import Confirmation from "./Confirmation";

const App = () => {
  return (
    <>
      <nav>
        <div className="px-4 text-4xl">BT Pizza</div>
        <div>
          <Link className="px-4">Home</Link>|
          <Link className="px-4">Last Order</Link>
        </div>
      </nav>
      <Home />
    </>
  );
};
export default App;
