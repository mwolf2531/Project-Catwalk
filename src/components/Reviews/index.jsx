import React from 'react';
import BodyElement from './bodyElement.jsx';
import Averages from './averagesElement.jsx';
import axios from 'axios';

//Main Reviews Element. Holds the bodyElement and averagesElement.
//contains the more reviews and add a review button
//data for the other elements is kept, stored, and referenced from here
class ReviewWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: {
        ratings: {},
        recommended: {},
        characteristics: {}
      }
    };
    this.getMeta = this.getMeta.bind(this);
  }

  getMeta() {
    let id = Number(this.props.id);
    axios.get(`/api/revMeta/${id}`)
      .then((res) => {
        this.setState({ meta: res.data });
      })
      .catch((err) => {
        console.log('Axios /revMeta failed >', err);
      });
  }
  componentDidMount() {
    this.getMeta();
  }
  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id){
      this.getMeta();
    }
  }
  render() {
    return (
      <div className="reviews">
      <h2 className="revHeader">RATINGS & REVIEWS</h2>
        <Averages className="revAverages" meta={this.state.meta} />
        <BodyElement className="revMain" id={this.props.id} />
      </div>
    )
  }

}

export default ReviewWidget;
