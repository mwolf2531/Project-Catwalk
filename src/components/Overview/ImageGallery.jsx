import React, { Component } from "react";
import Caraselle from "./Caraselle.jsx";
import Jumbotron from "./Jumbotron.jsx";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      currentPic: [],
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  nextSlide() {
    let length = this.state.currentPic.length;
    if (this.state.currentIndex === length - 1) {
      this.setState({
        currentIndex: 0,
      });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
      });
    }
  }

  prevSlide() {
    event.preventDefault();
    let length = this.state.currentPic.length;
    if (this.state.currentIndex === 0) {
      this.setState({
        currentIndex: length - 1,
      });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex - 1,
      });
    }
  }

  componentDidUpdate(prevProps) {
    event.preventDefault();
    if (this.props.currentStyle !== prevProps.currentStyle) {
      this.setState({
        currentPic: this.props.currentStyle,
      });
    }
  }

  render() {
    return (
      <div className="image-gallery">

        <div className="caraselle-container">
          {this.props.currentStyle.map((image, i) => (
            <Caraselle
              className="gallery-thumbnails"
              key={i}
              thumb={image.thumbnail_url}
            />
          ))}
        </div>
        <FaArrowAltCircleLeft className="left-arrow" onClick={this.prevSlide} />

        <div className="jumbotron-container">
          {this.state.currentPic.map((image, index) => {
            if (this.state.currentIndex === index) {
              return (
                <img
                  className="current-image"
                  key={index}
                  onClick={this.nextSlide}
                  src={image.thumbnail_url}
                />
              );
            }
          })}
        </div>
        <FaArrowAltCircleRight
          className="right-arrow"
          onClick={this.nextSlide}
        />
      </div>
    );
  }
}

export default ImageGallery;

// [this.state.currentIndex].thumbnail_url

{
  /* <div className='caraselle-container'>
{this.props.currentStyle.map((image, i) => (
  <Caraselle key={i}
  thumb={image.thumbnail_url} />
))}
</div> */
}

{
  /* <div className='jumbotron-container'>
{this.props.currentStyle.map((image, i) => (
  <Jumbotron key={i}
    image={image.thumbnail_url} />
))}
</div> */
}
