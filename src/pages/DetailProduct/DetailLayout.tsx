import React from "react";

interface DetailLayoutProps {
  children?: React.ReactNode;
}

export const DetailLayout = ({ children }: DetailLayoutProps) => {
  return (
    <div className="bg-white px-4 pb-4">
      <h3 className="text-xl py-4 uppercase px-4 bg-gray-100">
        MÔ TẢ SẢN PHẨM
      </h3>
      <div className="px-4 mt-8"> {children}</div>
    </div>
  );
};
