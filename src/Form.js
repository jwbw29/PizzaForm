import Confirmation from "./Confirmation";
import { Routes, Route, Link } from "react-router-dom";

export default function Form() {
  return (
    <div
      id="container"
      className="flex bg-primaryColor h-screen justify-center"
    >
      <div
        id="modal"
        className="flex flex-col bg-tertiaryColor ring-secondaryColor ring-4 rounded-md h-fit w-3/4 mt-56 justify-around items-center"
      >
        <div id="form-header" className="flex flex-col w-full h-fit">
          <h2 className="text-center font-modal text-3xl py-4">
            Build Your Own Pizza
          </h2>
          <img src="./Pizza.jpg" alt="pizza" className="w-full h-56" />
        </div>

        {/* ////// FORM /////// */}
        <form>
          <label className="choose size">
            {/**
             * title
             * size drop down */}
          </label>
          <label className="choose sauce">
            {/**
             * title
             * sauce radio button */}
          </label>
          <label className="choose toppings">
            {/**
             * title
             * toppings checklist*/}
          </label>
          <label className="special instrux">
            {/**
             * title
             * input box w/ placeholder */}
          </label>
          <label className="add to order">
            {/**
             * Add to order
             * show total
             */}
          </label>
        </form>
      </div>
    </div>
  );
}
