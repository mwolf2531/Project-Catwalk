import React, { Component } from 'react'
import Caraselle from './Caraselle.jsx'

export class ImageGallery extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
      Image Gallery
      {/* TODO: add buttons to the side of jumbo to cycle through pics */}
      <Caraselle/>
      </div>
    )
  }
}
// TODO: pass all pics to caraselle so it can map them out into squares

export default ImageGallery
