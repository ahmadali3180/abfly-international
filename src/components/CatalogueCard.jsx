import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const CatalogueCard = ({ title, image, onClick }) => {
  return (
    <div className="flex flex-col gap-8 mx-auto">
      <img src={image} alt="" className="w-[300px] h-[450px]" />
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
