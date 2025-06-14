import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { searchProducts } from "../../api/products";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  className?: string;
}

const InputSearch = ({ className }: Props) => {
  const navigate = useNavigate(); // useNavigate hook from react-router-dom\
  const queryClient = useQueryClient();
  const [text, setText] = useState("");
 
  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate(`/search?keyword=${text}`);
  };
 return (
  <form
    className={`w-full`}
    onSubmit={handleSubmit}
  >
    <div className="relative flex items-center w-full rounded-full overflow-hidden bg-blue-300">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="search"
        id="default-search"
        className="w-full py-2 px-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
        placeholder="Tìm kiếm sản phẩm..."
        required
      />
      <button
        type="submit"
        className="absolute right-4 text-gray-500 hover:text-red-500"
      >
        <CiSearch size={20} />
      </button>
    </div>
  </form>
);

};

export default InputSearch;