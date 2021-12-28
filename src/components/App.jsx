import React from "react"
import OverviewWidget from './Overview/OverviewWidget.jsx';
import QAWidget from './QAs/QAWidget.jsx';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>
          Team Artemis
        </h1>
        <OverviewWidget />
        <QAWidget />
      </>
    );
  }
}

export default App;