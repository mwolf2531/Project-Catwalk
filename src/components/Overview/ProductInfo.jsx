import React from 'react'

const ProductInfo = ({product}) => {
  return (
    <div>
      {product.category}
      <h1>{product.name}</h1>
      {product.default_price}
    </div>
  )
}

export default ProductInfo

