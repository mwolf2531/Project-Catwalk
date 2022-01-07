import React, { Component } from "react";
import Caraselle from "./Caraselle.jsx";
import Jumbotron from "./Jumbotron.jsx";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import JumboScreen from "./JumboScreen.js";

export class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      currentPic: [],
      show: false,
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

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

  handleClick(event) {
    let clickIndex = event.target.attributes.index.value;
    this.setState({
      currentIndex: Number(clickIndex),
    });
  }

  componentDidUpdate(prevProps) {
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
          {this.state.currentPic.map((image, i) => (
            <Caraselle
              key={i}
              index={i}
              thumb={image.thumbnail_url}
              onClick={this.handleClick}
              currentThumb={this.state.currentIndex}
            />
          ))}

          <MdKeyboardArrowDown
            size={42}
            className="down-arrow"
            onClick={this.nextSlide}
          />
        </div>

        <FaArrowAltCircleLeft
          size={42}
          className="left-arrow"
          onClick={this.prevSlide}
        />

        <div className="jumbotron-container">
          {this.state.currentPic.map((image, index) => {
            if (this.state.currentIndex === index) {
              return (
                <div className="image-container" key={index}>
                  <img className="current-image" key={index} src={image.url} />
                  <main className="view-fullscreen">
                    <JumboScreen
                      img={image.url}
                      show={this.state.show}
                      handleClose={this.hideModal}
                    />
                    <BsArrowsFullscreen
                      className="fullview-icon"
                      onClick={this.showModal}
                    />
                  </main>
                </div>
              );
            }
          })}
        </div>
        <FaArrowAltCircleRight
          size={42}
          className="right-arrow"
          onClick={this.nextSlide}
        />
      </div>
    );
  }
}

export default ImageGallery;
