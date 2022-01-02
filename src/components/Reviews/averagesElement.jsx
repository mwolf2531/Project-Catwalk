//this file houses the individual elements that form the averages table
//Title, Score, Stars, Recommendations, ScoreTable, TraitsTable
//StarsDisplay and Traits are built elsewhere
//AssembledStarsDisplay is exported for use by Ryder

import React from 'react';
class averagesElement extends React.Component {
  constructor(props) {
    super(props);
    console.log('props', props)
    this.state = {
      avgRate: 3
    };
    this.makeAverage = this.makeAverage.bind(this);
  }
  makeAverage() {
    let rates = this.props.meta.ratings;
    if(rates[1]) {
      rates[1] = Number(rates[1]);
      rates[2] = Number(rates[2]);
      rates[3] = Number(rates[3]);
      rates[4] = Number(rates[4]);
      rates[5] = Number(rates[5]);
      let totalRates = rates[1] + rates[2] + rates[3] + rates[4] + rates[5];
      let totalScore = rates[1] + (2 * rates[2]) + (3 * rates[3]) + (4 * rates[4]) + (5 * rates[5]);
      let avg = (totalScore / totalRates);
      avg = Math.round(avg*2)/2;
      this.setState({avgRate: avg});
    }
  }
  componentDidMount() {

  }
  componentDidUpdate(prevProps) {
    if (this.props.meta.ratings[1] !== prevProps.meta.ratings[1]) {
      this.makeAverage();
    }
  }
  render() {
    //Title
    //Star Score
    //Display the average score awarded for the item IE: 3.5 Stars
    //Stars Display
    //Display the average score as a star based graphic - ***1/2 Stars
    //import from starDisplay
    //Recommendations
    //Displays the percentage of users who selected "yes" for recommending the product
    //ScoreTable
    //Shows a bar graph depicting the number of ratings in each category (1,2,3,4 or 5 stars)
    //TraitsTable
    //Import a trait display for each trait the object is reviewed on
    //Display all trait displays in a single table
    return (
    <div className="revAverages"> Averages
      <div className="starScore">Average Score: {this.state.avgRate}</div>

    </div>
    )
  }

}
export default averagesElement;
//TODO: EXPORT STAR DISPAY FOR RYDER