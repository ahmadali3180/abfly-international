import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const CatalogueCard = ({ title, image, onClick }) => {
  return (
    <div className="flex flex-col gap-8 mx-auto">
      <img
        src={image}
        alt=""
        className="lg:w-[300px] lg:h-[450px] xxs:w-[230px] xxs:h-[345px] sm:w-[250px] sm:h-[375px]"
      />
      <Button
        type={"button"}
        title={title}
        icon={"/open.png"}
        onClick={onClick}
      />
    </div>
  );
};

export default CatalogueCard;
