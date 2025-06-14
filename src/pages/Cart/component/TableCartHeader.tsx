const TableCartHeader = () => {
  return (
    <ul className="flex px-5 py-4 bg-white ">
      <li className="w-4/12 flex gap-2 items-center">
        <input type="checkbox" className="size-4" />
        <span className="text-black">Sản Phẩm</span>
      </li>
      <li className="text-gray-500 w-2/12 flex justify-center">Đơn giá</li>
      <li className="text-gray-500 w-2/12 flex justify-center">Số lượng</li>
      <li className="text-gray-500 w-2/12 flex justify-center">Số tiền</li>
      <li className="text-gray-500 w-2/12 flex justify-center">Thao tác</li>
    </ul>
  );
};
export default TableCartHeader;
