import React, { useState } from "react";

interface Product {
  title: string;
  price: string;
  image: string;
  hoverImage: string;
}

const products: Product[] = [
  {
    title: "MẬT ONG RỪNG SÔNG ĐÀ",
    price: "590,000đ",
    image: "https://hoabanfood.com/wp-content/uploads/Mat-Ong-Rung-Song-Da-2023-end-season-mobile-5-680x383.jpg",
    hoverImage: "https://hoabanfood.com/wp-content/uploads/Mat-Ong-Rung-Song-Da-2021-1-300x169.jpg"
  },
  {
    title: "THỊT TRÂU GÁC BẾP",
    price: "470,000đ",
    image: "https://hoabanfood.com/wp-content/uploads/Thit-Trau-Gac-Bep-cover-2025-2-680x386.jpg",
    hoverImage: "https://hoabanfood.com/wp-content/uploads/thit-gac-bep-2024-banner-mobile-1-300x169.jpg"
  },
  {
    title: "MẬT ONG RUỒI",
    price: "670,000đ",
    image: "https://hoabanfood.com/wp-content/uploads/Mat-Ong-Ruoi-Tay-Bac-11-680x383.jpg",
    hoverImage: "https://hoabanfood.com/wp-content/uploads/Mat-Ong-Ruoi-Tay-Bac-4-300x169.jpg"
  },
  {
    title: "NỤ TAM THẤT",
    price: "370,000đ",
    image: "https://hoabanfood.com/wp-content/uploads/Nu-Tam-That-250gram-2018-3-750px-680x383.jpg",
    hoverImage: "https://hoabanfood.com/wp-content/uploads/cong-dung-nu-tam-that-ad-750-300x169.jpg"
  },
  {
    title: "COMBO MẮC KHÉN & HẠT DỔI",
    price: "280,000đ",
    image: "https://hoabanfood.com/wp-content/uploads/combo-2-mac-khen-hat-doi-2020-2-680x544.jpg",
    hoverImage: "https://hoabanfood.com/wp-content/uploads/combo-mac-khen-hat-doi-2020-3-300x169.jpg"
  },
  {
    title: "CHANH RỪNG NGÂM MẬT ONG",
    price: "240,000đ",
    image: "https://hoabanfood.com/wp-content/uploads/Chanh-Rung-Mat-Ong-2021-6c-680x383.jpg",
    hoverImage: "https://hoabanfood.com/wp-content/uploads/Chanh-Rung-Mat-Ong-2021-3-300x169.jpg"
  },
  {
    title: "CỦ BA KÍCH KHÔ",
    price: "370,000đ",
    image: "https://hoabanfood.com/wp-content/uploads/Ba-Kich-Kho-2-680x382.jpg",
    hoverImage: "https://hoabanfood.com/wp-content/uploads/Ba-Kich-Kho-1-300x169.jpg"
  },
  {
    title: "RƯỢU SÂU CHÍT",
    price: "650,000đ",
    image: "https://hoabanfood.com/wp-content/uploads/Ruou-Sau-Chit-HBF-2018-3.jpg",
    hoverImage: "https://hoabanfood.com/wp-content/uploads/Ruou-Sau-Chit-HBF-2024-1-300x169.jpg"
  }
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [currentImage, setCurrentImage] = useState<string>(product.image);

  return (
    <div 
      className="bg-white shadow-md rounded-lg overflow-hidden screen"
      onMouseEnter={() => setCurrentImage(product.hoverImage)}
      onMouseLeave={() => setCurrentImage(product.image)}
    >
      <img src={currentImage} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-red-500 font-bold">{product.price}</p>
      </div>
    </div>
  );
};

const ProductGrid: React.FC = () => {
  return (
    <div className=" flex container mx-auto p-6">
      <div className="flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;