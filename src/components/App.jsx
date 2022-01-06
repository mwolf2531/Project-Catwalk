import React from "react";
import OverviewWidget from "./Overview/OverviewWidget.jsx";
import QAWidget from "./QAs/QAWidget.jsx";
import ReviewWidget from "./Reviews/index.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productId: '37311'
    };

    this.onChange = this.onChange.bind(this)
  }


  getProductID() {
    axios
      .get("/api/products")
      .then((res) => {
        let data = res.data;
        console.log('data:', data)
        this.setState({
          products: data,
        });
      })
      .catch((err) => {
        console.log("Axios /products ERR", err);
      });
  }

  onChange(event) {
    this.setState({
      productId: event.target.value
    })
  }

  componentDidMount() {
    this.getProductID()
  }



  render() {
    return (
      <>
        <div className='header'>

          <span className='header-title'>Project Catwalk : <i>Artemis Edition</i></span>

          <select className="select-product-main" onChange={this.onChange}>
            {this.state.products.map((product, index) => (
              <option key={index} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>

        <OverviewWidget id={this.state.productId} />
        <QAWidget id={this.state.productId} />
        <ReviewWidget id={this.state.productId} />
      </>
    );
  }
}

export default App;
