export default function Confirmation() {
  return (
    <>
      <div className="flex bg-primaryColor h-screen justify-center">
        <div className="flex flex-col bg-tertiaryColor ring-secondaryColor ring-4 rounded-md h-96 w-confirm mt-56 justify-around items-center p-8">
          <h2 className="flex text-center font-modal text-4xl">Thank you!</h2>
          <p className="font-comicSans text-xl w-3/4 text-center">
            Your order has been received and will be ready shortly!
          </p>
        </div>
      </div>
    </>
  );
}
