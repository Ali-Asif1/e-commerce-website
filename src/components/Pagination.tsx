// "use client"; // This makes the component interactive

// import { useRouter, useSearchParams } from "next/navigation";

// interface PaginationProps {
//   totalPages: number;
//   currentPage: number;
// }

// export default function Pagination({ totalPages, currentPage }: PaginationProps) {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const changePage = (page: number) => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set("page", page.toString());
//     router.push(`?${params.toString()}`);
//   };

//   return (
//     <div className="flex justify-center mt-6">
//       {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//         <button
//           key={page}
//           onClick={() => changePage(page)}
//           className={`mx-1 px-4 py-2 border rounded ${
//             page === currentPage ? "bg-gray-800 text-white" : "bg-gray-200"
//           }`}
//         >
//           {page}
//         </button>
//       ))}
//     </div>
//   );
// }



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
