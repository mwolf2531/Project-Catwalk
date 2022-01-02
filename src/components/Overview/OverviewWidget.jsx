import React, { Component } from "react";
import ImageGallery from "./ImageGallery.jsx";
import AddToCart from "./AddToCart.jsx";
import ProductInfo from "./ProductInfo.jsx";
import StyleSelector from "./StyleSelector.jsx";
import ProductSlogan from "./ProductSlogan.jsx";
import Features from './Features.jsx';
import axios from "axios";

export class OverviewWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {features:[]},
      styles: [],
      currentStyle: [],
      loaded: false
    };
    this.getProduct = this.getProduct.bind(this);
    this.getProductStyle = this.getProductStyle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // event.preventDefault();
    console.log("CLICKED",event)
    // event.preventDefault();
    this.setState({
      currentStyle: event
    })
    // console.log("AYYYYYYYY", this.state.currentStyle)
  }

  getAllProducts() {
    axios.get("/api/products")
      .then((res) => {
        let data = res.data
        // console.log("/products", data);
        this.setState({
          productz: data
        })
      })
      .catch((err) => {
        console.log("Axios /products ERR", err);
      });
  }

  getProduct() {
    axios.get("/api/products/product_id")
      .then((res) => {
        let data = res.data
        // console.log("Product", data);
        this.setState({
          products: data,
        })
        this.getProductStyle()
      })
      .catch((err) => {
        console.log("Axios /products ERR", err);
      })
  }

  getProductStyle() {
    axios.get("api/products/product_id/styles")
    .then((res) => {
      let data = res.data
      // console.log("STYLEz", data);
      this.setState({
        styles: data,
        loaded: true,
        currentStyle: data.results[0].photos
      })
    })
    .catch((err) => {
      console.log("Axios /style ERR",err )
    })
  }

  componentDidMount() {
    this.getProduct();
  }

  render() {
    return (
      <div className="overview">
        <div className="o-top-left-container">
          <ImageGallery
            currentStyle = {this.state.currentStyle}
          />
        </div>
        <div className="o-top-right-container">
          <ProductInfo
            product={this.state.products}
          />
          <StyleSelector
            styles={this.state.styles.results}
            loaded={this.state.loaded}
            onClick={this.handleClick}
          />
          <AddToCart
            size={this.state.styles}
          />
        </div>
        <div className="o-bottom-left-container">
          <ProductSlogan
            product={this.state.products}
          />
        </div>
        <div className='o-bottom-right-container'>
          <Features
            product={this.state.products.features}
            loaded={this.state.loaded}
          />
        </div>
      </div>
    );
  }
}

export default OverviewWidget;
