import Items from "./Items";
import Button from "./Button";
import { Plus } from "lucide-react";
import { useDispatch } from "react-redux";
import { setOpenDialog, setTypeDialog } from "../../reducer/dialog.reducer";

const Table = ({ data, isLoading, error }: any) => {
  const dispatch = useDispatch();

  // console.log(data?.body?.context);
  const handleClick = () => {
    dispatch(setOpenDialog(true));
    dispatch(setTypeDialog("create"));
  };

  if (isLoading) return <p>Đang tải ...</p>;
  if (error) return <p>Không có dữ liệu về categories</p>;

  if (!data?.body?.context.length)
    return (
      <Button
        onClick={handleClick}
        className="border border-gray-400 flex items-center p-2 rounded-md text-sm gap-1"
      >
        Thêm
        <Plus />
      </Button>
    );

  return (
    <div className="bg-white mt-6 p-5 rounded-md">
      <div className="flex justify-between">
        <h3 className="capitalize text-lg font-bold mb-6">All Categories</h3>
        <Button
          onClick={handleClick}
          className="border border-gray-400 flex items-center p-2 rounded-md text-sm gap-1"
        >
          Thêm
          <Plus />
        </Button>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-center text-gray-400">
          <div className="w-3/12">ID</div>
          <div className="w-3/12">Name</div>
          <div className="w-3/12">Image</div>
          <div className="w-3/12">Action</div>
        </div>
        {data?.body?.context.map((item: any) => (
          <Items key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Table;
