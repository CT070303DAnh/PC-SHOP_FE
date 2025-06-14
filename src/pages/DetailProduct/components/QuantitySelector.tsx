import { useState } from "react";

interface QuantitySelectorProps {
  maxQuantity: number;
  initialQuantity?: number;
  onQuantityChange?: (quantity: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  maxQuantity,
  initialQuantity = 1,
  onQuantityChange = () => {},
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleIncrease = () => {
    if (quantity < maxQuantity) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
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
      <span className="text-gray-600">Số Lượng</span>
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
      <span className="text-gray-500 text-sm">
        {maxQuantity} sản phẩm có sẵn
      </span>
    </div>
  );
};
export default QuantitySelector;
