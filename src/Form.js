import { Link } from "react-router-dom";

export default function Form() {
  return (
    <>
      <div className="flex bg-primaryColor h-fit justify-center">
        {/* ///// MODAL //////// */}
        <div className="flex flex-col bg-tertiaryColor ring-secondaryColor ring-4 rounded-md h-fit mb-56 mt-56 justify-around items-center">
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
            <form id="pizza-form" className="flex flex-col">
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
                    id="name-input"
                    type="text"
                    placeholder="Enter Name"
                    className="border pl-1 bg-tertiaryColor rounded-sm"
                  />
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
                    className="border pl-1
                  bg-tertiaryColor rounded-sm"
                  >
                    {" "}
                    <option value="">---Select a Size---</option>
                    <option value="small">10"</option>
                    <option value="medium">12"</option>
                    <option value="large">14"</option>
                  </select>
                </div>
              </div>

              {/* ////// CHOOSE SAUCE /////// */}
              <div className="flex flex-col">
                <h2 className="bg-secondaryColor font-comicSans text-xl font-medium pl-2 py-5">
                  *Choose Sauce:
                </h2>

                {/* ///// SAUCE SELECTIONS ////// */}
                <div className="flex justify-left h-fit p-4">
                  <div className="flex flex-col pr-8">
                    <div>
                      <input
                        name="red"
                        id="red"
                        type="radio"
                        className="border pl-1 bg-tertiaryColor rounded-sm"
                      />
                      <label className="pl-5" for="red">
                        Original Red
                      </label>
                    </div>
                    <div>
                      <input
                        name="bbq"
                        id="bbq"
                        type="radio"
                        className="border pl-1 bg-tertiaryColor rounded-sm"
                      />
                      <label className="pl-5" for="bbq">
                        BBQ Sauce
                      </label>
                    </div>
                    <div>
                      <input
                        name="alfredo"
                        id="alfredo"
                        type="radio"
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
                    name="special-text"
                    id="special-text"
                    type="text"
                    placeholder="Provide any special instructions..."
                    className="border pl-1 bg-tertiaryColor rounded-sm w-full"
                  />
                </div>
              </div>

              {/* /////// ORDER BUTTON /////// */}
              <div className="flex flex-col items-center h-fit p-8">
                <p className="mb-2 font-bold text-xl">Total: $19.99</p>
                <Link to="/confirmation">
                  <button
                    type="submit"
                    id="order-button"
                    name="order-button"
                    className="mt-2 rounded-full bg-primaryColor h-14 w-36 text-xl text-tertiaryColor font-bold hover:bg-tertiaryColor hover:ring-2 hover:ring-primaryColor hover:text-primaryColor"
                  >
                    Place Order
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
