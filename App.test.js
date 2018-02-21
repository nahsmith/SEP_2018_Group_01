import React from 'react';
import App from './App';
import HomeScreen from './HomeScreen'
import renderer from 'react-test-renderer';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});


/*it('home screen renders without crashing', () => {
  const homeScreenRendered = renderer.create(<HomeScreen />).toJSON();
  expect(homeScreenRendered).toBeTruthy();
});*/

afterAll(() => setTimeout(() => process.exit(), 1000))