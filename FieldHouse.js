import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Alert, Image, Dimensions, TouchableOpacity, Navigator} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import ScrollToTop from 'react-native-scroll-to-top';
import { StackNavigator, NavigationActions } from 'react-navigation';

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class FieldHouse extends Component {
    render() {
        const { state, navigate } = this.props.navigation;
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
          });
        return (
    <Container>
            <Header style={{backgroundColor: 'gold'}}>
	          <Left>
                <Button transparent dark onPress={() => this.props.navigation.goBack()}>
	          	    <Icon name='arrow-dropleft' />
	            </Button>
	          </Left>
	          <Body>
	          	 <Title>Field House</Title>
	          </Body>
	          <Right>
	          <Button transparent dark onPress={() => Alert.alert('You Pressed','Forums!')}>
	          	<Icon name='chatbubbles' />
	          </Button>
	          <Button transparent dark onPress={() => this.props.navigation.dispatch(resetAction)}>
	          	<Icon name='home' />
	          </Button>
	          </Right>
	        </Header>
	        <Content>
	          <ScrollView scrollsToTop={true} ref={(ref) => this.myScroll = ref}>
	          <View style={styles.container}>
            	    <Image style={{width: deviceWidth}} resizeMode='cover' source={require('./images/FieldHouse.jpg')}/>
            	    <Text style={{textAlign: 'center', fontSize: 30}}>{'\nField House'}</Text>
            	    <Text style={{textAlign: 'center', fontSize: 20}}>{'\nHours'}</Text>
            	    <Text style={{textAlign: 'center', fontSize: 15}}>{'\nMonday: 5AM - 7PM'}</Text>
            	    <Text style={{textAlign: 'center', fontSize: 15}}>{'Tuesday: 5:30AM - 8PM'}</Text>
                    <Button style={{alignItems: 'center'}} transparent dark onPress={() => navigate("RecCenter", {screen: "Rec Center"})}>
                        <Text style={{textAlign: 'center', fontSize: 30, color: 'blue'}}>{'\n\n\n\n\n\n     Take Me To Rec Center'}</Text>
                    </Button>
                    <Text style={{textAlign: 'center', fontSize: 15}}>{'\n\n\n\n'}</Text>
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

FieldHouse.navigationOptions = {
        title: 'Field House',
        header: false,
};

export default FieldHouse
