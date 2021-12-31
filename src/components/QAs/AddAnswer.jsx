import React from 'react';
import ReactDOM from 'react-dom';



class AddAnswer extends React.Component {
  render() {
    return (
      <div>
        <button>Add Answer</button>
      </div>
    )
  }

}

export default AddAnswer;


// To Do:
//   When clicking on this button, a modal should appear
//The modal should be titled “Submit your Answer”.  The modal should be subtitled:   “[Product Name]: [Question Body]” .  The   appropriate product name and question body should be inserted into the subtitle.
//   Required inputs: answer, nickname, email
//   They should also be able to add photos
//   Followed by a submit button
//   Submitting it will add the answer

