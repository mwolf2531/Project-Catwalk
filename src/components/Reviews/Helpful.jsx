import React from 'react';
import ReactDOM from 'react-dom';

class Helpful extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0 || this.props.helpfulness,
      disabled: false
    }

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(event) {
    event.preventDefault();
    if (this.state.disabled) {
      this.setState({
        disabled: false,
        count: this.state.count - 1
      });
    } else {
      this.setState({
        disabled: true,
        count: this.state.count + 1
      });
    }
  }

  render() {
    return (
      <div>
        <button className="rHelpful-button" onClick={this.handleClick}> Helpful? <span className="rHelpful-button-yes"> Yes ({this.state.count})</span></button>
      </div>
    )
  }
}

export default Helpful;

// To Do:
//   Handle click event where if this is clicked, it increases the count of the object
//   Be sure to ensure that it cannot be clicked twice by a single user