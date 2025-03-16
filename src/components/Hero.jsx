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
    <div className="relative z-[0] min-h-screen flex items-center justify-center bg-[#2e3b3d] overflow-hidden ">
      {/* Decorations */}
      <img
        src="/public/photos/Shape-1.png"
        className="absolute z-[2] top-64 right-0 size-100"
        alt="pic"
      />
      <img
        src="/public/photos/Shape-2.png"
        className="absolute z-[2] top-48 right-10 size-50 rotate-16"
        alt="pic"
      />
      <img
        src="/public/photos/Shape-2.png"
        className="absolute z-[2] top-48 right-160 size-20 rotate-16"
        alt="pic"
      />
      <img
        src="/public/photos/Shape-8.png"
        className="absolute z-[2] top-120 right-180 size-4"
        alt="pic"
      />
      <img
        src="/public/photos/Shape-8.png"
        className="absolute z-[2] top-130 right-180 size-4"
        alt="pic"
      />
      <img
        src="/public/photos/Shape-2.png"
        className="absolute z-[2] top-148 right-10 size-25 rotate-16"
        alt="pic"
      />
      <img
        src="/public/photos/Shape-2.png"
        className="absolute z-[2] top-148 right-100 size-40 rotate-16"
        alt="pic"
      />
      <img
        src="/public/photos/Shape-2.png"
        className="absolute z-[2] top-8 right-100 size-40 rotate-16"
        alt="pic"
      />
      <img
        src="/public/photos/Shape-1.png"
        className="absolute z-[2] top-64 right-150 size-50"
        alt="pic"
      />
      {/* <img src="/public/photos/shape-circles.png" className="absolute z-[1]" alt="" /> */}

      {/* Left side */}
      <div className="flex flex-col items-start justify-center mx-8 gap-8 w-1/2 text-white">
        <div className="flex flex-col items-start justify-center gap-2">
          <h1 className="text-5xl font-bold">
            Hi, my name is <span className="text-green-300">Rashid Seif</span>
          </h1>
          <span className="h-2 w-24 bg-green-300"></span>
        </div>
        <p className="intro text-xl">
          <i>Welcome to my portfolio.</i> I am a{" "}
          <span className="text-green-300">full-stack developer</span>{" "}
          passionate about crafting scalable and efficient applications.
        </p>
        <button className="w-1/4 bg-blue-500 text-white text-xl transition duration-600 ease-in-out hover:bg-white hover:text-blue-600 border-2 border-blue-500 px-4 py-2 rounded-full shadow-lg shadow-green-300 font-bold cursor-pointer">
          Contact Me
        </button>
        <SocialNetworks/>
      </div>
      {/* Right Side */}
      <div className="flex items-center justify-center w-1/2">
        <div className="size-120 bg-green-200 rounded-full flex items-center justify-center">
          <img
            src="/public/photos/my-pic.png"
            alt="pic"
            className="z-[10]"
          />
        </div>
      </div>
    </div>
  );
}
