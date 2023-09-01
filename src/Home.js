import { Link } from "react-router-dom";
import Form from "./Form";

export default function Home() {
  return (
    <>
      <div className="flex bg-primaryColor h-screen justify-center items-center">
        <div className="flex flex-col bg-tertiaryColor ring-secondaryColor ring-4 rounded-md h-96 w-auto justify-around items-center p-8">
          <h2 className="flex text-center font-modal text-4xl">
            We let our pizza do the talking!
          </h2>
          <Link to="/pizza">
            <button
              id="order-pizza"
              className="rounded-lg bg-primaryColor h-14 w-36 text-xl text-tertiaryColor font-bold hover:bg-tertiaryColor hover:ring-2 hover:ring-primaryColor hover:text-primaryColor"
            >
              Let's go!
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
