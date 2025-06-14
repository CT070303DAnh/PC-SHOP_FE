import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Prop {
  totalPages: number;
  totalItems: number;
  pageNumber: number;
}

const Pagination = ({
  totalPages,
  totalItems,
  pageNumber,
  pageSize,
  firstPage,
  lastPage,
  pathName,
  countProduct,
  totalElements,
}: any) => {
  const [newPageNumber, setNewPageNumber] = useState<number>(pageNumber);

  const navigate = useNavigate();
  // Tạo mảng trang cần hiển thị
  const getPages = () => {
    const pages = [];
    if (totalPages <= 5) {
      // Hiển thị tất cả trang nếu ít hơn hoặc bằng 5 trang
      for (let i = 0; i < totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (pageNumber <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (pageNumber >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          pageNumber - 1,
          pageNumber,
          pageNumber + 1,
          "...",
          totalPages + 1
        );
      }
    }
    return pages;
  };
  const paginate = getPages();
  let tmp = pageNumber * pageSize + pageSize;
  return (
    <>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing{" "}
              <span className="font-medium">
                {(pageNumber - 1) * pageSize + countProduct}
              </span>{" "}
              to{" "}
              <span className="font-medium">
                {tmp < totalItems ? tmp : totalItems}
              </span>{" "}
              of <span className="font-medium">{totalElements}</span> results
            </p>
          </div>
          <div>
            <nav
              aria-label="Pagination"
              className="isolate inline-flex -space-x-px rounded-md shadow-sm gap-3"
            >
              {!firstPage && (
                <button
                  onClick={() => {
                    setNewPageNumber(pageNumber - 1);
                    navigate(`${pathName}?page=${pageNumber - 1}`);
                  }}
                  aria-current="page"
                  className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-black focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Prev
                </button>
              )}
              {paginate.map((item, index) => {
                let newItem = Number(item) + 1;

                if (newItem === newPageNumber) {
                  return (
                    <div
                      key={index}
                      aria-current="page"
                      className="relative z-10 inline-flex border-blue-600 items-center bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      {newItem}
                    </div>
                  );
                }
                return (
                  <button
                    onClick={() => {
                      setNewPageNumber(newItem);
                      navigate(`${pathName}?page=${newItem}`);
                    }}
                    key={index}
                    aria-current="page"
                    className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-black focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {newItem}
                  </button>
                );
              })}
              {!lastPage && (
                <button
                  onClick={() => {
                    setNewPageNumber(pageNumber + 1);
                    navigate(`${pathName}?page=${pageNumber + 1}`);
                  }}
                  aria-current="page"
                  className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-black focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Next
                </button>
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
