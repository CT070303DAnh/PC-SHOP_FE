import { formatPrice } from "../../utils/product.utils";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useLocation, useSearchParams } from "react-router-dom";
const Card = ({ item }: any) => {
  const {
    productName,

    discount,
    price,

    specialPrice,
  } = item;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden screenhover:translate-y-1 ease-in-out duration-300 hover:border-2 hover:border-red-500 ">
      <div className="relative">
        <LazyLoadImage
          className=""
          src={`http://localhost:8080/${item.image}`}
        ></LazyLoadImage>
        <div className="absolute top-0 right-0 text-blue-800 bg-blue-200 p-1 text-sm">
          <span>-</span>
          {discount}%
        </div>
      </div>
      <div className="p-3 flex flex-col gap-2 items-start">
        <h3 className="text-sm font-medium text-[#000000CC] line-clamp-2">
          {productName}
        </h3>
        
       <p className="line-through text-sm text-gray-400">
  {price === 0 ? "" : ` ${formatPrice(price)} đ`}
</p>
        <div className="flex gap-1">
          <div className="flex">
            {" "}
           
            <div className="text-blue-600 font-bold">
              {specialPrice === 0 ? (
      <Link to="/connect" className="text-red-500 hover:underline">
        Liên hệ
      </Link>
    ) : ` ${formatPrice(specialPrice)} đ`}
              </div>
             
          </div>
          {/* <div>
            <button>Mua ngay</button>
          </div> */}
        </div>
      </div>
    </div>
  );
//   return (
//   <div className="bg-white shadow-md rounded-lg overflow-hidden screenhover:translate-y-1 ease-in-out duration-300 hover:border-2 hover:border-red-500 h-80"> {/* Set a fixed height */}
//     <div className="relative">
//       <LazyLoadImage
//         className="w-full h-48 object-cover" // Ensure images are uniform
//         src={`http://localhost:8080/${item.image}`}
//       />
//       <div className="absolute top-0 right-0 text-red-400 bg-red-100 p-1 text-sm">
//         <span>-</span>
//         {discount}%
//       </div>
//     </div>
//     <div className="p-3 flex flex-col gap-2 items-start">
//       <h3 className="text-sm font-medium text-[#000000CC] line-clamp-2">
//         {productName}
//       </h3>
      
//       <p className="line-through text-sm text-gray-400">
//         đ {formatPrice(price)}
//       </p>
//       <div className="flex gap-1">
//         <div className="flex">
//           <span className="text-blue-600">đ</span>
//           <p className="text-blue-600 font-bold">{formatPrice(specialPrice)}</p>
//         </div>
//       </div>
//     </div>
//   </div>
// );
};

export default Card;
