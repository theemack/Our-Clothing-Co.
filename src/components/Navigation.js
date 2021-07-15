import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { RiShoppingCartFill } from "react-icons/ri";
import {
  wrapper,
  left_item,
  middle_item,
  right_item,
} from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={`${wrapper} sticky-top pt-2 pb-2`}>
      <div className={`${left_item} mr-auto`}>
        <StaticImage
          loading="eager"
          height={80}
          src="../images/logo.png"
          alt="our clothing co. logo"
        />
      </div>
      <ul className={`${middle_item} nav d-flex justify-content-around`}>
        <li className="nav-item ">
          <a href="/women" className="nav-link ">
            Women
          </a>
        </li>
        <li className="nav-item">
          <a href="/men" className="nav-link">
            Men
          </a>
        </li>
        <li className="nav-item">
          <a href="/kids" className="nav-link">
            Kids
          </a>
        </li>
      </ul>
      <div className={`${right_item} nav-item d-flex justify-content-end`}>
        <a href="/404" className="nav-link">
          <RiShoppingCartFill className="cartIcon" />
        </a>
      </div>
    </nav>
  );
};
