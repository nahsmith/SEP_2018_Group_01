import React from 'react';
import App from './../App';
import HomeScreen from './../HomeScreen';
import FieldHouse from './../FieldHouse';
import RecCenter from './../RecCenter';
import renderer from 'react-test-renderer';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StackNavigator, NavigationActions } from 'react-navigation';

describe('App.js', () => {
  it('App renders without crashing', () => {
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
  })
});

describe('Home Screen', () => {
  it('Home screen Renders successfully without crashing', () => {
      const rendered = renderer.create(<App screen="HomeScreen" />).toJSON();
      expect(rendered).toBeTruthy;
  })
});

describe('RecCenter', () => {
  it('Rec Center renders successfully without crashing', () => {
    const rendered = renderer.create(<App screen="RecCenter" />).toJSON();
    expect(rendered).toBeTruthy;
  })
});

describe('Field House', () => {
  it('Field House renders successfully without crashing', () => {
    const rendered = renderer.create(<App screen="FieldHouse" />).toJSON();
    expect(rendered).toBeTruthy;
  })
});

afterAll(() => setTimeout(() => process.exit(), 5000))