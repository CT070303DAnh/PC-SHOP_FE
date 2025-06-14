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

const baseUrl = "http://localhost:8080/api";

const createAddress = async (formData: any): Promise<any> => {
  console.log(formData);
  try {
    const res = await instance.post(`${baseUrl}/addresses`, formData);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getAddress = async (): Promise<any> => {
  try {
    const res = await instance.get(`${baseUrl}/users/addresses`);
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

const updateAddress = async (
  addressId: string,
  formData: any
): Promise<any> => {
  console.log(formData);
  try {
    const res = await instance.put(
      `${baseUrl}/addresses/${addressId}`,
      formData
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteAddress = async (idAddress: string): Promise<any> => {
  try {
    const res = await instance.delete(`${baseUrl}/address/${idAddress}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export {
  createAddress,
  addAProductCart,
  deleteAddress,
  getAddress,
  updateAddress,
};