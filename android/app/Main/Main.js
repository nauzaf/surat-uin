import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Drawer from 'react-native-drawer';
import MainApp from '../Drawer/MainApp';
export default class Main extends Component{
    render(){
        return(
        <MainApp/>
    );
    }
}