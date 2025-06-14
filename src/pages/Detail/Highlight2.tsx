import { FaList } from "react-icons/fa";

const Highlight2 = () => {
  return (
    <div className="text-center my-6">
      {/* Đường kẻ & Tiêu đề */}
      <div className="flex items-center justify-center">
        <div className="w-1/4 h-[1px] bg-[#295d92]"></div>
        <div className="mx-3 text-[#295d92] font-bold text-lg flex items-center gap-2">
          <FaList className="text-[#295d92]" />
          CÁC SẢN PHẨM KHÁC
        </div>
        <div className="w-1/4 h-[1px] bg-[#295d92]"></div>
      </div>
    </div>
    

    
  );
};

export default Highlight2;