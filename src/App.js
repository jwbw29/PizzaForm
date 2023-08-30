import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import Confirmation from "./Confirmation";
import axios from "axios";
import * as yup from "yup";
import schema from "./FormSchema";

///////// INITIAL STATES /////////
const initialFormValues = {
  name: "",
  size: "",
  red: true,
  bbq: false,
  alfredo: false,
  pepperoni: false,
  sausage: false,
  bacon: false,
  spicy: false,
  chicken: false,
  peppers: false,
  olives: false,
  pineapple: false,
  special: "",
};

const initialFormErrors = {
  name: "",
  size: "",
  red: false,
  bbq: false,
  alfredo: false,
  pepperoni: false,
  sausage: false,
  bacon: false,
  spicy: false,
  chicken: false,
  peppers: false,
  olives: false,
  pineapple: false,
  special: "",
};

const initialOrders = [];
const initialDisabled = true;

const App = () => {
  //// STATES /////
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  //// HELPERS /////
  const getOrders = () => {
    axios
      .get("https://reqres.in/api/orders")
      .then((res) => {
        setOrders(res.data.data);
      })
      .catch((err) => console.error(err));
  };

  const postNewOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/orders")
      .then((res) => setOrders([newOrder, ...orders]))
      .catch((err) => console.error(err))
      .finally(() => setFormValues(initialFormValues));
  };

  ///// EVENT HANDLERS /////
  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      red: formValues.red,
      bbq: formValues.bbq,
      alfredo: formValues.alfredo,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      bacon: formValues.bacon,
      spicy: formValues.spicy,
      chicken: formValues.chicken,
      peppers: formValues.peppers,
      olives: formValues.olives,
      pineapple: formValues.pineapple,
      special: formValues.special.trim(),
    };
    postNewOrder(newOrder);
  };

  ////// SIDE EFFECTS //////
  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

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
          |
          <Link to="pizza " className="px-4 text-dark font-modal text-xl">
            Order
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pizza" element={<Form />} />
        {/* <Route path="confirmation" element={<Confirmation />} /> */}
      </Routes>
    </>
  );
};
export default App;
