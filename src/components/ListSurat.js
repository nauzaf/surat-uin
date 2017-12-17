import React, { Component } from 'react'
import { Container, Header, Content, Text, Thumbnail, List, ListItem, Title, Button, Left, Right, Body, Icon } from 'native-base'


export default class ListSurat extends Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
        <Content style={{marginLeft:-15}}>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail style={{marginLeft:12}} source={require('../assets/img/lana.jpg')} />
              </Left>
              <Body >
                <Text onPress={()=> alert('ini surat masuk')}>Lana Rahim</Text>
                <Text note onPress={()=> alert('ini surat masuk')}>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail style={{marginLeft:12}} source={require('../assets/img/lana.jpg')} />
              </Left>
              <Body >
                <Text onPress={()=> alert('ini surat masuk')}>Lana Rahim</Text>
                <Text note onPress={()=> alert('ini surat masuk')}>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
        )
    }
}