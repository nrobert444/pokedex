import React from 'react';
import App from './App.js';
import renderer from 'react-test-renderer';

it(' App.js renders correctly', () => {
  const tree = renderer
    .create(< App.js />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});