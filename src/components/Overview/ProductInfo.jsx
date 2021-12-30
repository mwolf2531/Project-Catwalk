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


import React from 'react'

const ProductInfo = ({products}) => {
  console.log(products)
  return (
    <div>
      {products}
    </div>
  )
}

export default ProductInfo
