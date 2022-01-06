import React from 'react';
import ScoreBar from './scoreBar.jsx';

const ScoreTable = ({ scores }) => {
  if (scores[1]) {
    let total = 0;
    for (let i = 1; i < 6; i++) {
      scores[i] = Number(scores[i]);
      total += scores[i];
    };
    for (let j = 1; j < 6; j++) {
      scores[j] = scores[j] / total;
      scores[j] = Math.round(scores[j] * 100);
    };
    return (
      <div className="ScoreTable" >
        <span>1-Star <ScoreBar score={scores[1]} /></span>
        <span>2-Stars<ScoreBar score={scores[2]} /></span>
        <span>3-Stars<ScoreBar score={scores[3]} /></span>
        <span>4-Stars<ScoreBar score={scores[4]} /></span>
        <span>5-Stars<ScoreBar score={scores[5]} /></span>
      </div>
    )
  } else {
    return (<div></div>);
  }
}

export default ScoreTable;