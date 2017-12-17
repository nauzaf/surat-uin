import React, { Component } from 'react'
import { Header, Title, Button, Left, Body, Icon } from 'native-base'


export default class Toolbar extends Component{
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <Header style={{backgroundColor: 'green'}}>
        <Left>
          <Button transparent onPress={this.props.aksi}>
            <Icon name ='menu'/>
          </Button>
        </Left>
        <Body>
          <Title>{this.props.judul}</Title>
        </Body>
      </Header>
    )
  }
}