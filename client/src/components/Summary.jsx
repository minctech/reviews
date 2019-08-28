import React from 'react';
import StarRatings from 'react-star-ratings';
import Search from './Search.jsx';

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div>
          <span id="summary-reviews" className="summary">{this.props.states.reviews.length} Reviews</span>
          <StarRatings
            rating={this.props.states.overall}
            starRatedColor="rgb(0, 132, 137)"
            starEmptyColor="rgb(216, 216, 216)"
            starDimension="20px"
            starSpacing="2px"
            name='rating'
          />
          <Search searchSubmit={this.props.searchSubmit} />
        </div>
        <div>
          Accuracy
          <StarRatings
            rating={this.props.states.accuracy}
            starRatedColor="rgb(0, 132, 137)"
            starEmptyColor="rgb(216, 216, 216)"
            starDimension="20px"
            starSpacing="2px"
            name='rating'
          />
          Location
          <StarRatings
            rating={this.props.states.location}
            starRatedColor="rgb(0, 132, 137)"
            starEmptyColor="rgb(216, 216, 216)"
            starDimension="20px"
            starSpacing="2px"
            name='rating'
          />
        </div>
        <div>
          Communication
          <StarRatings
            rating={this.props.states.communication}
            starRatedColor="rgb(0, 132, 137)"
            starEmptyColor="rgb(216, 216, 216)"
            starDimension="20px"
            starSpacing="2px"
            name='rating'
          />
          Check-in
          <StarRatings
            rating={this.props.states.checkin}
            starRatedColor="rgb(0, 132, 137)"
            starEmptyColor="rgb(216, 216, 216)"
            starDimension="20px"
            starSpacing="2px"
            name='rating'
          />
        </div>
        <div>
          Cleanliness
          <StarRatings
            rating={this.props.states.cleanliness}
            starRatedColor="rgb(0, 132, 137)"
            starEmptyColor="rgb(216, 216, 216)"
            starDimension="20px"
            starSpacing="2px"
            name='rating'
          />
          Value
          <StarRatings
            rating={this.props.states.value}
            starRatedColor="rgb(0, 132, 137)"
            starEmptyColor="rgb(216, 216, 216)"
            starDimension="20px"
            starSpacing="2px"
            name='rating'
          />
        </div>
      </div>
    )
  }
}

export default Summary;
