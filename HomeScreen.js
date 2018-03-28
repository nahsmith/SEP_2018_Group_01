import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Alert, Image, Dimensions, TouchableOpacity, TouchableHighlight, Navigator} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import ScrollToTop from 'react-native-scroll-to-top';
import { StackNavigator, NavigationActions } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

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
var arrayTest = [];
var imageArray = [];

export default class HomeScreen extends Component {
  
    static navigationOptions = {
        title: "Home",
        header: false,
    }

    componentDidMount() {
        
    }

    constructor(props) {
        super(props);
        console.log("constructor")
        this.state={
            gym1: "",
            gym2: "",
            image1: "",
            image2: "",
        }
        var that = this;
        var mainRef = firebase.database().ref("facilities")
        //console.log(mainRef.once("value")); 
        //var recCenterRef = databaseRef.ref("facilities/reccenter");
        //var fieldHouseRef = databaseRef.ref("facilities/fieldhouse")
        var mainImageRef = imageRef.ref("mainImages/CampusRec.jpg");
        mainImageRef.getDownloadURL().then(function(url) {
          console.log(url);
          imageArray[0] = url;
          that.setState({
            image1 : imageArray[0],
          })
        });
        
        mainRef.once("value").then(function(dataSnapshot) {
          console.log(dataSnapshot);
          var i = 0;
          dataSnapshot.forEach(function(testingSnap){
            arrayTest[i] = testingSnap.child("name").val();
            //console.log(arrayTest[i]);
            i++;
          })
          that.setState({
            gym1 : arrayTest[0],
            gym2 : arrayTest[1],
          })
        })

        /*mainImageRef.getDownloadURL().then(function(url) {
          console.log(url);
        });
        */

        /*mainImageRef.once("value").then(function(imageSnapshot) {
          console.log(imageSnapshot);
          var i = 0;
          imageSnapshot.forEach(function(testingSnap){
            imageArray[i] = testingSnap.child.val();
            //console.log(arrayTest[i]);
            i++;
          })
          that.setState({
            image1 : imageArray[0],
            //gym2 : arrayTest[1],
          })
        })
        */

       
    }
  
  render() {
    const { navigate } = this.props.navigation;
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
	          <Button transparent dark onPress={() => Alert.alert('You Pressed','Forums!')}>
	          	<Icon name='chatbubbles' />
	          </Button>
	          </Right>
	        </Header>
	        <Content>
	          <ScrollView scrollsToTop={true} ref={(ref) => this.myScroll = ref}>
	          <View style={styles.container}>
	          <TouchableOpacity activeOpacity={ 0.75 } style={ styles.button } onPress={() => navigate("RecCenter", {screen: "Rec Center"})}>
            	      <Image style={{width: deviceWidth}} resizeMode='cover' source = {{uri: this.state.image1.toString}}/>
            	      <Text style={{textAlign: 'center', fontSize: 30}}>{'\n' + this.state.gym1}</Text>
            	      <Text style={{textAlign: 'center', fontSize: 20}}>{'\nHours'}</Text>
            	      <Text style={{textAlign: 'center', fontSize: 15}}>{'\nWeekday: 5AM - 7PM'}</Text>
            	      <Text style={{textAlign: 'center', fontSize: 15}}>{'Weekend: 5:30AM - 8PM'}</Text>
			 </TouchableOpacity>
	         	</View>
	         	<View style={styles.container}>
	          <TouchableOpacity activeOpacity={ 0.75 } style={ styles.button } onPress={() => navigate("FieldHouse", {screen: "Field House"})}>
            	      <Image style={{width: deviceWidth}} resizeMode='cover' source={require('./images/FieldHouse.jpg')}/>
            	      <Text style={{textAlign: 'center', fontSize: 30}}>{'\n' + this.state.gym2}</Text>
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
