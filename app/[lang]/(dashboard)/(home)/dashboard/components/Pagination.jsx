// import React from 'react';

// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       onPageChange(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       onPageChange(currentPage + 1);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center mt-4">
//       <button
//         onClick={handlePreviousPage}
//         disabled={currentPage === 1}
//         className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
//       >
//         Previous
//       </button>
//       <span className="mx-2">
//         Page {currentPage} of {totalPages}
//       </span>
//       <button
//         onClick={handleNextPage}
//         disabled={currentPage === totalPages}
//         className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Pagination;
