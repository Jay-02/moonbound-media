import logo1 from "../assets/Logo_1.svg";
import logo2 from "../assets/Logo_2.svg";
import logo3 from "../assets/Logo_3.svg";
function Features() {
  return (
    <div className="flex-col min-h-96 bg-accent min-w-full px-40 pt-10 text-white">
      <div className="min-h-88 w-full ">
        <h1 className="flex justify-center text-3xl font-extrabold font-sans">
          We Are Trusted by many beloved brands
        </h1>
        <div className=" flex flex-row justify-center min-w-full py-10 ">
          <img src={logo1} className="py-10 px-20 scale-150" />
          <img src={logo2} className="py-10 px-20 scale-150" />
          <img src={logo3} className="py-10 px-20 scale-150" />
        </div>
        <div className="flex-col justify-center pb-10">
        <h1 className="flex justify-center">Get notified when we drop new merch!</h1>
        </div>
        <div className="w-60 flex justify-center" >
        </div>
      </div>
    </div>
  );
}

export default Features;
