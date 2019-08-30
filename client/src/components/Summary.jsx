import React from 'react';
import StarRatings from 'react-star-ratings';
import Search from './Search.jsx';

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let summaryInfo = (
      <div>
        <div>
          Accuracy
          <StarRatings
            rating={this.props.allStates.accuracy}
            starRatedColor="rgb(0, 132, 137)"
            starEmptyColor="rgb(216, 216, 216)"
            starDimension="20px"
            starSpacing="2px"
            name='rating'
          />
          Location
          <StarRatings
            rating={this.props.allStates.location}
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
            rating={this.props.allStates.communication}
            starRatedColor="rgb(0, 132, 137)"
            starEmptyColor="rgb(216, 216, 216)"
            starDimension="20px"
            starSpacing="2px"
            name='rating'
          />
          Check-in
          <StarRatings
            rating={this.props.allStates.checkin}
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
            rating={this.props.allStates.cleanliness}
            starRatedColor="rgb(0, 132, 137)"
            starEmptyColor="rgb(216, 216, 216)"
            starDimension="20px"
            starSpacing="2px"
            name='rating'
          />
          Value
          <StarRatings
            rating={this.props.allStates.value}
            starRatedColor="rgb(0, 132, 137)"
            starEmptyColor="rgb(216, 216, 216)"
            starDimension="20px"
            starSpacing="2px"
            name='rating'
          />
        </div>
      </div>
    );

    if (this.props.allStates.filteredReviews.length > 0) {
      let guestGrammar = this.props.allStates.filteredReviews.length === 1 ? 'guest has' : 'guests have';
      summaryInfo = (
        <div id="filtered-search">
          {this.props.allStates.filteredReviews.length} {guestGrammar} mentioned "{this.props.allStates.search}"
          <span onClick={this.props.backToAllReviews}>Back to all reviews</span>
        </div>
      );
    }

    return(
      <div>
        <div>
          <span id="summary-reviews">{this.props.allStates.reviews.length} Reviews</span>
          <StarRatings
            rating={this.props.allStates.overall}
            starRatedColor="rgb(0, 132, 137)"
            starEmptyColor="rgb(216, 216, 216)"
            starDimension="20px"
            starSpacing="2px"
            name='rating'
          />
          <Search searchSubmit={this.props.searchSubmit} />
        </div>
        {summaryInfo}
      </div>
    )
  }
}

export default Summary;
