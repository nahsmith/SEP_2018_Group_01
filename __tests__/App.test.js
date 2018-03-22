import React from 'react';
import App from './../App';
import HomeScreen from './../components/HomeScreen';
import FieldHouse from './../components/FieldHouse';
import RecCenter from './../components/RecCenter';
import renderer from 'react-test-renderer';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import ShallowRenderer from 'react-test-renderer/shallow';
import ReactTestUtils from 'react-dom/test-utils';

afterAll(() => setTimeout(() => process.exit(), 1000));

describe('App.js', () => {
  it('App renders without crashing', () => {
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
    expect(rendered).toMatchSnapshot();
  })
});