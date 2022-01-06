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
      <>
        <button className='helpful-button-yes' onClick={this.handleClick}>{this.state.placeholder}</button>
      </>
    )
  }

}

export default Report;

