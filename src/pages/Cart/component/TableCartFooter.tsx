import React from "react";
import { formatPrice } from "../../../utils/product.utils";

interface TableCartFooterProps {
  totalItems: number;
  totalPrice: number;
}

const TableCartFooter = ({ totalItems, totalPrice }: TableCartFooterProps) => {
  return (
    <ul className="flex px-5 py-4 items-center gap-4 justify-end bg-white sticky bottom-0 z-10">
      <li className="">
        <span className="text-lg">
          Tổng thanh toán {totalItems} sản phẩm :{" "}
        </span>
        <span className="text-[#295d92]">
          đ <span className="text-2xl">{formatPrice(totalPrice)}</span>
        </span>
      </li>
      <button className="bg-[#295d92] text-white px-20 py-2">Mua hàng</button>
    </ul>
  );
};

export default TableCartFooter;
