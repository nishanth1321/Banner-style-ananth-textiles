import React from "react";
import Contact from "./contact"; // Import the Contact component
import YearsOfExcellence from "./excellence"; // Import the YearsOfExcellence component
import ParticlesComponent from "./particles"; // Import the ParticlesComponent
import img from "../assets/ananthbanner.png";

const SmScreen = () => {
  return (
    <div className="relative flex items-center justify-center h-full w-[90%] bg-white mx-auto my-6 rounded-lg overflow-hidden block lg:hidden">
      {/* Particles as Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticlesComponent />
      </div>

      {/* Main Content on Top of Particles */}
      <div className="relative z-10 flex flex-col w-full h-[100%] bg-transparent backdrop-blur-lg shadow-2xl shadow-red-800">
        {/* Top for the image */}
        <div className="h-[20%] w-[100%] relative">
          <img
            src={img} // Placeholder image URL, replace with your actual image
            alt="Small Screen"
            className="object-cover w-full h-full shadow-xl rounded-xl"
          />
          {/* Positioning the Contact component below the image */}
          <div className="absolute right-0 z-20 top-10">
            <Contact />
          </div>
        </div>

        {/* Bottom for the content */}
        <div className="relative flex flex-col items-center w-full h-full p-4 text-black mt-96 ">
          {/* Full width for YearsOfExcellence */}
          <div className="w-full mb-4">
          <p className="flex items-start justify-center mb-10 font-serif text-3xl font-bold text-red-700">ANANTH TEXTILE</p>
            <div className="flex items-center justify-center w-full">
              <YearsOfExcellence />
            </div>
          </div>

          {/* Right side: Other content (red container and text) */}
          <div className="w-full">
            <div className="flex flex-col items-center justify-center w-full">
              {/* Small red container for 'Top Saree Dealer' */}
              <div className="px-4 py-2 mb-4 text-white bg-red-500 rounded-md">
                Finest of all
              </div>

              {/* Existing text content */}
              <p className="text-center text-gray-600 text-md sm:text-lg">
                Offering a wide range of sarees, from minimal to luxurious,
                tailored to your unique style.
              </p>
              <p className="mt-4 text-center text-gray-600 text-md sm:text-lg">
                Premium sarees sourced directly from the finest manufacturers in
                Tamil Nadu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmScreen;
