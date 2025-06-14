import axios from "axios";
import instance from "./interceptor";
interface queryCategory {
  name: string;
}

interface Params {
  pageNumber?: number;
  pageSize?: number;
  sortOrder?: string;
}

const getCategories = async (pageNumber = 1): Promise<any> => {
  try {
    const res = await axios.get(
      `http://localhost:8080/api/public/categories?pageNumber=${
        pageNumber - 1
      }&pageSize=10&sortOrder=des`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

const getCategoriesNoPaging = async (): Promise<any> => {
  try {
    const res = await axios.get(
      `http://localhost:8080/api/public/categories/all`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

const getCategoryById = async (id: string): Promise<any> => {
  try {
    const res = await axios.get(
      `http://localhost:8080/api/public/categories/${id}`
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const createCategory = async (name: string): Promise<any> => {
  try {
    const res = await instance.post(
      "http://localhost:8080/api/admin/categories",
      {
        name: name,
      }
    );

    console.log(res.data);
    return res.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

const updateCategory = async (user: any): Promise<any> => {
  console.log(user);
  try {
    const res = await instance.put(
      `http://localhost:8080/api/admin/categories/${user.categoryId}`,
      {
        name: user.name,
      }
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const uploadImageCategory = async (
  idCategory: string,
  image: any
): Promise<any> => {
  try {
    const res = await instance.put(
      `http://localhost:8080/api/admin/categories/${idCategory}/image`,
      image,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Đảm bảo rằng content-type là multipart
        },
      }
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

const deleteCategory = async (id: string): Promise<any> => {
  try {
    const res = await instance.delete(
      `http://localhost:8080/api/admin/categories/${id}`
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export {
  getCategories,
  getCategoriesNoPaging,
  createCategory,
  deleteCategory,
  getCategoryById,
  updateCategory,
  uploadImageCategory,
};