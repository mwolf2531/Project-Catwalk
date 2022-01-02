import React, { Component } from "react";
import Caraselle from "./Caraselle.jsx";
import Jumbotron from './Jumbotron.jsx'

export class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.nextSlide = this.nextSlide.bind(this)
  }

  nextSlide () {

  }

  prevSlide () {

  }

  render() {
    return (
      <>
      <div className='jumbotron-container'>
      {this.props.currentStyle.map((image, i) => (
        <Jumbotron key={i}
          image={image.thumbnail_url} />
      ))}
      </div>

      <div className='caraselle-container'>
      {this.props.currentStyle.map((image, i) => (
        <Caraselle key={i}
        thumb={image.thumbnail_url} />
      ))}
      </div>

      </>
    );
  }
}


export default ImageGallery;
