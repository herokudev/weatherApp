"use client";
import Image from "next/image";

function CustomButton({ title, containerStyles, handleClick, btnType }) {
  let btn_styles = "custom-btn";
  btn_styles = btn_styles + " " + containerStyles;

  return (
    <button
      type={btnType || "button"}
      className={btn_styles}
      onClick={handleClick}
      disabled={false}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}

export default CustomButton;
