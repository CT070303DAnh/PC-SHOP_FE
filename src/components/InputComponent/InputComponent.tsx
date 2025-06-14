interface Props {
  placeholder: string;
  type?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Hàm xử lý thay đổi
  value?: string; // Thêm thuộc tính value
  name?: string; // Thêm name nếu cần thiết
}

const InputComponent = ({ placeholder, type, handleChange, value, name }: Props) => {
  return (
    <input
      onChange={handleChange} // Gọi hàm handleChange khi có sự thay đổi
      name={name} // Cho phép name để Formik sử dụng
      type={type}
      placeholder={placeholder}
      value={value} // Gắn giá trị từ props
      className="block w-full border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:border-[rgba(0, 0, 0, .54)] sm:text-sm sm:leading-6"
    />
  );
};

export default InputComponent;
