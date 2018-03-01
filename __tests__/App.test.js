//import React from 'react';

import React from 'react';
import App from './../App';
import HomeScreen from './../HomeScreen';
import FieldHouse from './../FieldHouse';
import RecCenter from './../RecCenter';
import renderer from 'react-test-renderer';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StackNavigator, NavigationActions } from 'react-navigation';


afterAll(() => setTimeout(() => process.exit(), 1000));

describe('App.js', () => {
  it('App renders without crashing', () => {
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
    //expect(rendered).toMatchSnapshot();
  })
});

describe('Render Home Screen', () => {
  it('Home screen Renders successfully without crashing', () => {
    const rendered = renderer.create(<HomeScreen />).toJSON();
    expect(rendered).toBeTruthy();
    //expect(rendered).toMatchSnapshot();
  })
});

describe('Render RecCenter', () => {
  it('Rec Center renders successfully without crashing', () => {
    const rendered = renderer.create(<RecCenter />).toJSON();
    expect(rendered).toBeTruthy();
    //expect(rendered).toMatchSnapshot();
  })
});

describe('Render Field House', () => {
  it('Field House renders successfully without crashing', () => {
    const rendered = renderer.create(<FieldHouse />).toJSON();
    expect(rendered).toBeTruthy();
    //expect(rendered).toMatchSnapshot();
  })
});