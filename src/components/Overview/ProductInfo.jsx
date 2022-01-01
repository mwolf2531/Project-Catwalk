

import React from 'react'

const ProductInfo = ({product}) => {
  // console.log(product)
  return (
    <div>
      {product.category}
      <h1>{product.name}</h1>
      {product.default_price}
    </div>
  )
}

export default ProductInfo

// import React, { Component } from "react";

// export class ProductInfo extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     console.log(this.props)
//     return (
//       <div>
//         Product Info
//         {/* TODO: display star rating */}
//         <div>{this.props.products.name}</div>
//         {/* TODO: display product category */}
//         {/* TODO: display product className */}
//         {/* TODO: display price */}
//       </div>
//     );
//   }
// }