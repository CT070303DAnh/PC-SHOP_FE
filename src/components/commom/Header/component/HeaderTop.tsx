import React from "react";
import { FaAngleDown, FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../../stores/store";
import { logout } from "../../../../reducer/user.reducer";

import { IoLogoYoutube } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";

const HeaderTop = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  return (
    <nav className="bg-[#143e5a] text-white py-4 px-4 ">
      {/* Bên trái */}
      {/* <ul className="lg:flex hidden gap-2 h-5">
        <li>Kênh người bán</li>
        <li className="text-slate-400">|</li>
        <li>Tải ứng dụng</li>
        <li className="text-slate-400">|</li>
        <li className="flex gap-x-2 items-center">
          <div>Kết nối</div>

          <FaFacebook />

          <FaSquareInstagram />
        </li>
      </ul> */}
       <div className="bg-[#1b4f72] text-white text-sm py-5 px-6 flex justify-between items-center ">
        <span>HOTLINE: <strong>0354.687.540</strong></span>
        
        <div className="flex items-center gap-x-2">
      <FaFacebook className="text-blue-600" />
     <a href="#" className="hover:underline">Facebook</a>
     <IoLogoYoutube className="text-red-600"/>
     <a href="#" className="hover:underline">Youtube</a>
     <FaTiktok />
          <a href="#" className="hover:underline">TikTok</a>
          <a href="#" className="hover:underline">
            PC SHOP</a>
        </div>  
      </div>
      {/* bên phải */}
      
    
    
    </nav>
  );
};

export default HeaderTop;
