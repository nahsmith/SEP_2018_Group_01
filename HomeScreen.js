import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Alert, Image, Dimensions, TouchableOpacity, TouchableHighlight, Navigator} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import ScrollToTop from 'react-native-scroll-to-top';
import { StackNavigator, NavigationActions } from 'react-navigation';

const deviceWidth = Dimensions.get('window').width;

//var firebase = require("firebase");
import * as firebase from "firebase";

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
var database = firebase.database();
var firebaseHeadingRef = firebase.database().ref("facilities/id");
var test1= 2;
var stop = 0;


class Gyms extends Component {
    render() {
      return (
        <Text style={{textAlign: 'center', fontSize: 30}}>{this.props.name}</Text>
      );
    }
  }

export default class HomeScreen extends Component {
  
    static navigationOptions = {
        title: "Home",
        header: false,
    }

    componentDidMount() {
        console.log("compDidMount HERE")
        this.setState({})
    }

    constructor(props) {
        super(props);
        var tryme = "testing";
        console.log("constructor")
        firebaseHeadingRef.on("value", function(snapshot) {
            //return snapshot.val();
            test1 = snapshot.val();
            console.log(test1);
            console.log(typeof(test1));
            this.state={
                gym1: test1
            }
            if (typeof(test1) === 'string'){
                console.log("String!");
            }
            else{
                console.log("No String!");
            }
            console.log("This is working: " + test1);
        }, function (error) {
            console.log("Error: " + error.code);
        });
    }
  
  render() {
    const navigate = this.props.navigation;
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
      });
    return (
    	<Container>
            <Header style={{backgroundColor: 'gold'}}>
	          <Left>
	          </Left>
	          <Body>
	          	 <Title>Herkyles</Title>
	          </Body>
	          <Right>
              {/*
	          <Button transparent dark onPress={() => Alert.alert('You Pressed','Back!')}>
	          	<Icon name='arrow-dropleft' />
	          </Button>
              */}
	          <Button transparent dark onPress={() => Alert.alert('You Pressed','Forums!')}>
	          	<Icon name='chatbubbles' />
	          </Button>
              {/*
	          <Button transparent dark onPress={() => this.props.navigation.dispatch(resetAction)}>
	          	<Icon name='home' />
	          </Button>
              */}
	          </Right>
	        </Header>
	        <Content>
	          <ScrollView scrollsToTop={true} ref={(ref) => this.myScroll = ref}>
	          <View style={styles.container}>
	          <TouchableOpacity activeOpacity={ 0.75 } style={ styles.button } onPress={this.clearText}>
            	      <Image style={{width: deviceWidth}} resizeMode='cover' source={require('./images/CampusRec.jpg')}/>
            	      <Text style={{textAlign: 'center', fontSize: 30}}>{test1}</Text>
            	      <Text style={{textAlign: 'center', fontSize: 20}}>{'\nHours'}</Text>
            	      <Text style={{textAlign: 'center', fontSize: 15}}>{'\nWeekday: 5AM - 7PM'}</Text>
            	      <Text style={{textAlign: 'center', fontSize: 15}}>{'Weekend: 5:30AM - 8PM'}</Text>
			 </TouchableOpacity>
	         	</View>
	         	<View style={styles.container}>
	          <TouchableOpacity activeOpacity={ 0.75 } style={ styles.button } onPress={() => navigate("FieldHouse", {screen: "Field House"})}>
            	      <Image style={{width: deviceWidth}} resizeMode='cover' source={require('./images/FieldHouse.jpg')}/>
            	      <Text style={{textAlign: 'center', fontSize: 30}}>{'\nField House'}</Text>
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
        </ScrollView>
	        </Content>
	        {/*
	        <Footer>
	          <FooterTab>
	            <Button full>
	              <Text>Footer</Text>
	            </Button>
	          </FooterTab>
	        </Footer>
	        */}
      </Container>
    );
  }
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