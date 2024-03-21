import React from "react";

const Button = ({ type, title, onClick, icon }) => {
  return (
    <button
      className="px-4 py-3 bg-lightblue-custom text-sm font-medium rounded-full text-gray-800 text-center items-center flex flex-row justify-center"
      onClick={onClick}
      type={type}
    >
      {title}
      {icon && (
        <img src={icon} alt="" className="w-4 h-4 relative -right-14 -top-1" />
      )}
    </button>
  );
};

export default Button;
