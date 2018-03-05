//import React from 'react';

import React from 'react';
import HomeScreen from './../components/HomeScreen';
import renderer from 'react-test-renderer';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


describe('Render Home Screen', () => {
  it('Home screen Renders successfully without crashing', () => {
    const rendered = renderer.create(<HomeScreen />).toJSON();
    expect(rendered).toBeTruthy();
    //expect(rendered).toMatchSnapshot();
  })
});