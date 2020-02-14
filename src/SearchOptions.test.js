import React from 'react';
import SearchOptions from './SearchOptions.js';
import renderer from 'react-test-renderer';

it('SearchOptions renders correctly', () => {
  const tree = renderer
    .create(< SearchOptions />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});