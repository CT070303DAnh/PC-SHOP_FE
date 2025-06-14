import { Link, useLocation } from "react-router-dom";
import Header from "../../components/commom/Header/Header";
import Carousel from "./Carousel";
import FooterComponent from "../../components/commom/FooterComponent";
import { useQuery } from "@tanstack/react-query";
import { getProductsByCategoryId } from "../../api/products";
import Card from "../../components/ui/Card";

const Detail = () => {
  const location = useLocation();
  const categoryId = location.state?.categoryId;

  const { isLoading, error, data } = useQuery({
    queryKey: ["products", categoryId],
    queryFn: () => getProductsByCategoryId(categoryId),
    enabled: !!categoryId, // Chỉ chạy query khi có categoryId
  });

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
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div className="relative">
      <Header />
      <div className="lg:px-40 sm:px-20 pt-6 relative">
        <Carousel />
      </div>
      <div className="grid xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-4 grid-cols-1 lg:px-40 sm:px-20 gap-2 pt-6 ">
        {data.body.map((item: any) => {
          return (
            <Link
              key={item.id}
              to={`/${item.productName}`}
              state={{
                productId: item.id,
              }}
              replace
            >
              {" "}
              <Card item={item}></Card>
            </Link>
          );
        })}
      </div>
      <FooterComponent />
    </div>
  );
};

export default Detail;
