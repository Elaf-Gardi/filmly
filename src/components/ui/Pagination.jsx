import React from "react"

const Pagination = ({ moviesPerPage, totalMovies, paginate, currentPage }) => {
  const pageNumbers = []

  // Calculate the total number of pages
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="flex items-center justify-center p-5 gap-4">
      <button
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-primary_green uppercase align-middle transition-all rounded-full select-none hover:bg-primary_green/10 active:bg-primary_green/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        onClick={() => paginate(currentPage > 1 ? currentPage - 1 : currentPage)}
        disabled={currentPage === 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          ></path>
        </svg>
        Previous
      </button>
      <div className="flex items-center gap-2">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-primary_green transition-all hover:bg-primary_green/80 active:bg-primary_green/70 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${
              currentPage === number ? "bg-primary_green text-darkGray" : ""
            }`}
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              {number}
            </span>
          </button>
        ))}
      </div>
      <button
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-primary_green uppercase align-middle transition-all rounded-full select-none hover:bg-primary_green/10 active:bg-primary_green/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        onClick={() =>
          paginate(
            currentPage < pageNumbers.length
              ? currentPage + 1
              : currentPage
          )
        }
        disabled={currentPage === pageNumbers.length}
      >
        Next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          ></path>
        </svg>
      </button>
    </div>
  )
}

export default Pagination
