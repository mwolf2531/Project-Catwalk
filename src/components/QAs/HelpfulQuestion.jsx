import React from 'react';
import ReactDOM from 'react-dom';

class HelpfulQuestion extends React.Component {
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
        <button onClick={this.handleClick}>Helpful? Yes ({this.state.count})</button>
      </div>
    )
  }
}

export default HelpfulQuestion;

// To Do:
//   Handle click event where if this is clicked, it increases the count of the object
//   Be sure to ensure that it cannot be clicked twice by a single user