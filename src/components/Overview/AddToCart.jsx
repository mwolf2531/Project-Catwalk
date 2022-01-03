import React, { Component } from "react";
import { AiOutlinePlus } from 'react-icons/ai'

export class AddToCart extends Component {
  render() {
    const buttonStyle = {
      color: "grey",
    };
    const far = {
      textalign: 'end'
    }

    return (
      <div className="cart-container">
        <select className="select-size" name="sizes">
          <option value="1">SELECT SIZE</option>
        </select>

        <select
          className="select-quantity"
          style={{ textalign: "center" }}
          name="-"
        >
          <option value="1">-</option>
        </select>

        <div>
          <button style={buttonStyle} className="bag-button">ADD TO BAG{'     '}<AiOutlinePlus style={far}/>

          </button>

        </div>
      </div>
    );
  }
}

export default AddToCart;
