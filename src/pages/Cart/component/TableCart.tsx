import React from "react";
import TableCartHeader from "./TableCartHeader";
import TableCartItem from "./TableCartItem";
import TableCartFooter from "./TableCartFooter";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { deleteCart, getACart } from "../../../api/cart";
import { Product } from "../../../types/Product.type";

const TableCart = () => {
  // Use useQueryClient hook instead of creating new instance
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => getACart(),
  });

  // Properly typed mutation
  const deleteCartMutation = useMutation({
    mutationFn: async ({
      cartId,
      productId,
    }: {
      cartId: string;
      productId: string;
    }) => {
      return await deleteCart(cartId, productId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error) => {
      console.error("Error deleting cart item:", error);
      // You might want to show a toast or error message to user here
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading text-[#295d92] loading-spinner loading-xs"></span>
        <span className="loading loading-spinner text-[#295d92] loading-sm"></span>
        <span className="loading loading-spinner text-[#295d92] loading-md"></span>
        <span className="loading loading-spinner text-[#295d92] loading-lg"></span>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="text-[#295d92] p-4 text-center">
        Đã xảy ra lỗi khi tải giỏ hàng. Vui lòng thử lại sau.
      </div>
    );
  }

  const hasProducts = data?.body?.products && data.body.products.length > 0;

  // Handler for deleting cart items
  const handleDeleteCartItem = (cartId: string, productId: string) => {
    deleteCartMutation.mutate({ cartId, productId });
  };

  return (
    <div className="flex flex-col gap-4">
      <TableCartHeader />

      {hasProducts ? (
        <>
          <ul className="divide-y divide-gray-200">
            {data.body.products.map((product: Product) => (
              <TableCartItem
                key={product.id}
                product={product}
                onDelete={() =>
                  handleDeleteCartItem(data.body.cartId, product.id)
                }
              />
            ))}
          </ul>
          <TableCartFooter
            totalPrice={data.body.totalPrice}
            totalItems={data.body.products.length}
          />
        </>
      ) : (
        <div className="text-center py-8 text-gray-500">
          Giỏ hàng của bạn đang trống
        </div>
      )}
    </div>
  );
};

export default TableCart;
