/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Navigator} from 'react-native-deprecated-custom-components';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import Login from './assets/Login'
import Main from './Main/Main'
export default class Router extends Component {
  render() {
    return (
      <Navigator 
        initialRoute = {{name: 'Login', title: 'Login'}}
        renderScene= {this.renderScene}
        />
    );
  }
  renderScene(route, navigator){
    if(route.name =='Login'){
      return (
        <Login 
        navigator = {navigator}
        {...route.passProps}
        />
      )
    }
    if(route.name == 'Main'){
      return(
        <Main 
        navigator = {navigator}
        {...route.passProps}
        />
      )
    }
  }
}
module.exports=Router;
