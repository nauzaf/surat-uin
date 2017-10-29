/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighLight,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

export default class Login extends Component {
  onButtonPress(){
    this.props.navigator.push({
      name: 'Main',
      title: 'Main',
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>SISTEM SURAT UIN</Text>
          <Image source={require('../img/logo.png')}/>
            <View style={styles.inputContainer}>
              <TextInput underlineColorAndroid='transparent' style={styles.inputUser} placeholder='Username'></TextInput>
                <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.inputPass} placeholder='Password'>
                </TextInput>
                <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    fontWeight:'bold',
    fontSize:20,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:15
  },
  inputContainer:{
    justifyContent:'center',
    margin:20,
    marginBottom:20,
    padding:20,
    paddingBottom:10,
    alignSelf:'stretch'
  },
  inputUser:{
    fontSize:15,
    height:40,
    padding:10,
    marginBottom:10,
    borderWidth:1,
    borderColor:'gray'
  },
  inputPass:{
    fontSize:15,
    height:40,
    padding:10,
    marginBottom:10,
    borderWidth:1,
    borderColor:'gray'
  },
  buttonContainer:{
    height: 40,
    alignSelf:'stretch',
    alignItems: 'center',
    backgroundColor:'#008000'
  },
  buttonText:{
    color: '#f8f8ff',
    marginTop:10,
    fontSize:15,
    fontWeight:'bold',
    textAlign:'center'
  }
})

module.exports= Login;
