import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toastify() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      closeOnClick : true
      pauseOnHover : true
      draggable : true
      newestOnTop
      limit={3}
      theme="light"

      /* 🎨 Enhanced Design */
      toastClassName={() =>
        "relative flex p-4 rounded-xl bg-zinc-900 text-white shadow-xl border border-zinc-700"
      }
      bodyClassName="text-sm font-medium"
      progressClassName="bg-gradient-to-r from-amber-400 to-yellow-500"
    />
  );
}