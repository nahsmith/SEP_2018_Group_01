//import React from 'react';

import React from 'react';
import FieldHouse from './../components/FieldHouse';
import renderer from 'react-test-renderer';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


describe('Render Field House', () => {
    it('Field House renders successfully without crashing', () => {
      const rendered = renderer.create(<FieldHouse />).toJSON();
      expect(rendered).toBeTruthy();
      //expect(rendered).toMatchSnapshot();
    })
  });