import React from 'react';
import AddAnswer from './AddAnswer.jsx';
import AddQuestion from './AddQuestion.jsx';
import Helpful from './Helpful.jsx';
import QuestionsAnswers from './QuestionsAnswers.jsx';
import Report from './Report.jsx';
import SearchBar from './SearchBar.jsx';
import MoreAnswers from './MoreAnswers.jsx';

class QAWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className='questions'>
        <div>
          <SearchBar />
        </div>
        <div>
          <QuestionsAnswers />
        </div>
        <div>
          <MoreAnswers />
        </div>
        <div>
          <AddQuestion />
        </div>
        <div>
          <Report />
          <Helpful />
        </div>
      </div>
    )
  }

}

export default QAWidget;