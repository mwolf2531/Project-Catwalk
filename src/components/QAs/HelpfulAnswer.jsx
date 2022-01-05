import React from 'react';
import ReactDOM from 'react-dom';

class HelpfulAnswer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0 || this.props.helpful,
      disabled: false,
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
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <button className="helpful-button" onClick={this.handleClick}>Helpful? <span className="helpful-button-yes">Yes ({this.state.count})</span></button>
      </div>
    )
  }
}

export default HelpfulAnswer;