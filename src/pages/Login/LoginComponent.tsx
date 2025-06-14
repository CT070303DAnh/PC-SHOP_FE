import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import ButtonComponent from "../../components/ui/ButtonComponent";
import InputComponent from "../../components/InputComponent/InputComponent";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { addUser, checkIsAuthenticated } from "../../reducer/user.reducer";
import { login } from "../../api/auth";
import { setAccessTokenToLS } from "../../utils/auth.util";
import { splitJwt } from "../../utils/splitJwt";
import { GoogleLogin } from "@react-oauth/google";

const LoginComponent = () => {
  const [error, setIssue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => login(username, password),
    onSuccess: (user) => {
      console.log(user);
      dispatch(checkIsAuthenticated(true));

      setAccessTokenToLS(splitJwt(user?.jwtToken));
      dispatch(addUser(user));
      navigate("/");
    },
    onError: (error) => {
      const errorMessage =
        error.message || "Đăng nhập thất bại. Vui lòng thử lại.";
      setIssue(errorMessage);
    },
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .required("Tên đăng nhập không được để trống")
        .min(3, "Tên đăng nhập phải có ít nhất 3 ký tự"),
      password: Yup.string()
        .required("Mật khẩu không được để trống")
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
    }),
    onSubmit: (values) => {
      loginMutation.mutate(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="bg-[#fff] my-16 w-96 py-8 px-7 rounded">
        <h3 className="text-[#295d92] text-xl">Đăng nhập</h3>
        <p className="text-[#295d92]">{error}</p>
        <div className="pt-4 flex flex-col gap-y-9">
          <InputComponent
            handleChange={formik.handleChange}
            placeholder="Email/Số điện thoại/Tên đăng nhập"
            type="text"
            value={formik.values.username}
            name="username"
          />
          {formik.errors.username && formik.touched.username && (
            <p className="text-[#295d92] text-sm">{formik.errors.username}</p>
          )}

          <InputComponent
            handleChange={formik.handleChange}
            placeholder="Mật khẩu"
            type="password"
            value={formik.values.password}
            name="password"
          />
          {formik.errors.password && formik.touched.password && (
            <p className="text-[#295d92] text-sm">{formik.errors.password}</p>
          )}

          <ButtonComponent type="submit" style={{ backgroundColor: "#295d92" }}>
            Đăng nhập
          </ButtonComponent>
        </div>

        <div className="flex items-center gap-4 pt-3 pb-4 ">
          <div className="border-solid border-t-2 border-[#dbdbdb] w-full"></div>
          <span className="text-sm uppercase text-[#ccc]">hoặc</span>
          <div className="border-solid border-t-2 border-[#dbdbdb] w-full"></div>
        </div>

        <div >
          {/* <ButtonComponent
            style={{
              backgroundColor: "#fff",
              color: "#000",
              border: "1px solid #ccc",
              flex: 1,
            }}
          >
            <FaFacebook />
            <span>Facebook</span>
          </ButtonComponent>

          <ButtonComponent
            style={{
              backgroundColor: "#fff",
              color: "#000",
              border: "1px solid #ccc",
              flex: 1,
            }}
          >
            <FaGoogle />
            <span>Google</span>
          </ButtonComponent> */}
          <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
        </div>

        <div
          className="text-sm"
          style={{ padding: "20px", textAlign: "center" }}
        >
          <span style={{ color: "rgba(0, 0, 0, .26)" }}>
            Bạn mới biết đến PC SHOP
          </span>
          <Link to="/register">
            <span className="text-[#295d92] ml-1">Đăng ký</span>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginComponent;
