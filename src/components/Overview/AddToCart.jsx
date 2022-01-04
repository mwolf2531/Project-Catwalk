import React, { Component } from "react";
import { AiOutlinePlus } from "react-icons/ai";

export class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      default: {},
      clickedStyle: {},
    };
    this.handleSize = this.handleSize.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.default !== prevProps.default) {
      this.setState({
        default: this.props.default,
      });
    }
  }

  handleSize(event) {
    // this.setState({
    //   quantity: event
    // })
  }

  render() {
    const buttonStyle = {
      color: "grey",
    };
    const far = {
      textalign: "end",
    };

    let list = Object.values(this.state.default);

    let dummyData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    let testing = (
      <select className="select-size" onChange={() => this.handleSize()}>
        <option>SELECT SIZE</option>
        {list.map((sku, index) => (
          <option key={index} value={sku.size}>
            {sku.size}
          </option>
        ))}
      </select>
    );

    if (this.props.item !== undefined) {
      let currentList = Object.values(this.props.item);
      let testing2 = (
        <select className="select-size">
          <option>SELECT SIZE</option>
          {currentList.map((sku, index) => (
            <option key={index} value={sku.size}>
              Size: {sku.size}
            </option>
          ))}
        </select>
      );
      testing = testing2;
    }

    return (
      <div className="cart-container">

        {testing}

        <select className="select-quantity">
          <option>-</option>
          {dummyData.map((sku, index) => (
            <option key={index} value={sku}>
              {sku}
            </option>
          ))}
        </select>

        <div>
          <button style={buttonStyle} className="bag-button">
            ADD TO BAG{"     "}
            <AiOutlinePlus style={far} />
          </button>
        </div>
      </div>
    );
  }
}

export default AddToCart;


