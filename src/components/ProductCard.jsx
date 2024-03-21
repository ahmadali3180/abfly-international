import React from "react";
import Button from "./Button";

const ProductCard = ({ buttonTitle, title, image, onClick }) => {
  return (
    <div className="flex flex-col gap-8 mx-auto">
      <img
        src={image}
        alt=""
        className="lg:w-[300px] lg:h-[450px] xxs:w-[230px] xxs:h-[345px] sm:w-[250px] sm:h-[375px] rounded-2xl"
      />
      <div className="w-full flex flex-col gap-4">
        <p className="font-medium text-white text-lg lg:max-w-[300px] xxs:max-w-[230px] sm:max-w-[250px]">
          {title}
        </p>
        <Button
          type={"button"}
          title={buttonTitle}
          icon={"/open.png"}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default ProductCard;
