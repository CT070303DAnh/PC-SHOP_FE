import React from "react";

interface Props {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  handleOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset"; // Thêm thuộc tính type với các giá trị hợp lệ
}

const ButtonComponent: React.FC<Props> = ({
  children,
  style,
  handleOnClick,
  type = "button", // Mặc định là "button" nếu không truyền
}) => {
  return (
    <div>
      <button
        onClick={handleOnClick}
        className="py-2 text-white flex items-center gap-2 justify-center w-full"
        style={style}
        type={type} // Truyền type vào button HTML
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonComponent;
