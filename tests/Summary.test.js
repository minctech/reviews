import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Summary from '../client/src/components/Summary.jsx';
import StarRatings from 'react-star-ratings';

// Test all the states that were passed in from index.jsx

describe('Summary component', () => {
  const reviewStates = {
    reviews: [{}, {}],
    search: 'hello',
    accuracy: 5,
    communication: 4,
    cleanliness: 3,
    location: 4,
    checkin: 5,
    value: 3,
    overall: 4,
  };

  it('renders successfully', () => {
    shallow(<Summary states={reviewStates} />);
  });

  it('displays the total # of reviews', () => {
    const wrapper = shallow(<Summary states={reviewStates} />);
    expect(wrapper.find('#summary-reviews').text()).toEqual('2 Reviews');
  });

  it('renders 7 <StarRatings /> components', () => {
    const wrapper = shallow(<Summary states={reviewStates} />);
    expect(wrapper.find(StarRatings)).toHaveLength(7);
  });

  it('displays the overall accuracy', () => {

  });
});
