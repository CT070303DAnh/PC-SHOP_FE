import { Product } from "../../../types/Product.type";
import { formatPrice } from "../../../utils/product.utils";
import QuantitySelector from "./QuantitySelector";
import Card from "../../../components/ui/Card";
import React, { useState, useEffect } from "react";
import { useSearchParams,useLocation, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";



interface TableCartItemProps {
  product: Product;
  onDelete: () => void;
}

const TableCartItem = ({ product, onDelete }: TableCartItemProps) => {
  console.log(product);
  
  return (
    <ul className="flex px-5 py-6 bg-white ">
      <li className="w-4/12 flex gap-2 items-center">
      
          <Link
  to={`/${encodeURIComponent(product.productName)}`}
  state={{ productId: product.id }}
>
  <div className="w-3/5">
    <img className="w-full" src={`http://localhost:8080/${product.image}`} alt={product.productName} />
  </div>
  <div className="line-clamp-2">{product.productName}</div>
</Link>

        
        
        <div className="line-clamp-2">{product.productName}</div>
      </li>
      <li className="text-gray-500 w-2/12 text-xl flex justify-center items-center">
        <p className="line-through  text-gray-400 ml-2">
          đ {formatPrice(product.price)}{" "}
        </p>
        <div className="flex gap-1 ml-2">
          <div className="flex text-[#295d92]">
            {" "}
            <span className="">đ</span>
            <p className="">{formatPrice(product.specialPrice)}</p>
          </div>
        </div>
      </li>
      <li className="text-gray-500 w-2/12 flex justify-center items-center">
        <QuantitySelector
          productId={product.id}
          maxQuantity={1000}
          initialQuantity={product.quantity}
        />
      </li>
      <li className="text-[#295d92] w-2/12 flex justify-center items-center">
        {formatPrice(product.specialPrice * product.quantity)}đ
      </li>
      <li
        className="text-black w-2/12 flex justify-center items-center cursor-pointer"
        onClick={onDelete}
      >
        <button className="bg-[#295d92] btn border-t-cyan-900 text-white ">Xoá</button>
      </li>
    </ul>
  );
};
export default TableCartItem;
