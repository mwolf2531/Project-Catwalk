import React from 'react';
import ReactDOM from 'react-dom';


class Helpful extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      placeholder: 'Report'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    if (this.state.disabled) {
      return;
    }
    this.setState({
      disabled: true,
      placeholder: 'Reported'
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.placeholder}</button>
      </div>
    )
  }
}

export default Helpful;

// To Do:
//   Handle click event where if this is clicked, it increases the count of the object
//   Be sure to ensure that it cannot be clicked twice by a single user