import React, { Component } from 'react'
import { Text, Thumbnail, ListItem, Left, Right, Body } from 'native-base'


export default class ListSurat extends Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
          <ListItem avatar>
            <Left>
              <Thumbnail style={{marginLeft:12}} source={require('../assets/img/profile_default.png')} />
            </Left>
            <Body >
              <Text onPress={()=> alert('ini surat masuk')}>{ this.props.asalSurat }</Text>
              <Text note onPress={()=> alert('ini surat masuk')}>{ this.props.catatan }</Text>
            </Body>
            <Right>
              <Text note>{ this.props.tglMasuk }</Text>
            </Right>
          </ListItem>
        )
    }
}