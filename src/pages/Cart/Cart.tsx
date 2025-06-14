import React from "react";
import HeaderTop from "../../components/commom/Header/component/HeaderTop";

import { Hero } from "./component/Hero";
import TableCart from "./component/TableCart";
import FooterComponent from "../../components/commom/FooterComponent";

const Cart = () => {
  return (
    <div className="">
      <div className="bg-header">
        <HeaderTop />
      </div>
      <div className="px-40 bg-white py-6">
        <Hero></Hero>
      </div>
      <div className="px-40 mt-4">
        <TableCart />
      </div>
      <FooterComponent />
    </div>
  );
};

export default Cart;
