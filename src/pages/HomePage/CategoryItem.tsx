import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const CategoryItem = ({ data }: any) => {
  return (
    <div className="flex flex-col items-center p-2 bg-white  shadow hover:shadow-xl transition-shadow ">
      {/* Nơi chứa từng danh mục */}
      <Link
        to={`/categories/${data.name}`}
        state={{
          categoryId: data.id,
        }}
      >
        {" "}
        <span className="text-3xl mb-2">
          <LazyLoadImage
            className="w-32 h-32 rounded-full object-cover"
            src={`http://localhost:8080/${data.image}`}
          ></LazyLoadImage>
        </span>
        <span className="text-center text-xs line-clamp-1">{data.name}</span>
      </Link>
    </div>
  );
};

export default CategoryItem;
