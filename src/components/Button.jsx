import React from "react";

const Button = ({ type, title, onClick, buttonType }) => {
  return (
    <button
      className="px-4 py-3 bg-lightblue-custom text-sm font-medium rounded-full text-gray-800 text-center items-center"
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
