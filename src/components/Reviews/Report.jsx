import React from 'react';
import ReactDOM from 'react-dom';


class Report extends React.Component {
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

export default Report;

// To do:
//   If this is clicked, it will flag the answer for review
//   Then, the 'report' should change to 'reported'