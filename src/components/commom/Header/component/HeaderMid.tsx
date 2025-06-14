import React from "react";
import { Link } from "react-router-dom";
import InputSearch from "../../../InputSearch/InputSearch";
import { BsCart } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import { getACart } from "../../../../api/cart";
import { formatPrice } from "../../../../utils/product.utils";
import { useDispatch, useSelector } from "react-redux";
import  { useEffect, useState } from "react";
import { RootState } from "../../../../stores/store";
import { logout } from "../../../../reducer/user.reducer";
import { getUserRoles } from "../../../../api/auth";
const HeaderMid = () => {
  const { data } = useQuery({
    queryKey: ["cart"],
    queryFn: getACart,
  });
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchRoles = async () => {
      const roles = await getUserRoles();
      if (roles.includes("ROLE_ADMIN")) {
        setIsAdmin(true);
      }
    };
    fetchRoles();
  }, []);
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  const cartProducts = data?.body?.products || []; // Safe access
  const cartProductCount = cartProducts.length;

  return (
    <div className="flex bg-[#2A6FA9] text-white py-4 px-4">
        <div className="text-2xl font-bold">
             <Link to={"/"}>
                <img className="rounded-lg" width="221" height="110" src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/500368107_1833790020732430_8835429006755069748_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vnrWTImtTtIQ7kNvwGE4ief&_nc_oc=AdnSNdkO4sskfbWI_XkWjbpHD-Js6uoFXSOQHKP3DsU5Om81uvPBo15pGzropLfL1tI&_nc_zt=23&_nc_ht=scontent.fhan18-1.fna&_nc_gid=Gn39uqhHd-kIlSHJgAyEcQ&oh=00_AfPKQpso9kTPbbPuI27MoJdjUTrEVKZ8f4U-ILU4VSqq5g&oe=684A5EC3" alt="" />
             </Link>
      </div>

      <div className="w-[50%] px-3 py-2 rounded-full bg-[#1b4f72] text-white placeholder-white focus:outline-none flex items-center gap-2">
        <InputSearch className="w-4/5" />
      </div>

      <div className="ml-4 px-4 py-2 bg-[#2A6FA9] text-white rounded hover:bg-[#193b51] transition duration-300"> 
           <div className="flex flex-col space-y-1">
                <span className="flex items-center space-x-1">
                    <span>📞:</span>
                     <span>0914.268.535</span>
                 </span>
                <span className="flex items-center space-x-1">
                    <span>📞:</span>
                     <span>0123.456.789</span>
               </span>
          </div>
        </div>

      <div>     
         <div className="ml-4 px-4">
             <ul className=" sm:text-[13px] sm:gap-2 sm:flex sm:items-center flex items-center text-[10px] ">
        
                  {!user ? (
          <>
                   <li className="ml-4 px-4 py-2 bg-[#1b4f72] text-white rounded hover:bg-[#193b51] transition duration-300">
                     <Link to="/login">
                      <span>Đăng nhập</span>
                    </Link>
                   </li>
                    <li className="text-slate-400">|</li>
                    <li className="ml-4 px-4 py-2 bg-[#1b4f72] text-white rounded hover:bg-[#193b51] transition duration-300">
                      <Link to="/login">
                        <span>Đăng ký</span>
                     </Link>
                   </li>
          </>
                   ) : (
                     <div className="flex">
                        <li className="ml-4 px-4 py-2 bg-[#1b4f72] text-white rounded hover:bg-[#193b51] transition duration-300">
                           <Link to="/">
                               <span>{user.userName}</span>
                           </Link>
                       </li>
                        <li
                            className="ml-4 px-4 py-2 bg-[#1b4f72] text-white rounded hover:bg-[#193b51] transition duration-300"
                          onClick={() => dispatch(logout())}
                                            >
                             <span>Đăng xuất</span>
                         </li>
                      </div>
        )}
                </ul>
        </div>


      </div>

      
      <Link to={`/cart`} replace>



        <div className="ml-4 px-4 py-2 bg-[#1b4f72] text-white rounded hover:bg-[#193b51] transition duration-300 text-white text-3xl relative group/cart ">
          <BsCart />
          ___
          {cartProductCount > 0 && (
            <div className="rounded-full p-1 absolute top-[-12%] right-[-9%] w-5 h-5 text-xs flex justify-center items-center bg-white text-[#1b4f72]">
              {cartProductCount}
            </div>
          )}
          {cartProductCount > 0 && (
            <div className="triangle-after group/detail invisible group-hover/cart:visible bg-white absolute right-0 border-[1px] border-gray-400 w-[350px] z-10 p-3 mt-4 shadow-lg">
              <h3 className="text-gray-500 text-base capitalize">
                Sản phẩm mới thêm
              </h3>
              <ul className="mt-4 space-y-2">
                {cartProducts.map((product: any, index: any) => (
                  <li key={index} className="flex">
                    <div className="flex items-start w-4/5">
                      <div className="w-2/5">
                        <img
                          className="w-full h-auto object-cover"
                          src={`http://localhost:8080/${product.image}`}
                          alt={product.name || "Product Image"}
                        />
                      </div>
                      <span className="line-clamp-1 text-black text-sm ml-2">
                        {product.productName || "Sản phẩm không có tên"}
                      </span>
                    </div>
                    <h3 className="text-red-500 text-sm w-1/5">
                      {product.specialPrice
                        ? `${formatPrice(product.specialPrice)} đ`
                        : "N/A"}
                    </h3>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Link>
      {isAdmin && (
        <div className="flex ml-5 px-4 py-2 bg-[#1b4f72] text-white rounded hover:bg-[#193b51] transition duration-300 text-white text-2xl relative">
          <Link to="/dashboard">
          Dành cho admin</Link>
        </div>
      )}
    </div>
  );
};

export default HeaderMid;
