import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { updateCart } from "../../../api/cart";

interface QuantitySelectorProps {
  maxQuantity: number;
  initialQuantity?: number;
  productId?: string;
  onQuantityChange?: (quantity: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  maxQuantity,
  productId,
  initialQuantity = 1,
  onQuantityChange = () => {},
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  console.log(quantity);
  const queryClient = useQueryClient();
  const updateCartMutation = useMutation({
    mutationFn: async ({
      productId,
      quantity,
    }: {
      productId: any;
      quantity: number;
    }) => {
      return await updateCart(productId, quantity);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error) => {
      console.error("Error deleting cart item:", error);
      // You might want to show a toast or error message to user here
    },
  });

  const handleDecrease = () => {
    console.log("da bam");
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
      updateCartMutation.mutate({
        productId,
        quantity: -(quantity - newQuantity),
      });
    }
  };

  const handleIncrease = () => {
    if (quantity < maxQuantity) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
      updateCartMutation.mutate({
        productId,
        quantity: newQuantity - quantity,
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= maxQuantity) {
      setQuantity(value);
      onQuantityChange(value);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="flex border border-gray-300 rounded items-center">
        <button
          className="px-3 py-1 border-r flex items-center justify-center border-gray-300 hover:bg-gray-100"
          onClick={handleDecrease}
          disabled={quantity <= 1}
        >
          -
        </button>
        <input
          type="text"
          className="w-12 text-center focus:outline-none"
          value={quantity}
          onChange={handleInputChange}
        />
        <button
          className="px-3 py-1 border-l flex items-center justify-center border-gray-300 hover:bg-gray-100"
          onClick={handleIncrease}
          disabled={quantity >= maxQuantity}
        >
          +
        </button>
      </div>
      {/* <span className="text-gray-500 text-sm">
        {maxQuantity} sản phẩm có sẵn
      </span> */}
    </div>
  );
};
export default QuantitySelector;
