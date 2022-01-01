import React, { Component } from "react";
import Caraselle from "./Caraselle.jsx";
import Jumbotron from './Jumbotron.jsx'

export class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPic: this.props.currentStyle
    }

  }

  render() {
    return (
      <>
      {console.log('props:', this.props.currentStyle)}
      <div className='jumbotron-container'>
      {this.props.currentStyle.map((item, i) => (
        <Jumbotron key={i}
          item={item}
        />
      ))}
      </div>

        <Caraselle className='caraselle-container'/>
      </>
    );
  }
}
// TODO: pass all pics to caraselle so it can map them out into squares

export default ImageGallery;
