import axios from "axios";
import instance from "./interceptor";

const urlAuth = "http://localhost:8080/api/auth";
const register = async (
  username: string,
  email: string,
  password: string
): Promise<any> => {
  console.log(email, password);

  try {
    const res = await axios.post(`${urlAuth}/signup`, {
      username: username,
      email: email,
      password: password,
    });
    return res.data.body;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      throw Error(error.response.data.message || "Đăng ký không thành công");
    } else {
      throw Error("Đăng ký không thành công");
    }
  }
};

const login = async (username: string, password: string): Promise<any> => {
  try {
    const res = await axios.post(`${urlAuth}/signin`, {
      username: username,
      password: password,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw Error("Tên đăng nhập hoặc tài khoản không đúng");
  }
};

const getUser = async () => {
  try {
    const res = await instance.get(`${urlAuth}/user`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
const getUserRoles = async () => {
  try {
    const user = await getUser();
    if (user) {
      return user.roles;
    }
    return [];
  } catch (error) {
    console.error("Error fetching user roles:", error);
    return [];
  }
};

export { login, register, getUser,getUserRoles };
