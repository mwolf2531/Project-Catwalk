import React from 'react';


const ScoreBar = ({ score }) => {
  if (!score) {
    score = 0;
  }
  const parentDiv = {
    height: 25,
    width: '80%',
    backgroundColor: 'grey',
    borderRadius: 100,
    margin: 5
  };
  const childDiv = {
    height: '100%',
    width: `${score}%`,
    backgroundColor: 'gold',
    borderRadius: 100,
    textAlign: 'center'
  }
  const scoreText = {
    padding: 0,
    color: 'black',
    fontWeight: 600,
    textAlign: 'center'
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