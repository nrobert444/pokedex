import React from 'react';
import PokeItem from './PokeItem.js';
import renderer from 'react-test-renderer';

it(' PokeItem.js renders correctly', () => {
  const tree = renderer
    .create(< PokeItem.js />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});