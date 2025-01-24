import React, { useState } from "react";

const SizeDropdown = () => {
  const [selectedSize, setSelectedSize] = useState(""); // Stores the selected size
  const [isOpen, setIsOpen] = useState(false); // Controls the dropdown visibility

  const sizes = ["S", "M", "L", "XL"];

  const handleSelect = (size:string) => {
    setSelectedSize(size);
    setIsOpen(false); // Close the dropdown after selecting a size
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-between w-32 p-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {selectedSize || "Select Size"}
        <svg
          className="w-5 h-5 ml-2 -mr-1 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-10 w-32 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="py-1">
            {sizes.map((size) => (
              <li
                key={size}
                onClick={() => handleSelect(size)}
                className="px-4 py-[2px] text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SizeDropdown;
