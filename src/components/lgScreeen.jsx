import React from 'react';
import Contact from './contact'; // Import the Contact component
import YearsOfExcellence from './excellence'; // Import the YearsOfExcellence component
import ParticlesComponent from './particles'; // Import the ParticlesComponent
import img from '../assets/ananthbanner.png';

const LgScreen = () => {
  return (
    <div className="relative flex items-center justify-center h-full w-[50%] bg-white mx-auto my-12 rounded-lg overflow-hidden">
      {/* Particles as Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticlesComponent />
      </div>

      {/* Main Content on Top of Particles */}
      <div className="relative z-10 flex flex-col w-full h-[90vh] bg-transparent backdrop-blur-lg shadow-2xl shadow-red-800">
        {/* Top 30% for the image */}
        <div className="h-[30%] relative">
          <img
            src={img} // Placeholder image URL, replace with your actual image
            alt="Large Screen"
            className="object-cover w-full h-full shadow-xl rounded-xl"
          />
          {/* Positioning the Contact component below the image */}
          <div className="absolute z-20 right-2 top-36">
            <Contact />
          </div>
        </div>

        {/* Bottom 70% for the content */}
        <div className="h-[70%] flex p-4 text-white relative">
          {/* Left side (empty or can include other content if needed) */}
          <div className="flex flex-col items-center justify-center w-1/2">
            {/* You can leave this blank or add more content here */}
          </div>

          {/* Right side (text content area) */}
          <div className="relative flex flex-col items-center justify-center w-1/2 py-4 text-black mt-28">
  {/* Small red container for 'Top Saree Dealer' */}
  <div className="px-4 py-2 mb-4 text-white bg-red-500 rounded-md">
    Top Saree Dealer
  </div>

  {/* Existing text content */}
  <p className="absolute bottom-0 text-gray-600 text-md sm:text-lg">
    Offering a wide range of sarees, from minimal to luxurious, tailored to your unique style.
  </p>
  <p className="absolute mb-1 text-gray-600 text-md bottom-20 sm:text-lg">
    Premium sarees sourced directly from the finest manufacturers in Tamil Nadu.
  </p>
</div>

          {/* Positioning the YearsOfExcellence in the bottom-left corner */}
          <div className="absolute z-20 bottom-4 left-4">
            <YearsOfExcellence />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LgScreen;
