import React from 'react';
import PokeList from './PokeList.js';
import renderer from 'react-test-renderer';

it(' PokeList.js renders correctly', () => {
  const tree = renderer
    .create(< PokeList.js />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});