import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import ButtonComponent from "../../components/ui/ButtonComponent";
import InputComponent from "../../components/InputComponent/InputComponent";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, checkIsAuthenticated } from "../../reducer/user.reducer";
import { register } from "../../api/auth";

const RegisterComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const user = await register(
        formData.username,
        formData.email,
        formData.password
      );
      dispatch(addUser(user));
      dispatch(checkIsAuthenticated(true));
      navigate("/");
    } catch (error: any) {
      setErrorMessage(error.message || "Đăng ký không thành công");
    }
  };

  return (
    <div className="bg-white my-16 w-96 py-8 px-7 rounded shadow-md">
      <h3 className="text-[#295d92] text-xl font-semibold">Đăng ký</h3>

      <div className="pt-8 flex flex-col gap-y-6">
        <InputComponent
          handleChange={handleChange}
          placeholder="Email"
          type="text"
          name="email"
        />

        <InputComponent
          handleChange={handleChange}
          placeholder="Username"
          type="text"
          name="username"
        />

        <InputComponent
          handleChange={handleChange}
          placeholder="Mật khẩu"
          type="password"
          name="password"
        />

        {errorMessage && (
          <p className="text-sm text-red-500 text-center">{errorMessage}</p>
        )}

        <ButtonComponent
          handleOnClick={handleRegister}
          style={{ backgroundColor: "#295d92" }}
        >
          Đăng ký
        </ButtonComponent>
      </div>

      <div className="flex items-center gap-4 pt-4 pb-4">
        <div className="border-t border-gray-300 w-full"></div>
        <span className="text-sm text-gray-400 uppercase">hoặc</span>
        <div className="border-t border-gray-300 w-full"></div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <ButtonComponent
          style={{
            backgroundColor: "#3b5998",
            color: "#fff",
            border: "1px solid #3b5998",
          }}
        >
          <FaFacebook />
          <span>Facebook</span>
        </ButtonComponent>

        <ButtonComponent
          style={{
            backgroundColor: "#db4437",
            color: "#fff",
            border: "1px solid #db4437",
          }}
        >
          <FaGoogle />
          <span>Google</span>
        </ButtonComponent>
      </div>

      <div className="text-sm text-center pt-6">
        <span className="text-gray-500">Bạn đã có tài khoản?</span>
        <Link to="/login" className="text-[#295d92] ml-1 hover:underline">
          Đăng nhập
        </Link>
      </div>
    </div>
  );
};

export default RegisterComponent;
