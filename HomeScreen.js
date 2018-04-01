import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Alert, Image, Dimensions, TouchableOpacity, TouchableHighlight, Navigator} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import ScrollToTop from 'react-native-scroll-to-top';
import { StackNavigator, NavigationActions } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import AutoHeightImage from 'react-native-auto-height-image';

const deviceWidth = Dimensions.get('window').width;

//var firebase = require("firebase");
import * as firebase from "firebase";
//import { database } from 'firebase';

// Initialize Firebase
var src="https://www.gstatic.com/firebasejs/4.9.1/firebase.js";
var config = {
 apiKey: "AIzaSyD5Ha8fSPEBkjqMchNVy8zU6vB-WvcGYTM",
 authDomain: "herkyles-85e8e.firebaseapp.com",
 databaseURL: "https://herkyles-85e8e.firebaseio.com",
 projectId: "herkyles-85e8e",
 storageBucket: "herkyles-85e8e.appspot.com",
 messagingSenderId: "812934741247"
};
firebase.initializeApp(config);
var databaseRef = firebase.database();
var imageRef = firebase.storage();
var test1;
var test2;
var pageArray = []
var nameArray = [];
var imageArray = [];
var routeArray = [];
var weekdayHours = [];
var weekendHours = [];

export default class HomeScreen extends Component {
  
    static navigationOptions = {
        title: "Home",
        header: false,
    }

    componentDidMount() {
        
    }

    constructor(props) {
        super(props);
        this.state={
            gyms: "",
            images: "test",
            pages: "",
            routes: "",
            WDHours: "",
            WEHours: "",
        }
        var that = this;
        var mainRef = firebase.database().ref("facilities")
        
        mainRef.once("value").then(function(dataSnapshot) {
          var i = 0;
          dataSnapshot.forEach(function(testingSnap){
            nameArray[i] = testingSnap.child("name").val();
            imageArray[i] = testingSnap.child("image").val();
            pageArray[i] = testingSnap.child("page").val();
            weekdayHours[i] = testingSnap.child("hours/open/weekdays").val();
            weekendHours[i] = testingSnap.child("hours/open/weekends").val();
            routeArray[i] = i;
            i++;
          })
          that.setState({
            gyms : nameArray,
            images : imageArray,
            pages : pageArray,
            routes : routeArray,
            WDHours : weekdayHours,
            WEHours : weekendHours,
          })
        })
    }
  
  render() {
    const { navigate } = this.props.navigation;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
    });
    var screen = [];
    for(i = 0; i < this.state.gyms.length; i++){
      console.log(weekdayHours + weekendHours)
      screen.push(
        <View style={styles.container}>
	          <TouchableOpacity activeOpacity={ 0.75 } style={ styles.button } onPress={() => navigate('RecCenter')}>
              <AutoHeightImage width={deviceWidth} source={{uri: this.state.images[i]}} />
            	      <Text style={{textAlign: 'center', fontSize: 30}}>{'\n' + this.state.gyms[i]}</Text>
            	      <Text style={{textAlign: 'center', fontSize: 20, textDecorationLine: 'underline'}}>{'\nHours'}</Text>
            	      <Text style={{textAlign: 'center', fontSize: 15}}>{this.state.WDHours[i]}</Text>
            	      <Text style={{textAlign: 'center', fontSize: 15}}>{this.state.WEHours[i]}</Text>
			      </TouchableOpacity>
	      </View>
      )
    }
    return (
    	<Container>
            <Header style={{backgroundColor: 'gold'}}>
	          <Left>
	          </Left>
	          <Body>
	          	 <Title>Herkyles</Title>
	          </Body>
	          <Right>
	          <Button transparent dark onPress={() => Alert.alert('You Pressed','Forums!')}>
	          	<Icon name='chatbubbles' />
	          </Button>
	          </Right>
	        </Header>
	        <Content>
	          <ScrollView scrollsToTop={true} ref={(ref) => this.myScroll = ref}>
            {screen}
            {/*
            <View style={styles.container}>
	          <TouchableOpacity activeOpacity={ 0.75 } style={ styles.button } onPress={() => navigate(this.state.pages[0])}>
              <AutoHeightImage width={deviceWidth} source={{uri: this.state.images[0]}} />
            	      <Text style={{textAlign: 'center', fontSize: 30}}>{'\n' + this.state.gyms[0]}</Text>
            	      <Text style={{textAlign: 'center', fontSize: 20}}>{'\nHours'}</Text>
            	      <Text style={{textAlign: 'center', fontSize: 15}}>{'\nWeekday: 5AM - 7PM'}</Text>
            	      <Text style={{textAlign: 'center', fontSize: 15}}>{'Weekend: 5:30AM - 8PM'}</Text>
			      </TouchableOpacity>
	         	</View>
	         	<View style={styles.container}>
	          <TouchableOpacity activeOpacity={ 0.75 } style={ styles.button } onPress={() => navigate("FieldHouse", {screen: "Field House"})}>
              <AutoHeightImage width={deviceWidth} source={{uri: this.state.images[1]}} />
            	      <Text style={{textAlign: 'center', fontSize: 30}}>{'\n' + this.state.gyms[1]}</Text>
            	      <Text style={{textAlign: 'center', fontSize: 20}}>{'\nHours'}</Text>
            	      <Text style={{textAlign: 'center', fontSize: 15}}>{'\nWeekday: 5AM - 7PM'}</Text>
            	      <Text style={{textAlign: 'center', fontSize: 15}}>{'Weekend: 5:30AM - 8PM'}</Text>
			      </TouchableOpacity>
	         	</View>
	         	<View style={styles.container}>
	          <TouchableOpacity activeOpacity={ 0.75 } style={ styles.button } onPress={() => Alert.alert('You Pressed','#3!',[{text: 'OK', onPress: () => console.log('OK Pressed')}])}>
            	      <Image style={{width: deviceWidth}} resizeMode='cover' source={require('./images/FitnessEast.jpg')}/>
            	      <Text style={{textAlign: 'center', fontSize: 30}}>{'\nFitness East Recreational Facilty'}</Text>
            	      <Text style={{textAlign: 'center', fontSize: 20}}>{'\nHours'}</Text>
            	      <Text style={{textAlign: 'center', fontSize: 15}}>{'\nWeekday: 5AM - 7PM'}</Text>
            	      <Text style={{textAlign: 'center', fontSize: 15}}>{'Weekend: 5:30AM - 8PM'}</Text>
			      </TouchableOpacity>
            </View>
            */}
        </ScrollView>
	        </Content>
      </Container>
    );
  }
}
function refresh(test1){
  console.log("HERE: " + test1)
}
function testing(test1){
  this.setState({gym1: test1}, refresh(test1))
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigred: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 50,
  },
  buttonContainer: {
    margin: 20,
    marginTop: 100
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
  	flex: 1,
  	flexDirection: 'column',
  	padding: 0,
  	justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  title:{
  	
  }
});
