import React from "react";
import { header_image, header_text } from "./Header.module.scss";

export const Header = () => {
  return (
    <header className=" mb-5">
      <div className={`${header_image} `}>
        <div className={`${header_text} `}>
          <h1 className="display-1 text-center">
            Summer Sale <br /> 30% Off!
          </h1>
        </div>
      </div>
    </header>
  );
};
