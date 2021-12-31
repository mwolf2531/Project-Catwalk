import React from 'react';
import ReactDOM from 'react-dom';


class AddQuestion extends React.Component {


  render() {
    return (
      <div>
        <button>Add A Question +</button>
      </div>
    )
  }

}

export default AddQuestion;

// To Do:
//   When clicking on this button, a modal should appear
//   The modal should be titled “Ask Your Question” and subtitled “About the [Product Name Here]”.  The product name should be      inserted into the subtitle.
//   Required inputs: question, nickname, email
//   Followed by a submit button
//   Submitting it will add the question
