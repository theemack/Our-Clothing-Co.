import React from "react";
import { StoreContext } from "../context/store-context";
import { GatsbyImage } from "gatsby-plugin-image";
import { getShopifyImage } from "gatsby-source-shopify";
import { IoRemoveCircleSharp } from "react-icons/io5";

export const CartItem = ({ item }) => {
  const { checkout, removeLineItem } = React.useContext(StoreContext);
  const variantImage = {
    ...item.variant.image,
    originalSrc: item.variant.image.src,
  };

  const image = React.useMemo(
    () =>
      getShopifyImage({
        image: variantImage,
        layout: "constrained",
        crop: "contain",
        width: 200,
        height: 200,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [variantImage.src]
  );
  console.log(item);
  return (
    <>
      <tr>
        <td>
          <GatsbyImage image={image} alt={item.variant.image.altText} />
        </td>
        <td>{item.title}</td>
        <td>
          <p className={`center`}>
            {item.variant.price}
            <IoRemoveCircleSharp
              role="button"
              onClick={() => {
                removeLineItem(checkout.id, item.id);
              }}
              className={`center`}
            />
          </p>
        </td>
        <td></td>
        <td></td>
      </tr>
    </>
  );
};
