import React, { Component } from 'react'
import { Text } from 'native-base'

export default class LoadingPage extends Component {
	
	constructor(props){
		super(props)
	}

  render(){
    return(
      <Text style={{justifyContent: 'center'}}>Loading ..</Text>
    )
  }

}