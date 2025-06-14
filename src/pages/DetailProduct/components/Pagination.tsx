import React, { useState } from "react";
import ReactPaginate from "react-paginate";
const Pagination = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const handlePageClick = (event: {
    selected: React.SetStateAction<number>;
  }) => {
    setPageNumber(event.selected);
  };
  return (
    <div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={10}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"flex space-x-2"}
        pageClassName={"bg-gray-200 p-2 rounded"}
        pageLinkClassName={"hover:bg-blue-500"}
        previousClassName={"bg-gray-300 p-2 rounded"}
        nextClassName={"bg-gray-300 p-2 rounded"}
        activeClassName={"bg-blue-500 text-white"}
      />
    </div>
  );
};

export default Pagination;
