import React from 'react';
import Paging from './Paging.js';
import renderer from 'react-test-renderer';

it('Paging renders correctly', () => {
  const tree = renderer
    .create(< Paging />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});