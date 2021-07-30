import React from "react";
import { Link } from "gatsby";
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
    <nav className={`${wrapper} container-xl py-2`}>
      <Link to="/">
        <div className={`${left_item} mr-auto`}>
          <StaticImage
            loading="eager"
            height={80}
            src="../images/logo.png"
            alt="our clothing co. logo"
          />
        </div>
      </Link>

      <ul className={`${middle_item} nav d-flex justify-content-around`}>
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
      <div className={`${right_item} nav-item d-flex justify-content-end`}>
        <a href="/404" className="nav-link">
          <RiShoppingCartFill className="cartIcon" />
        </a>
      </div>
    </nav>
  );
};
