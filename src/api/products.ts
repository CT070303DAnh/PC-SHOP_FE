import axios from "axios";
import instance from "./interceptor";

const addProduct = async (idCategory: string, product: any): Promise<any> => {
  console.log("id nè, product nè", idCategory, product);
  try {
    const res = await instance.post(
      `http://localhost:8080/api/admin/categories/${idCategory}/product`,
      product
    );

    return res.data;
  } catch (error) {
    throw error;
  }
};

const uploadImageProduct = async (
  idProduct: string,
  image: any
): Promise<any> => {
  console.log("id nè, product nè", idProduct, image);
  try {
    const res = await instance.put(
      `http://localhost:8080/api/admin/products/${idProduct}/image`,
      image,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Đảm bảo rằng content-type là multipart
        },
      }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

const editProduct = async (idProduct: string, product: any): Promise<any> => {
  console.log("id nè, product nè", idProduct, product);
  try {
    const res = await instance.put(
      `http://localhost:8080/api/admin/products/${idProduct}`,
      product
    );

    return res.data;
  } catch (error) {
    throw error;
  }
};

const deleteProduct = async (idProduct: string): Promise<any> => {
  try {
    const res = await instance.delete(
      `http://localhost:8080/api/admin/product/${idProduct}`
    );

    return res.data;
  } catch (error) {
    throw error;
  }
};

const getProducts = async (
  pageNumber = 0,
  pageSize = 10,
  sortOrder: "asc" | "desc" | "" = ""
): Promise<any> => {
  try {
    const params = new URLSearchParams();
    params.append("pageNumber", pageNumber.toString());
    params.append("pageSize", pageSize.toString());
    if (sortOrder) {
      params.append("sortOrder", sortOrder);
    }

    const res = await axios.get(
      `http://localhost:8080/api/public/products?${params.toString()}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};


const searchProducts = async (searchText: string): Promise<any> => {
  try {
    const res = await axios.get(
      `http://localhost:8080/api/public/products/keyword/${searchText}?pageNumber=0&pageSize=100&sortOrder=des`
    );

    return res.data;
  } catch (error) {
    throw error;
  }
};

const getProductsByCategoryId = async (id: string): Promise<any> => {
  try {
    const res = await axios.get(
      `http://localhost:8080/api/public/categories/${id}/product`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};
const getProductsByCategoryIdNew = async (id: string): Promise<any> => {
  try {
    const res = await axios.get(
      `http://localhost:8080/api/public/categories/${id}/product`
    );
    return res.data.body;
  } catch (error) {
    throw error;
  }
};
const getAProductByProductId = async (id: string): Promise<any> => {
  try {
    const res = await axios.get(
      `http://localhost:8080/api/public/products/${id}`
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
export {
  addProduct,
  getProducts,
  searchProducts,
  getProductsByCategoryId,
  getAProductByProductId,
  editProduct,
  deleteProduct,
  uploadImageProduct,
  getProductsByCategoryIdNew
};
