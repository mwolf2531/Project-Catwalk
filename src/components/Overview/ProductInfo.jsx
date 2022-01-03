import React from "react";

const ProductInfo = ({ product, style, name }) => {
  let price;
  let defaultPrice;
  let styleView;

  if (style.sale_price !== null) {
    price = (
      <p>{style.sale_price}{" "}<span className="strike">{style.original_price}</span></p>
    );
  } else {
    price = <p>${style.original_price}</p>;
  }

  if (Object.keys(style).length === 0) {
    defaultPrice = <span>${product.default_price}</span>;
    styleView = <span><b>STYLE ></b> {name}</span>
    // styleView =
  } else {
    defaultPrice = <span className="hidden-span">{product.default_price}</span>;
    styleView = <span><b>STYLE ></b> {style.name}</span>
  }

  return (
    <div>
      <p>{product.category}</p>
      <h1>{product.name}</h1>
      {defaultPrice}
      {price}
      {styleView}
      {/* <p><b>STYLE ></b>{style.name}</p> */}
    </div>
  );
};

export default ProductInfo;
