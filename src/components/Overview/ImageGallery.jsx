import React, { Component } from "react";
import Caraselle from "./Caraselle.jsx";
import Jumbotron from './Jumbotron.jsx'

export class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      currentPic: []
    }
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  nextSlide () {
    this.setState({
      currentIndex: this.state.currentIndex + 1
    })
  }

  prevSlide () {
    this.setState({
      currentIndex: currentIndex - 1
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentStyle !== prevProps.currentStyle) {
      this.setState({
        currentPic: this.props.currentStyle
      })
    }
  }



  render() {
    return (
      <>
      <div className='jumbotron-container'>

      {this.state.currentPic.map((image, index) => {
        if (this.state.currentIndex === index) {
          return <img key={index} onClick={this.nextSlide} src={image.thumbnail_url} />
        }
      })}

      </div>
      </>
    );
  }
}


export default ImageGallery;

// [this.state.currentIndex].thumbnail_url

{/* <div className='caraselle-container'>
{this.props.currentStyle.map((image, i) => (
  <Caraselle key={i}
  thumb={image.thumbnail_url} />
))}
</div> */}

{/* <div className='jumbotron-container'>
{this.props.currentStyle.map((image, i) => (
  <Jumbotron key={i}
    image={image.thumbnail_url} />
))}
</div> */}