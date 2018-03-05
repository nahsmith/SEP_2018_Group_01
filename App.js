/*
	YOU MUST RUN EACH OF THESE DEPENDENCIES IN THE CONSOLE PRIOR TO RUNNING
	
	yarn add react
	yarn add react-native
	yarn add native-base
	yarn add react-native-scroll-to-top
	yarn add react-navigation
*/

import React from 'react';

import { StackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen.js';
import RecCenter from './components/RecCenter.js';
import FieldHouse from './components/FieldHouse.js';

const App = StackNavigator({
    HomeScreen: { screen: HomeScreen},
	RecCenter: { screen: RecCenter},
	FieldHouse: { screen: FieldHouse}
})

export default App;