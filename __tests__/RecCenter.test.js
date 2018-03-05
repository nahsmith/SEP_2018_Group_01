//import React from 'react';

import React from 'react';
import RecCenter from './../components/RecCenter';
import renderer from 'react-test-renderer';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


describe('Render RecCenter', () => {
    it('Rec Center renders successfully without crashing', () => {
      const rendered = renderer.create(<RecCenter />).toJSON();
      expect(rendered).toBeTruthy();
      //expect(rendered).toMatchSnapshot();
    })
  });