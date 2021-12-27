import React, { Component } from "react";
import ImageGallery from "./ImageGallery.jsx";
import AddToCart from "./AddToCart.jsx";
import ProductInfo from "./ProductInfo.jsx";
import StyleSelector from "./StyleSelector.jsx";

export class OverviewWidget extends Component {
  render() {
    return (
      <div className="overview">
        <div className="o-top-left-container">
          <ImageGallery />
        </div>
        <div className="o-top-right-container">
          <ProductInfo />
          <StyleSelector />
          <AddToCart />
        </div>
        <div className="o-bottom-container">
          <ProductInfo />
        </div>
      </div>
    );
  }
}

export default OverviewWidget;
