import React, { Component } from "react";
import { AiOutlinePlus } from "react-icons/ai";

export class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      default: {},
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.default !== prevProps.default) {
      this.setState({
        default: this.props.default,
      });
    }
  }

  render() {
    const buttonStyle = {
      color: "grey",
    };
    const far = {
      textalign: "end",
    };

    for (let key in this.state.default) {
      let options = Object.values(this.state.default[key])
    }



    return (
      <div className="cart-container">
        <select className="select-size" name="sizes">
          <option value="1">SELECT SIZE</option>
        </select>

        <select
          className="select-quantity"
          // style={{ textalign: "center" }}
        >
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
