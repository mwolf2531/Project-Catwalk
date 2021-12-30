import React from "react"
import OverviewWidget from './Overview/OverviewWidget.jsx';
import QAWidget from './QAs/QAWidget.jsx';
import ReviewWidget from './Reviews/index.jsx';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>
          Team Artemis
        </h1>
        <OverviewWidget />
        <QAWidget />
        <ReviewWidget />
      </>
    );
  }
}

export default App;