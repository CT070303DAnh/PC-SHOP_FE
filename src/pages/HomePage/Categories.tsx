import { useQuery } from "@tanstack/react-query";
import CategorySwiper from "./CategorySwiper";
import { getCategoriesNoPaging } from "../../api/categories";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Categories = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesNoPaging,
  });

  if (error) return <p>Không có dữ liệu về categories</p>;

  return (
    <div style={{ background: "white" }} className="lg:px-40 sm:px-20 px-5">
      <h3 className="p-5 text-[#0000008A]">Danh mục</h3>

      {isLoading ? (
        <div>
          <Skeleton count={3} height={40} width="100%" duration={2} />
         
        </div>
      ) : (
        // Hiển thị CategorySwiper khi dữ liệu đã được tải
        data && <CategorySwiper data={data.body} />
      )}
    </div>
  );
};

export default Categories;
