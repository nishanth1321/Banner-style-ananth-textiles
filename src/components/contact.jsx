import React, { useState } from "react";

// Import FontAwesome icons
import {
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaGlobe,
  FaSave,
} from "react-icons/fa";

const Contact = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  // Updated city data with one phone number for each location
  const cities = [
    { name: "Elampillai", contact: "8870657104" },
    { name: "Kondalampatti", contact: "9894377104" },
    { name: "Jalakandapuram", contact: "9994377104" },
    { name: "Omalur", contact: "8870813104" },
    { name: "Kumarapalayam", contact: "7845876104" },
    { name: "Dindigul", contact: "9994054104" },
    { name: "Arani", contact: "9677768104" },
    { name: "Yelahanka", contact: "7845930104" },
    { name: "Bangalore", contact: "9994021104" },
    { name: "Madanapalle", contact: "7305969104" },
    { name: "Sathyamangalam/Sirumugai", contact: "9944655104" },
    { name: "Karur", contact: "8870777104" },
    { name: "Coimbatore Office", contact: "9994633104" },
    { name: "Salem Office", contact: "9994109104" },
  ];

  // Handle city selection
  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);

    // Find the contact number based on the selected city
    const cityData = cities.find((c) => c.name === city);
    setContactNumber(cityData ? cityData.contact : "");
  };

  return (
    <div className="relative p-6 mt-8 bg-white rounded-lg shadow-lg lg:w-[47vw] lg:h-[35vh] border-2 border-red-200 mx-2"> {/* Added border-4 class */}
      {/* Grid Layout for Dropdown and Contact Display */}
      <div className="grid grid-cols-1 gap-8 border-red-600 md:grid-cols-2">
        {/* Left Side: City Dropdown */}
        <div className="flex flex-col justify-center">
          <label className="mb-2 text-gray-700">
            Select your city to contact a local representative:
          </label>
          <select
            value={selectedCity}
            onChange={handleCityChange}
            className="p-3 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="">-- Select City --</option>
            {cities.map((city, index) => (
              <option key={index} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        {/* Right Side: Contact Number Display */}
        <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-md shadow-sm">
          {contactNumber ? (
            <>
              <p className="text-lg font-bold text-gray-800">{selectedCity}</p> {/* Display City Name */}
              <p className="text-lg text-gray-700">
                Contact Number:{" "}
                <span className="font-bold">{contactNumber}</span>
              </p>
              {/* Save Contact Button */}
              <a
                href={`tel:${contactNumber}`}
                className="flex items-center px-6 py-2 mt-4 text-white transition duration-300 ease-in-out bg-red-500 rounded-lg shadow-lg hover:bg-red-600"
              >
                <FaSave className="mr-2" /> Save Contact
              </a>
            </>
          ) : (
            <p className="text-lg text-gray-700">
              Select a city to view the contact number.
            </p>
          )}
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-3 text-center">
        <h3 className="mb-4 text-gray-700">Connect with us on:</h3>
        <div className="flex justify-center space-x-4">
          {/* Email */}
          <a
            href="mailto:info@ananthtextiles.com"
            className="text-2xl text-red-600"
          >
            <FaEnvelope />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/ananthtextiles"
            className="text-2xl text-red-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/Ananthtextiles"
            className="text-2xl text-red-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>

          {/* Twitter (X) */}
          <a
            href="https://x.com/ananthtextiles?mx=2"
            className="text-2xl text-red-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919842234567"
            className="text-2xl text-red-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>

          {/* Website */}
          <a
            href="https://ananthtextiles.com"
            className="text-2xl text-red-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
