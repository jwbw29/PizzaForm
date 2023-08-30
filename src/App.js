import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import Confirmation from "./Confirmation";

const App = () => {
  return (
    <>
      <nav className="flex bg-tertiaryColor h-24 items-center justify-between fixed w-full">
        <div className="flex px-4">
          <Link to="/" className="font-logo text-6xl text-dark">
            BT Pizza
          </Link>
        </div>
        <div>
          <Link to="/" className="px-4 text-dark font-modal text-xl">
            Home
          </Link>
          {/* |
          <Link to="confirmation " className="px-4 text-dark">
            Last Order
          </Link> */}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pizza" element={<Form />} />
        <Route path="confirmation" element={<Confirmation />} />
      </Routes>
    </>
  );
};
export default App;
