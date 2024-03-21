import React from "react";

const Button = ({ type, title, onClick, icon }) => {
  return (
    <button
      className="px-5 py-3 bg-lightblue-custom text-sm font-medium rounded-full text-gray-800 text-center items-center flex flex-row justify-center gap-2 w-full"
      onClick={onClick}
      type={type}
    >
      {title}
      <div>
        {icon && (
          <img
            src={icon}
            alt=""
            className="lg:w-4 h-4 relative lg:-right-12 top-0 md:-right-2"
          />
        )}
      </div>
    </button>
  );
};

export default Button;
