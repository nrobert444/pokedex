import React from 'react';
import PokeItem from './PokeItem.js';
import renderer from 'react-test-renderer';

it(' PokeItem renders correctly', () => {
  const tree = renderer
    .create(< PokeItem />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});