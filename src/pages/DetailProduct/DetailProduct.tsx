import HeaderTop from "../../components/commom/Header/component/HeaderTop";
import HeaderMid from "../../components/commom/Header/component/HeaderMid";
import SwiperThumbs from "./SwiperThums";
import MainProduct from "./MainProduct";
import { DetailLayout } from "./DetailLayout";
import Product from "../../components/commom/Product";
import FooterComponent from "../../components/commom/FooterComponent";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAProductByProductId } from "../../api/products";
import DialogComponent from "../../components/Dialog/DialogComponent";

const DetailProduct = () => {
  const location = useLocation();
  const productId = location.state?.productId;

  const { data, error, isLoading } = useQuery({
    queryKey: ["product", productId], // Bao gồm productId trong queryKey
    queryFn: async () => {
      if (!productId) throw new Error("Product ID is missing");
      return getAProductByProductId(productId);
    },
    enabled: !!productId, // Chỉ kích hoạt khi có productId
  });

  if (!productId) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-red-600">
          Product ID is missing or invalid.
        </p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading text-red-600 loading-spinner loading-xs"></span>
        <span className="loading loading-spinner text-red-600 loading-sm"></span>
        <span className="loading loading-spinner text-red-600 loading-md"></span>
        <span className="loading loading-spinner text-red-600 loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-red-600">
          Failed to fetch product details. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100">
      <DialogComponent message="Thêm vào giỏ hàng thành công" />
      <div className="bg-blue-500 pb-5">
        <HeaderTop />
        <HeaderMid />
      </div>
      <div className="lg:px-40 px-5 mt-4">
        <div className="bg-white lg:flex py-5 px-4">
          <div className="lg:w-5/12">
            <SwiperThumbs img={data.body.image} />
          </div>
          <div className="lg:w-7/12">
            <MainProduct product={data.body} />
          </div>
        </div>
        <DetailLayout>
          {/* dính XSS */}
          <div dangerouslySetInnerHTML={{ __html: data.body.description }} />
        </DetailLayout>
        <Product />
      </div>
      <FooterComponent />
    </div>
  );
};

export default DetailProduct;
