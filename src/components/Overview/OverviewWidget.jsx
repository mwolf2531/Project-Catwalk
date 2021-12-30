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
  }

  getAllProducts() {
    axios
      .get("/api/products")
      .then((res) => {
        console.log("/products", res);
        this.setState({
          products: res.data
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

  // TODO: add componentDidMount for initial render
  componentDidMount() {
    this.getAllProducts();
  }

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
