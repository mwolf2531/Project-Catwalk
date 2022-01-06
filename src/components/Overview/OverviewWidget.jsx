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
      loaded: false,
      clickedItem:{},
      currentStyleCart: {},
      currentStyleName: undefined,
      id: 37312,
      meta: {
        ratings: {},
        recommended: {},
        characteristics: {}
      },
      avgRate: 3
    };
    this.getProduct = this.getProduct.bind(this);
    this.getProductStyle = this.getProductStyle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getMeta = this.getMeta.bind(this);
    this.makeAverage = this.makeAverage.bind(this);
  }

  handleClick(event, item) {
    this.setState({
      currentStyle: event,
      clickedItem: item
    })
  }

  getMeta() {
    let id = Number(this.props.id);
    axios.get(`/api/revMeta/${id}`)
      .then((res) => {
        this.setState({ meta: res.data });
        this.makeAverage();
      })
      .catch((err) => {
        console.log('Axios /revMeta failed >', err);
      });
  }

  makeAverage() {
    let rates = this.state.meta.ratings;
    for (let i = 1; i < 6; i++) {
      if (isNaN(rates[i])) {
        rates[i] = 0;
      }
    }
    if(rates[1]) {
      for (let i = 1; i < 6; i++) {
        rates[i] = Number(rates[i])
      }
      let totalRates = rates[1] + rates[2] + rates[3] + rates[4] + rates[5];
      let totalScore = rates[1] + (2 * rates[2]) + (3 * rates[3]) + (4 * rates[4]) + (5 * rates[5]);
      let avg = (totalScore / totalRates);
      avg = Math.round(avg*2)/2;
      this.setState({avgRate: avg});
    }
  }

  //TODO:
  getProduct() {
    let id = this.props.id
    axios.get(`/api/products/${id}`)
      .then((res) => {
        let data = res.data
        this.setState({
          products: data,
        })
        this.getProductStyle()
      })
      .catch((err) => {
        console.log("Axios /products ERR", err);
      })
  }
//TODO:

  getProductStyle() {
    let id = this.props.id
    axios.get(`api/products/${id}/styles`)
    .then((res) => {
      let data = res.data
      console.log('data:', data)
      this.setState({
        styles: data,
        loaded: true,
        currentStyle: data.results[0].photos,
        currentStyleName: data.results[0].name,
        currentStyleCart: data.results[0].skus
      })
    })
    .catch((err) => {
      console.log("Axios /style ERR",err )
    })
  }

  componentDidMount() {
    this.getProduct();
    this.getMeta();
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id){
      this.getProduct();
      this.getMeta();
    }

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
            style={this.state.clickedItem}
            name={this.state.currentStyleName}
            avgRate={this.state.avgRate}
          />
          <StyleSelector
            styles={this.state.styles.results}
            loaded={this.state.loaded}
            handleClick={this.handleClick}
            current={this.state.clickedItem}
          />
          <AddToCart
            size={this.state.styles}
            item={this.state.clickedItem.skus}
            default={this.state.currentStyleCart}
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
