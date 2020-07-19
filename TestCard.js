import React, { Component } from 'react';
import { StyleSheet,  View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { AppLoading } from 'expo';
export default class App extends Component {  

  constructor(props){
    super(props)
    this.state = {
      isLoading:true
    }
  }


  async UNSAFE_componentWillMount(){
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium:require('native-base/Fonts/Roboto_medium.ttf')
    })
    this.setState({isLoading:false})
  }

  render(){
    if(this.state.isLoading){
      return <AppLoading/>;
    }    
  return (
    <Container>    
    <Content>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: 'https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} />
            <Body>
              <Text>Yash Kalavadiya</Text>
              <Text note>Photographer | coder</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: 'https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>Comment</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
      </Card>
    </Content>
  </Container>
  );            
  }
}
