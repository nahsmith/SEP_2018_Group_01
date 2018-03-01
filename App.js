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
import HomeScreen from './HomeScreen';
import RecCenter from './RecCenter';
import FieldHouse from './FieldHouse';

const App = StackNavigator({
    HomeScreen: { screen: HomeScreen},
	RecCenter: { screen: RecCenter},
	FieldHouse: { screen: FieldHouse}
})

export default App;