//takes in a value for stars and returns a graphic module representing that value
//IE 3 yields an element with * * * graphically
import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';

const StarDisplay = ({rating}) => {
  console.log('rating', rating);
  if (rating === 5) {
    return (
      <div>
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
      </div>
    )
  } else if (rating === 4.5) {
    return (
      <div>
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarHalf />
      </div>
    )
  } else if (rating === 4) {
    return (
      <div>
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStar />
      </div>
    )
  } else if (rating === 3.5) {
    return (
      <div>
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarHalf />
        <BsStar />
      </div>
    )
  } else if (rating === 3) {
    return (
      <div>
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStar />
        <BsStar />
      </div>
    )
  } else if (rating === 2.5) {
    return (
      <div>
        <BsStarFill />
        <BsStarFill />
        <BsStarHalf />
        <BsStar />
        <BsStar />
      </div>
    )
  } else if (rating === 2) {
    return (
      <div>
        <BsStarFill />
        <BsStarFill />
        <BsStar />
        <BsStar />
        <BsStar />
      </div>
    )
  } else if (rating === 1.5) {
    return (
      <div>
        <BsStarFill />
        <BsStarHalf />
        <BsStar />
        <BsStar />
        <BsStar />
      </div>
    )
  } else if (rating === 1) {
    return (
      <div>
        <BsStarFill />
        <BsStar />
        <BsStar />
        <BsStar />
        <BsStar />
      </div>
    )
  } else {
    return (<div></div>);
  }
}

export default StarDisplay;