import React, { Component } from "react";

export class AddToCart extends Component {
  render() {
    return (
      <div>
      <select name='sizes'>
        <option value='1'>SELECT SIZE</option>
      </select>
        <button >ADD TO BAG</button>
        {/* TODO: make drop down for select size '-' */}
        {/* TODO: make drop down for quantity 'select size' */}
        {/* TODO: make button 'add to bag' */}
      </div>
    );
  }
}

export default AddToCart;
