"use client";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  if (totalPages <= 1) return null; // Hide pagination if only one page

  return (
    <div className="flex justify-center mt-6 space-x-2">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          className={`w-3 h-3 rounded-full ${
            currentPage === index ? "bg-black" : "bg-gray-300 hover:bg-gray-500"
          }`}
          onClick={() => onPageChange(index)}
          aria-label={`Go to page ${index + 1}`}
        ></button>
      ))}
    </div>
  );
};

export default Pagination;
