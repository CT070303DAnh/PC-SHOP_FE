import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { searchProducts } from "../../api/products";
import Card from "../ui/Card";
import HeaderMid from "../commom/Header/component/HeaderMid";

const ITEMS_PER_PAGE = 10;

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", keyword],
    queryFn: () => searchProducts(keyword),
    enabled: !!keyword,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("name-asc");

  useEffect(() => {
    setCurrentPage(1);
  }, [sortOption]);

  if (isLoading) return <p>Đang tải...</p>;
  if (error) return <p>Có lỗi xảy ra!</p>;

  const products = data?.body?.context || [];
  const totalProducts = data?.body?.totalElements || 0;
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const paginatedProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <HeaderMid />
      <div className="container mx-auto p-4 mt-28">
        <h1 className="text-3xl text-center font-bold mb-2">Tìm kiếm</h1>
        <p className="text-lg text-center text-gray-800 mb-6">
          Có {totalProducts} sản phẩm cho tìm kiếm
        </p>
        <h2 className="text-sm font-bold mb-4">
          Kết quả tìm kiếm cho: "{keyword}"
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.length > 0 ? (
            paginatedProducts.map((item: any) => (
             <Link
            key={item.id}
            to={`/${item.productName}`}
            state={{ productId: item.id }}
            replace
          >
            <Card item={item} />
          </Link>

            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              Không tìm thấy sản phẩm nào.
            </p>
          )}
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Trước
          </button>
          <span className="px-4 py-2">
            Trang {currentPage} / {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Sau
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchResultsPage;
