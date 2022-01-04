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

    console.log(this.state.default);

    let list = Object.values(this.state.default);

    // const options = list.map((sku, index) => {
    //   return {
    //     label: sku.size,
    //     value: sku.size,
    //     key: index,
    //   };
    // });
    // console.log(options);

    return (
      <div className="cart-container">

        <select className="select-size" >
        <option>SELECT SIZE</option>
        {list.map((sku, index) => (
            <option key={index} value={sku.size}>
              {sku.size}
            </option>
          ))}
        </select>

        <select name='name' className="select-quantity" value="-">
          <option>-</option>
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
