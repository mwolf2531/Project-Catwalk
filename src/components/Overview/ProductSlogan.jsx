import React from "react";

const ProductSlogan = ({product}) => {
  return (
    <div>
      <h2>{product.slogan}</h2>
      <span>{product.description}</span>
      {/* TODO: display slogan and description and last section to bottom */}
    </div>
  );
};

export default ProductSlogan;
