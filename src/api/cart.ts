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

const baseUrl = "http://localhost:8080/api/carts";

const getAllCarts = async (): Promise<any> => {
  try {
    const res = await instance.get(`${baseUrl}/users/cart`);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getACart = async (): Promise<any> => {
  try {
    const res = await instance.get(
      `http://localhost:8080/api/carts/users/cart`
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const addAProductCart = async (
  productId: string,
  quantity: number
): Promise<any> => {
  try {
    const res = await instance.post(
      `${baseUrl}/products/${productId}/quantity/${quantity}`
    );

    console.log(res.data);
    return res.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

const updateCart = async (
  productId: string,
  quantity: number
): Promise<any> => {
  try {
    console.log(productId, quantity);
    const res = await instance.put(
      `${baseUrl}/products/${productId}/quantity/${quantity}`
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteCart = async (cartId: string, productId: string): Promise<any> => {
  try {
    const res = await instance.delete(
      `${baseUrl}/${cartId}/product/${productId}`
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export { getAllCarts, addAProductCart, deleteCart, getACart, updateCart };