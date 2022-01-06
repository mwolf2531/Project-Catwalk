//takes in a value for stars and returns a graphic module representing that value
//IE 3 yields an element with * * * graphically
import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';

const StarDisplay = ({rating}) => {
  if (rating === 5) {
    return (
      <div>
        <BsStarFill className="star"/>
        <BsStarFill className="star"/>
        <BsStarFill className="star"/>
        <BsStarFill className="star"/>
        <BsStarFill className="star"/>
      </div>
    )
  } else if (rating === 4.5) {
    return (
      <div>
        <BsStarFill className="star"/>
        <BsStarFill className="star"/>
        <BsStarFill className="star"/>
        <BsStarFill className="star"/>
        <BsStarHalf className="star"/>
      </div>
    )
  } else if (rating === 4) {
    return (
      <div>
        <BsStarFill className="star"/>
        <BsStarFill className="star"/>
        <BsStarFill className="star"/>
        <BsStarFill className="star"/>
        <BsStar className="star"/>
      </div>
    )
  } else if (rating === 3.5) {
    return (
      <div>
        <BsStarFill className="star"/>
        <BsStarFill className="star"/>
        <BsStarFill className="star"/>
        <BsStarHalf className="star"/>
        <BsStar className="star"/>
      </div>
    )
  } else if (rating === 3) {
    return (
      <div>
        <BsStarFill className="star"/>
        <BsStarFill className="star"/>
        <BsStarFill className="star"/>
        <BsStar className="star"/>
        <BsStar className="star"/>
      </div>
    )
  } else if (rating === 2.5) {
    return (
      <div>
        <BsStarFill className="star"/>
        <BsStarFill className="star"/>
        <BsStarHalf className="star"/>
        <BsStar className="star"/>
        <BsStar className="star"/>
      </div>
    )
  } else if (rating === 2) {
    return (
      <div>
        <BsStarFill className="star"/>
        <BsStarFill className="star"/>
        <BsStar className="star"/>
        <BsStar className="star"/>
        <BsStar className="star"/>
      </div>
    )
  } else if (rating === 1.5) {
    return (
      <div>
        <BsStarFill className="star"/>
        <BsStarHalf className="star"/>
        <BsStar className="star"/>
        <BsStar className="star"/>
        <BsStar className="star"/>
      </div>
    )
  } else if (rating === 1) {
    return (
      <div>
        <BsStarFill className="star"/>
        <BsStar className="star"/>
        <BsStar className="star"/>
        <BsStar className="star"/>
        <BsStar className="star"/>
      </div>
    )
  } else {
    return (<div></div>);
  }
}

export default StarDisplay;