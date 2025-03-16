// import { useEffect } from "react";
import SocialNetworks from "./SocialNetworks";

export default function Home() {
  //   useEffect(() => {
  //     gsap.fromTo(
  //       ".intro",
  //       { opacity: 0, y: 20 },
  //       { opacity: 1, y: 0, duration: 2, ease: "elastic" }
  //     );
  //   }, []);

  return (
    <div className="relative z-[0] min-h-screen flex flex-col sm:flex-row items-center justify-center bg-[#2e3b3d] overflow-hidden ">
      {/* Left side */}
      <div className="flex flex-col sm:items-start items-center justify-center sm:mx-8 gap-8 w-full px-4 my-16 sm:w-1/2 text-white">
        <div className="flex flex-col items-start justify-center gap-2">
          <h1 className="text-3xl sm:text-5xl font-bold">
            Hi, my name is <span className="text-green-300">Rashid Seif</span>
          </h1>
          <span className="h-2 w-24 bg-green-300"></span>
        </div>
        <p className="intro text-xl text-center sm:text-left">
          <i>Welcome to my portfolio.</i> I am a{" "}
          <span className="text-green-300">full-stack developer</span>{" "}
          passionate about crafting scalable and efficient applications.
        </p>
        <button className="sm:w-1/4 bg-blue-500 text-white sm:text-xl text-md transition duration-600 ease-in-out hover:bg-white hover:text-blue-600 border-2 border-blue-500 px-4 py-2 rounded-full sm:shadow-lg shadow-md shadow-green-300 font-bold cursor-pointer">
          Contact Me
        </button>
        <SocialNetworks />
      </div>
      {/* Right Side */}
      <div className="flex items-center justify-center sm:w-1/2 p-16">
        <div className="sm:size-120 rounded-full flex items-center justify-center">
          {/* Decorations */}
          <img
            src="/public/photos/Shape-1.png"
            className="absolute z-[2] top-64 right-0 sm:size-100 size-20 blur-sm"
            alt="pic"
          />
          <img
            src="/public/photos/Shape-2.png"
            className="absolute z-[2] sm:top-48 top-100 right-10 size-50 rotate-16 blur-sm"
            alt="pic"
          />
          <img
            src="/public/photos/Shape-2.png"
            className="absolute z-[2] sm:top-48 top-130 right-160 size-20 rotate-16 blur-sm"
            alt="pic"
          />
          <img
            src="/public/photos/Shape-8.png"
            className="absolute z-[2] top-120 right-180 size-4 blur-sm"
            alt="pic"
          />
          <img
            src="/public/photos/Shape-8.png"
            className="absolute z-[2] top-130 right-180 size-4 blur-sm"
            alt="pic"
          />
          <img
            src="/public/photos/Shape-2.png"
            className="absolute z-[2] sm:top-148 right-10 size-25 rotate-16 blur-sm"
            alt="pic"
          />
          <img
            src="/public/photos/Shape-2.png"
            className="absolute z-[2] top-148 right-100 size-40 rotate-16 blur-sm"
            alt="pic"
          />
          <img
            src="/public/photos/Shape-2.png"
            className="absolute z-[2] sm:top-8 top-88 right-100 size-40 rotate-16 blur-sm"
            alt="pic"
          />
          <img
            src="/public/photos/Shape-1.png"
            className="absolute z-[2] top-64 right-150 size-50 blur-sm"
            alt="pic"
          />
          {/* My photo */}
          <img src="/public/photos/my-pic.png" alt="pic" className="z-[10]" />
        </div>
      </div>
    </div>
  );
}
