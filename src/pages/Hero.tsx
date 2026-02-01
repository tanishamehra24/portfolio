import Pic from "../assets/picture.jpg";
import {Link} from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-[#0f172a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-20 lg:px-12 ">
        <div className="space-y-6 animate-fadeUp text-center lg:text-left">
          <h2 className="text-3xl text-[#3696c2c9] tracking-wide">
            Hi I'm Taneesha
          </h2>
          <h2 className="text-6xl  text-blue-400 font-semibold leading-tight">
            FRONTEND <span className="text-gray-100">DEVELOPER</span>
          </h2>
          <p className="text-[#31abe3c9]  text-2xl font-semibold">
            Building Clean & modern web apps
          </p>
          <hr className="text-gray-500 " />
          <p className="text-gray-300 text-lg">
            I create responsive and user-friendly interfaces <br /> using React.
          </p>
          <Link
            to={"/projects"}
            className="bg-blue-600 my-5 px-4 py-2 hover:bg-blue-500 text-lg rounded-sm font-semibold text-gray-100 shadow-lg active:scale-95 transform transition-all cursor-pointer"
          >
            View Work
          </Link>
          <Link
            to={"/contact"}
            className="bg-[#0f172a] text-gray-100 my-5 mx-4 px-4 py-2 border border-gray-700 text-lg rounded-sm font-semibold shadow-lg hover:bg-gray-800 active:scale-95 transform transition-all cursor-pointer "
          >
            Contact Me
          </Link>
        </div>
        <div className="md:flex justify-center hidden ">
          <div className="bg-linear-to-br from-[#38bdf8]/20 to-transparent w-84 h-84 rounded-md">
            <img className="max-w-full h-auto rounded-xl" src={Pic} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
