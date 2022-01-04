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
        <ScoreBar score={scores[1]} />
        <ScoreBar score={scores[2]} />
        <ScoreBar score={scores[3]} />
        <ScoreBar score={scores[4]} />
        <ScoreBar score={scores[5]} />
      </div>
    )
  } else {
    return (<div></div>);
  }
}

export default ScoreTable;