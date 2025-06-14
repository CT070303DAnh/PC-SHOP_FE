import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import {
  addProduct,
  deleteProduct,
  editProduct,
  uploadImageProduct,
} from "../../../../../api/products";
import SelectCategory from "./SelectCategory";
import "quill/dist/quill.snow.css"; // Ensure Quill styles are imported
import { formatToJavaString } from "../../../../../utils/product.utils";
import ReactQuill from "react-quill"; // Import Quill

type ProductFormData = {
  productName: string;
  description: string;
  discount: string;
  price: string;
  image: File | null;
  quantity: string;
};

interface ProductFormProps {
  categories: any[];
  product: any;
  type: number;
  setOpen: any;
}

const ProductForm = ({
  categories,
  product,
  type,
  setOpen,
}: ProductFormProps) => {
  const [formData, setFormData] = useState<ProductFormData>(
    product || {
      productName: "",
      description: "",
      discount: "",
      price: "",
      image: null,
      quantity: "",
    }
  );
  const [idCategory, setIdCategory] = useState<string>("");
  const [imageFile, setImageFile] = useState<any>();

  const queryClient = useQueryClient();

  const addProductMutation = useMutation({
    mutationFn: async ({
      idCategory,
      formData,
    }: {
      idCategory: string;
      formData: ProductFormData;
    }) => {
      return await addProduct(idCategory, formData);
    },
    onSuccess: async (data) => {
      if (imageFile) {
        await uploadImageProductMutation.mutate({
          idProduct: data.body.id,
          image: imageFile,
        });
      }
      queryClient.invalidateQueries({ queryKey: ["products-admin"] });
    },
    onError: (error) => {
      console.error("Error adding product:", error);
    },
  });

  const uploadImageProductMutation = useMutation({
    mutationFn: async ({
      idProduct,
      image,
    }: {
      idProduct: string;
      image: any;
    }) => {
      return await uploadImageProduct(idProduct, image);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["products-admin"] });
    },
    onError: (error) => {
      console.error("Error uploading image:", error);
    },
  });

  const editProductMutation = useMutation({
    mutationFn: async ({
      idProduct,
      formData,
    }: {
      idProduct: string;
      formData: ProductFormData;
    }) => {
      return await editProduct(idProduct, formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products-admin"] });
    },
    onError: (error) => {
      console.error("Error editing product:", error);
    },
  });

  const deleteProductMutation = useMutation({
    mutationFn: async ({ idProduct }: any) => {
      return await deleteProduct(idProduct);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products-admin"] });
    },
    onError: (error) => {
      console.error("Error deleting product:", error);
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const image = new FormData();
      image.append("image", file);
      setImageFile(image);
    } else {
      console.error("No file selected");
    }
  };

  const handleDescriptionChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      description: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    switch (type) {
      case 1:
        addProductMutation.mutate({ idCategory, formData });
        setOpen(false);
        break;
      case 2:
        editProductMutation.mutate({
          idProduct: product.id,
          formData,
        });
        if (imageFile) {
          uploadImageProductMutation.mutate({
            idProduct: product.id,
            image: imageFile,
          });
        }
        setOpen(false);
        break;
      case 3:
        setOpen(false);
        deleteProductMutation.mutate({ idProduct: product.id });
    }

    setFormData({
      productName: "",
      description: "",
      discount: "",
      price: "",
      image: null,
      quantity: "",
    });
  };

  return type !== 3 ? (
    <form
      onSubmit={handleSubmit}
      className="mx-auto p-6 bg-white rounded-lg shadow-md space-y-4"
    >
      {/* Product Name */}
      <div>
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="productName"
        >
          Product Name
        </label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* Quill Editor for Description */}
      <div>
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <ReactQuill
          value={formData.description}
          onChange={handleDescriptionChange}
          theme="snow"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* Discount */}
      <div>
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="discount"
        >
          Discount (%)
        </label>
        <input
          type="number"
          id="discount"
          name="discount"
          value={formData.discount}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Price */}
      <div>
        <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
          Price (VND)
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Image */}
      <div>
        <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
          Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Quantity */}
      <div>
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="quantity"
        >
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <SelectCategory categories={categories} setIdCategory={setIdCategory} />
      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  ) : (
    <div>
      <p>Bạn có muốn xoá không?</p>
      <button onClick={handleSubmit}>Chắc chắn</button>
    </div>
  );
};

export default ProductForm;