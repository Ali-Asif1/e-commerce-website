import React, { useState } from "react";

const StarRating = ({ totalStars = 5 }) => {
  const [selectedRating, setSelectedRating] = useState(0); 
  const [hoverRating, setHoverRating] = useState(0); 

  const handleMouseEnter = (index:any) => {
    setHoverRating(index + 1);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index:any) => {
    setSelectedRating(index + 1);
  };

  return (
    <div className="flex ">
      {Array.from({ length: totalStars }).map((_, index) => (
        <svg
          key={index}
          className={`w-6 h-6 cursor-pointer transition-transform transform ${
            index < (hoverRating || selectedRating)
              ? "text-yellow-400 scale-110"
              : "text-gray-300"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.117 3.432a1 1 0 00.95.69h3.612c.969 0 1.371 1.24.588 1.81l-2.92 2.13a1 1 0 00-.364 1.118l1.117 3.432c.3.921-.755 1.688-1.538 1.118l-2.92-2.13a1 1 0 00-1.176 0l-2.92 2.13c-.783.57-1.838-.197-1.538-1.118l1.117-3.432a1 1 0 00-.364-1.118l-2.92-2.13c-.783-.57-.381-1.81.588-1.81h3.612a1 1 0 00.95-.69l1.117-3.432z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;

