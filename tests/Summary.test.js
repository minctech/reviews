import React from 'react';
import { mount, shallow } from 'enzyme';
import Summary from '../client/src/components/Summary.jsx';

// Test all the states that were passed in from index.jsx

describe('Summary component', () => {
  const states = {
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

  it('should be rendered', () => {
    shallow(<Summary states={states} />);
  });

  it('displays the total number of reviews', () => {
    const wrapper = shallow(<Summary states={states} />);
    expect(wrapper.find('#summary-reviews').text()).toEqual('2 Reviews');
  });
});
