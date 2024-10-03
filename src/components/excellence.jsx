import React, { useEffect, useState } from "react";
import star from "../assets/star.png";

const YearsOfExcellence = () => {
  // State for number count
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Animate the number to count up to 40
    let startCount = 0;
    const endCount = 40;
    const duration = 3000; // 3 seconds duration for the animation
    const increment = (endCount / duration) * 50; // How much to increment each time

    const countInterval = setInterval(() => {
      startCount += increment;
      if (startCount >= endCount) {
        startCount = endCount;
        clearInterval(countInterval); // Stop interval after reaching 40
      }
      setCount(Math.floor(startCount)); // Update state with the new value
    }, 50); // Run the interval every 50ms

    return () => clearInterval(countInterval); // Cleanup function
  }, []);

  return (
<div className="hover:scale-105 transition-transform duration-300 bg-white shadow-red-500/20 p-2 rounded-lg h-[25vh] lg:w-[15vw] sm:w-[25vw] shadow-xl flex flex-col justify-center items-center">

      <p className="text-xl font-bold text-red-700 sm:text-2xl">
        Over <span className="text-3xl font-bold sm:text-5xl">{count}</span>
      </p>
      <img
        src={star}
        alt="Ananth Textiles Logo"
        className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16"
      />
      <p className="p-2 text-lg text-red-700">
        Years of excellence in the Textile industry.
      </p>
    </div>
  );
};

export default YearsOfExcellence;
