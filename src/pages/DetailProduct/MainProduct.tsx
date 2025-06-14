import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Product } from "../../types/Product.type";
import QuantitySelector from "./components/QuantitySelector";
import { addAProductCart } from "../../api/cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setOpenDialog } from "../../reducer/dialog.reducer";
import { formatPrice } from "../../utils/product.utils";

interface MainProductProps {
  product: Product;
}

const ButtonComponent = ({ onAdd }: any) => (
  <div
    onClick={onAdd}
    className="hover:bg-slate-50 ease-in-out duration-200 text-blue-500 px-4 py-2 bg-blue-100 border-2 border-blue-600 cursor-pointer w-full flex items-center justify-center gap-3"
  >
    <ShoppingCart />
    <span>Thêm vào giỏ hàng</span>
  </div>
);

const MainProduct = ({ product }: MainProductProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (quantity: number) => {
    setQuantity(quantity);
  };
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  // Properly typed mutation
  const addCarttMutation = useMutation({
    mutationFn: async ({
      productId,
      quantity,
    }: {
      productId: string;
      quantity: number;
    }) => {
      return await addAProductCart(productId, quantity);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error) => {
      console.error("Error deleting cart item:", error);
      // You might want to show a toast or error message to user here
    },
  });

  const handleAddAProduct = (productId: string, quantity: number) => {
    addCarttMutation.mutate({ productId, quantity });
  };

  return (
    <div className="px-4 ">
      <h3 className="capitalize text-xl mb-8">{product.productName}</h3>
      <div className="flex items-center p-4 bg-blue-50 mb-6">
        <div className="flex gap-1">
          <div className="flex text-blue-500">
            {" "}
            <span className="text-xl">đ</span>
            <p className="text-2xl">{formatPrice(product.specialPrice)}</p>
          </div>
        </div>
        <p className="line-through text-lg text-gray-400 ml-2">
          đ {formatPrice(product.price)}{" "}
        </p>
      </div>
      <QuantitySelector
        maxQuantity={product.quantity}
        onQuantityChange={handleQuantityChange}
      />
      <div className="flex gap-3 mt-10 w-7/12">
        <ButtonComponent
          onAdd={() => {
            dispatch(setOpenDialog(true));
            handleAddAProduct(product.id, quantity);
          }}
        />
      </div>
    </div>
  );
};

export default MainProduct;
