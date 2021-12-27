import React from "react"
import OverviewWidget from './Overview/OverviewWidget.jsx'

class App extends React.Component {
  render() {
    return (
      <>
        <h1>
          Team Artemis
        </h1>
        <OverviewWidget/>
      </>
    );
  }
}

export default App;