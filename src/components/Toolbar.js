import React, { Component } from 'react'
import { Header, Content, Text, Title, Button, Left, Right, Body, Icon, Drawer } from 'native-base'


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