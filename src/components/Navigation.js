import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { RiHome7Fill, RiShoppingCartFill } from "react-icons/ri";
import {
  wrapper,
  icon,
  left_item,
  middle_item,
  right_item,
} from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav
      className={`${wrapper} container-xl py-2 d-flex  justify-content-between`}
    >
      {/* <Link to="/"> */}
      <div className={`${left_item} d-flex`}>
        <a
          href={`${window.location.origin}/`}
          className={`${icon} d-flex align-items-center`}
        >
          <RiHome7Fill />
        </a>
        <ul className={`nav `}>
          <li className="nav-item ">
            <a
              href={`${window.location.origin}/products/women`}
              className="nav-link "
            >
              Women
            </a>
          </li>
          <li className="nav-item">
            <a
              href={`${window.location.origin}/products/men`}
              className="nav-link"
            >
              Men
            </a>
          </li>
          <li className="nav-item">
            <a
              href={`${window.location.origin}/products/kid`}
              className="nav-link"
            >
              Kids
            </a>
          </li>
        </ul>
        {/* <StaticImage
            loading="eager"
            src="../images/logo.png"
            alt="our clothing co. logo"
          /> */}
      </div>
      {/* </Link> */}

      <div
        className={`${(right_item, icon)} nav-item d-flex justify-content-end`}
      >
        <a href={`${window.location.origin}/cart`} className="nav-link">
          <RiShoppingCartFill className={`${icon} `} />
        </a>
      </div>
    </nav>
  );
};
