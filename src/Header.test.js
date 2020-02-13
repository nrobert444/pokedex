import React from 'react';
import Header from './Header.js';
import renderer from 'react-test-renderer';

it(' Header.js renders correctly', () => {
  const tree = renderer
    .create(< Header.js />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});