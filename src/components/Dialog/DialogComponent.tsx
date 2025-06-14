import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import { setOpenDialog } from "../../reducer/dialog.reducer";

export default function DialogComponent({ message }: any) {
  // let [isOpen, setIsOpen] = useState(true);
  const isOpenDialog = useSelector(
    (state: RootState) => state.dialog.isOpenDialog
  );
  // function open() {
  //   setIsOpen(true);
  // }

  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpenDialog) {
      const timer = setTimeout(() => {
        dispatch(setOpenDialog(!isOpenDialog));
      }, 3000);
      return () => clearTimeout(timer);
    }
    // Cleanup timeout on unmount
  }, [dispatch, isOpenDialog]);

  function close() {
    dispatch(setOpenDialog(!isOpenDialog));
  }

  return (
    <>
      {/* <Button
        onClick={open}
        className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        Open dialog
      </Button> */}

      <Dialog
        open={isOpenDialog}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-black p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white flex justify-center"
              >
                <Check size={40} />
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50 text-center">
                {message}
              </p>
              {/* <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div> */}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
