import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ReviewsModule from '../client/src/components/Search.jsx';
import Search from '../client/src/components/Search.jsx';

describe('Search component', () => {
  it('renders successfully', () => {
    shallow(<Search />);
  });
});