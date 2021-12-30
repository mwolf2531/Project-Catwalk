import React, { Component } from "react";
import ImageGallery from "./ImageGallery.jsx";
import AddToCart from "./AddToCart.jsx";
import ProductInfo from "./ProductInfo.jsx";
import StyleSelector from "./StyleSelector.jsx";
import ProductSlogan from "./ProductSlogan.jsx";
import axios from "axios";

export class OverviewWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ex: "placeholder",
      //TODO: products
      //TODO: current product selected
    };
    //TODO: dont forget to bind handlers and whatever elese
    this.getProduct = this.getProduct.bind(this)
  }

  getAllProducts() {
    axios
      .get("/api/products")
      .then((res) => {
        let data = res.data
        console.log("/products", data);
        this.setState({
          productz: data
        })
      })
      .catch((err) => {
        console.log("Axios /products ERR", err);
      });
  }

  getProduct() {
    axios
      .get("/api/products/:product_id")
      .then((res) => {
        let data = res.data
        console.log("Product", data);
        this.setState({
          products: data
        })
      })
      .catch((err) => {
        console.log("Axios /products ERR", err);
      });
  }

  // TODO: api call GET /products/:product_id
  // set state of current product with selected id

  // TODO: Click handler for style selected
  // calls the api func to grab current

  componentDidMount() {
    this.getProduct();
  }

  render() {
    return (
      <div className="overview">
        <div className="o-top-left-container">
          <ImageGallery />
        </div>
        <div className="o-top-right-container">
          <ProductInfo
            product={this.state.products}
          />
          <StyleSelector />
          <AddToCart />
        </div>
        <div className="o-bottom-container">
          <ProductSlogan />
        </div>
      </div>
    );
  }
}
//TODO: Pass list of products to ProductInfo

//TODO: Pass current product to ProductSlogan

//TODO: pass handler to styleSelector

//TODO: pass current Product to imageGallery

export default OverviewWidget;
