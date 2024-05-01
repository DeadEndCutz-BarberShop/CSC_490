import { toast, Bounce } from "react-toastify";

export const getToast = (message, type) => {
  return toast(message, {
    type: type,
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    theme: "light",
    transition: Bounce,
  });
};
