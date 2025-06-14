import React from "react";
import FooterComponent from "../../components/commom/FooterComponent";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "../Register/RegisterComponent";
import { Link } from "react-router-dom";
import Header from "../../components/commom/Header/Header";
const Login = () => {
  return (
    <><Header></Header>
      <a className="flex justify-center items-center py-5">
      <button className="flex items-center bg-[#1877F2] text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-[#166fe5] transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="w-4 h-4 mr-2 fill-white"
        >
          <path d="M279.14 288l14.22-92.66h-88.91V128c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S271.55 0 237.74 0c-73.33 0-121.26 44.38-121.26 124.72V195.3h-81.36V288h81.36v224h100.17V288z" />
        </svg>
        LOGIN WITH FACEBOOK
      </button>
    </a>
      <section className="py-7 lg:px-44 sm:px-20 px-5 ">
        <nav className="flex justify-between items-center text-[#2f56a3]">
          <div className="flex items-center gap-4">
           
            <h3 className=" mt-2 text-2xl text-[#222]">Đăng nhập</h3>
          </div>
          <a href="/">Bạn cần giúp đỡ ?</a>
        </nav>
        {/* phần form */}
      </section>
      <div className="flex">
      <section
        style={{ backgroundColor: "" }}
        className=" lg:bg-
        flex justify-around

        bg-contain h-[85vh] bg-no-repeat bg-center  w-full "
      >
        <div className="lg:flex hidden"></div>
        <LoginComponent></LoginComponent>
      </section>

      <section
        style={{ backgroundColor: "" }}
        className="lg:bg-
        flex justify-around
        bg-contain h-[85vh] bg-no-repeat bg-center  w-full border-l-2 border-gray-200 p-1  "
      >
        <div className="lg:flex hidden"></div>
        <RegisterComponent></RegisterComponent>
      </section>
      </div>
      
      <section>
        <FooterComponent></FooterComponent>
      </section>
    </>
  );
};

export default Login;
