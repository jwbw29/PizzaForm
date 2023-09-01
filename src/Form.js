import { Link, useNavigate } from "react-router-dom";

export default function Form(props) {
  const { values, change, submit, disabled, errors } = props;
  const navigate = useNavigate();

  const onSubmit = (evt) => {
    evt.preventDefault();
    navigate("/confirmation");
    submit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <>
      <div className="flex bg-primaryColor h-fit justify-center">
        {/* ///// MODAL //////// */}
        <div className="flex flex-col bg-tertiaryColor ring-secondaryColor ring-4 rounded-md h-fit my-40 justify-around items-center">
          {/*//// FORM HEADER //// */}
          <div className="flex flex-col w-full h-fit">
            <h2 className="text-center font-modal text-3xl py-4">
              Build Your Own Pizza
            </h2>
            <img src="./Pizza.jpg" alt="pizza" className="w-full h-56" />
          </div>

          {/* ////// FORM BODY/////// */}
          <div className="flex flex-col w-full">
            {/* ///// FORM CONTENT /////// */}
            <form id="pizza-form" onSubmit={onSubmit} className="flex flex-col">
              {/* ////// WHO FOR? /////// */}
              <div className="flex flex-col">
                <h2
                  for="name-input"
                  className="bg-secondaryColor font-comicSans text-xl font-medium pl-2 py-5"
                >
                  *Who's the order for?
                </h2>
                <div className="h-fit p-4">
                  <input
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    id="name-input"
                    type="text"
                    placeholder="Enter Name"
                    className="ring-gray-300 ring-1 pl-1 bg-tertiaryColor rounded-sm h-8"
                  />
                  <div id="name-error" className="text-red-500 text-sm">
                    {errors.name}
                  </div>
                </div>
              </div>

              {/* ///// CHOOSE SIZE ////// */}
              <div className="flex flex-col">
                <h2 className="bg-secondaryColor font-comicSans text-xl font-medium pl-2 py-5">
                  *Choose Size:
                </h2>
                <div className="h-fit p-4">
                  <select
                    name="size"
                    id="size-dropdown"
                    value={values.size}
                    onChange={onChange}
                    className="ring-1 ring-gray-300 pl-1
                  bg-tertiaryColor rounded-sm h-8"
                  >
                    {" "}
                    <option value="">---Select a Size---</option>
                    <option value="small">10"</option>
                    <option value="medium">12"</option>
                    <option value="large">14"</option>
                  </select>
                  <div id="size-error" className="text-red-500 text-sm">
                    {errors.size}
                  </div>
                </div>
              </div>

              {/* ////// CHOOSE SAUCE /////// */}
              <div className="flex flex-col">
                <h2 className="bg-secondaryColor font-comicSans text-xl font-medium pl-2 py-5">
                  *Choose Sauce:
                </h2>
                <div className="flex justify-left h-fit p-4">
                  <div className="flex flex-col pr-8">
                    <div>
                      <input
                        name="sauce"
                        checked={values.sauce === "red"}
                        onChange={onChange}
                        id="red"
                        type="radio"
                        value="red"
                        className="border pl-1 bg-tertiaryColor rounded-sm"
                      />
                      <label className="pl-5" for="red">
                        Original Red
                      </label>
                    </div>
                    <div>
                      <input
                        name="sauce"
                        checked={values.sauce === "bbq"}
                        onChange={onChange}
                        id="bbq"
                        type="radio"
                        value="bbq"
                        className="border pl-1 bg-tertiaryColor rounded-sm"
                      />
                      <label className="pl-5" for="bbq">
                        BBQ Sauce
                      </label>
                    </div>
                    <div>
                      <input
                        name="sauce"
                        checked={values.sauce === "alfredo"}
                        onChange={onChange}
                        id="alfredo"
                        type="radio"
                        value="alfredo"
                        className="border pl-1 bg-tertiaryColor rounded-sm"
                      />
                      <label className="pl-5" for="alfredo">
                        Alfredo
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* ////// CHOOSE TOPPINGS /////// */}
              <div className="flex flex-col">
                <h2 className="bg-secondaryColor font-comicSans text-xl font-medium pl-2 py-5">
                  Choose Toppings:
                </h2>

                {/* ///// TOPPING SELECTIONS ////// */}
                <div className="flex justify-left h-fit p-4">
                  {/* //// left column ////// */}
                  <div className="flex flex-col pr-8">
                    <div>
                      <input
                        name="pepperoni"
                        id="pepperoni"
                        checked={values.pepperoni}
                        onChange={onChange}
                        type="checkbox"
                        className="border pl-1 bg-tertiaryColor rounded-sm"
                      />
                      <label className="pl-5" for="pepperoni">
                        Pepperoni
                      </label>
                    </div>
                    <div>
                      <input
                        name="sausage"
                        id="sausage"
                        checked={values.sausage}
                        onChange={onChange}
                        type="checkbox"
                        className="border pl-1 bg-tertiaryColor rounded-sm"
                      />
                      <label className="pl-5" for="sausage">
                        Sausage
                      </label>
                    </div>
                    <div>
                      <input
                        name="bacon"
                        id="bacon"
                        checked={values.bacon}
                        onChange={onChange}
                        type="checkbox"
                        className="border pl-1 bg-tertiaryColor rounded-sm"
                      />
                      <label className="pl-5" for="bacon">
                        Bacon
                      </label>
                    </div>
                    <div>
                      <input
                        name="spicy"
                        id="spicy"
                        checked={values.spicy}
                        onChange={onChange}
                        type="checkbox"
                        className="border pl-1 bg-tertiaryColor rounded-sm"
                      />
                      <label className="pl-5" for="spicy">
                        Spicy Italian Sausage
                      </label>
                    </div>
                  </div>

                  {/* ///// right column ////// */}
                  <div className="flex flex-col">
                    <div>
                      <input
                        name="chicken"
                        id="chicken"
                        checked={values.chicken}
                        onChange={onChange}
                        type="checkbox"
                        className="border pl-1 bg-tertiaryColor rounded-sm"
                      />
                      <label className="pl-5" for="chicken">
                        Chicken
                      </label>
                    </div>
                    <div>
                      <input
                        name="peppers"
                        id="peppers"
                        checked={values.peppers}
                        onChange={onChange}
                        type="checkbox"
                        className="border pl-1 bg-tertiaryColor rounded-sm"
                      />
                      <label className="pl-5" for="peppers">
                        Green Peppers
                      </label>
                    </div>
                    <div>
                      <input
                        name="olives"
                        id="olives"
                        checked={values.olives}
                        onChange={onChange}
                        type="checkbox"
                        className="border pl-1 bg-tertiaryColor rounded-sm"
                      />
                      <label className="pl-5" for="olives">
                        Black Olives
                      </label>
                    </div>
                    <div>
                      <input
                        name="pineapple"
                        id="pineapple"
                        checked={values.pineapple}
                        onChange={onChange}
                        type="checkbox"
                        className="border pl-1 bg-tertiaryColor rounded-sm"
                      />
                      <label className="pl-5" for="pineapple">
                        Pineapple
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* ////// SPECIAL INSTRUX /////// */}
              <div className="flex flex-col">
                <h2 className="bg-secondaryColor font-comicSans text-xl font-medium pl-2 py-5">
                  Special Instructions:
                </h2>
                <div className="h-fit p-4">
                  <textarea
                    name="special"
                    id="special-text"
                    value={values.special}
                    onChange={onChange}
                    type="text"
                    placeholder="Provide any special instructions..."
                    className="ring-1 ring-gray-300 h-20 pl-1 bg-tertiaryColor rounded-sm w-full"
                  />
                </div>
              </div>

              {/* /////// ORDER BUTTON /////// */}
              <div className="flex flex-col items-end h-fit p-8">
                <p className="mb-2 font-bold text-xl">Total: $19.99</p>
                {/* <Link to="/confirmation"> */}
                <button
                  disabled={disabled}
                  id="order-button"
                  onClick={onSubmit}
                  className="disabled:text-white disabled:bg-gray-300 disabled:ring-0 mt-2 rounded-lg bg-primaryColor h-14 w-36 text-xl text-tertiaryColor font-bold hover:bg-tertiaryColor hover:ring-2 hover:ring-primaryColor hover:text-primaryColor "
                >
                  Place Order
                </button>
                {/* </Link> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
