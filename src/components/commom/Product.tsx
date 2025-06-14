import { useQuery } from "@tanstack/react-query";
import Card from "../ui/Card";
import { getProducts } from "../../api/products";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Pagination from "../Pagination/Pagination";

const Product = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  // Lấy số trang từ query string, mặc định là 1
  const initialPageNumber = parseInt(searchParams.get("page") || "1", 10);

  // Ép kiểu sortOrder chỉ cho phép giá trị "asc", "desc" hoặc ""
  const rawSort = searchParams.get("sort") || "";
  const sortOrder: "" | "asc" | "desc" =
    rawSort === "asc" || rawSort === "desc" ? rawSort : "";

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = e.target.value;
    setSearchParams((params) => {
      params.set("sort", newSort);
      params.set("page", "1"); // Reset lại về trang đầu khi đổi sort
      return params;
    });
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["products", initialPageNumber, sortOrder],
    queryFn: () => getProducts(initialPageNumber - 1, 10, sortOrder),
  });

  if (isLoading) return <p>Đang tải ...</p>;
  if (error) return <p>Không có dữ liệu về sản phẩm</p>;

  const {
    firstPage,
    lastPage,
    pageNumber,
    pageSize,
    totalElements,
    totalPages,
  } = data.body;
  return (
    <>
      {/* Dropdown sắp xếp */}
      <div className="flex justify-end mb-6">
  <div className="relative inline-block text-left">
    <label htmlFor="sortOrder" className="mr-2 text-sm font-medium text-gray-700">
      Sắp xếp:
    </label>
    <select
      id="sortOrder"
      value={sortOrder}
      onChange={handleSortChange}
      className="appearance-none border border-gray-300 text-gray-700 text-sm rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="">-- Chọn --</option>
      <option value="asc">Giá tăng dần</option>
      <option value="desc">Giá giảm dần</option>
    </select>

    {/* Icon dropdown mũi tên */}
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  </div>
</div>


      {/* Danh sách sản phẩm */}
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-4 grid-cols-1 gap-2 pt-5">
        {data.body.context.map((item: any) => (
          <Link
            key={item.id}
            to={`/${item.productName}`}
            state={{ productId: item.id }}
            replace
          >
            <Card item={item} />
          </Link>
        ))}
      </div>

      {/* Phân trang */}
      <Pagination
        firstPage={firstPage}
        countProduct={data.body.context.length}
        lastPage={lastPage}
        pageNumber={pageNumber}
        pageSize={pageSize}
        totalElements={totalElements}
        totalPages={totalPages}
        pathName={location.pathname}
      />
    </>
  );
};

export default Product;
