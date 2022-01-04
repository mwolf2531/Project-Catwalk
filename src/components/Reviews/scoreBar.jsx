import React from 'react';


const ScoreBar = ({ score }) => {

  const parentDiv = {
    height: 30,
    width: '80%',
    backgroundColor: 'grey',
    borderRadius: 40,
    margin: 10
  };
  const childDiv = {
    height: '100%',
    width: `${score}%`,
    backgroundColor: 'yellow',
    borderRadius: 30,
    textAlign: 'center'
  }
  const scoreText = {
    padding: 10,
    color: 'black',
    fontWeight: 900
  }
  return (
    <div style={parentDiv}>
    <div style={childDiv}>
      <span style={scoreText}>{score}</span>
    </div>
  </div>
  )
}

export default ScoreBar;