import React from "react";

const ProductSlogan = ({product}) => {
  return (
    <div>
      <span>{product.slogan}</span>
      <span>{product.description}</span>
      {/* TODO: display slogan and description and last section to bottom */}
    </div>
  );
};

export default ProductSlogan;
