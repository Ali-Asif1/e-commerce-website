"use client";

import { useState } from "react";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Menu
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-40 bg-white border rounded shadow-lg">
          <button className="block px-4 py-2 w-full text-left hover:bg-gray-200">
            Item 1
          </button>
          <button
            onClick={() => setIsSubOpen(!isSubOpen)}
            className="block px-4 py-2 w-full text-left hover:bg-gray-200"
          >
            Item 2 ▶
          </button>

          {isSubOpen && (
            <div className="absolute left-full top-0 mt-0 w-40 bg-white border rounded shadow-lg">
              <button className="block px-4 py-2 w-full text-left hover:bg-gray-200">
                Sub Item 1
              </button>
              <button className="block px-4 py-2 w-full text-left hover:bg-gray-200">
                Sub Item 2
              </button>
            </div>
          )}

          <button className="block px-4 py-2 w-full text-left hover:bg-gray-200">
            Item 3
          </button>
        </div>
      )}
    </div>
  );
};

export default DropDown;
