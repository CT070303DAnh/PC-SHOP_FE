import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../../api/products";
import { getCategories } from "../../../../api/categories";
import Card from "../../../../components/ui/Card";
import { Product } from "../../../../types/Product.type";
import ProductModal from "./components/ProductModal";
import { Button } from "@headlessui/react";
import Sidebar from "../../Sidebar";
import Pagination from "../../../../components/Pagination/Pagination";
import { useLocation, useSearchParams } from "react-router-dom";

const EditProduct = () => {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({});
  const [type, setType] = useState(1); // 1 = add, 2 = edit, 3 = remove
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPageNumber = parseInt(searchParams.get("page") || "1", 10);
  // Fetch products with a unique queryKey
  const {
    data: productData,
    error: productError,
    isLoading: productLoading,
  } = useQuery({
    queryKey: ["products-admin", initialPageNumber],
    queryFn: ({ pageNumber, pageSize }: any) =>
      getProducts(initialPageNumber - 1, pageSize),
  });

  // const {
  //   firstPage,
  //   lastPage,
  //   pageNumber,
  //   pageSize,
  //   totalElements,
  //   totalPages,
  // } = productData.body;

  // Fetch categories with a unique queryKey
  const {
    data: categoryData,
    error: categoryError,
    isLoading: categoryLoading,
  } = useQuery({
    queryKey: ["categories-admin"], // Unique queryKey for categories
    queryFn: async () => getCategories(),
  });

  const handleButton = () => {
    setOpen(true); // Trigger setOpen
  };

  // Loading state checks
  if (productLoading || categoryLoading) return <div>Loading...</div>;
  if (productError)
    return <div>Error loading products: {productError.message}</div>;
  if (categoryError)
    return <div>Error loading categories: {categoryError.message}</div>;

  return (
    <div className="flex bg-blue-50  gap-20">
      <Sidebar />
      <div>
        <ProductModal
          open={open}
          setOpen={setOpen}
          categoryData={categoryData}
          product={product}
          type={type}
        />{" "}
        {/* Pass setOpen to the modal for closing */}
        <Button
          onClick={() => {
            setType(1);
            setOpen(true);
          }}
          className="rounded bg-sky-600 py-2 px-4 text-sm text-white"
        >
          Thêm sản phẩm
        </Button>
        <ul className="grid grid-cols-4 gap-4">
          {productData?.body.context &&
            productData.body.context.map((item: Product) => {
              return (
                <li key={item.id}>
                  <Card item={item} />
                  <div className="w-full flex gap-2">
                    <button
                      onClick={() => {
                        setProduct(item);
                        setType(2); // Edit type
                        setOpen(true);
                      }}
                      className="rounded bg-sky-600 py-2 px-4 text-sm text-white w-1/2"
                    >
                      Sửa sản phẩm
                    </button>
                    <button
                      onClick={() => {
                        setProduct(item);
                        setType(3); // Edit type
                        setOpen(true);
                      }}
                      className="rounded bg-sky-600 py-2 px-4 text-sm text-white w-1/2"
                    >
                      Xoá sản phẩm
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
        <Pagination
          firstPage={productData.body?.firstPage}
          countProduct={productData.body?.context.length}
          lastPage={productData.body?.lastPage}
          pageNumber={productData.body?.pageNumber}
          pageSize={productData.body?.pageSize}
          totalElements={productData.body?.totalElements}
          totalPages={productData.body?.totalPages}
          pathName={location.pathname}
        />
      </div>
    </div>
  );
};

export default EditProduct;
