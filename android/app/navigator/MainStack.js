import { React } from 'react';
import { StackNavigator } from 'react-navigation';

import Home from '../components/Home';
import About from '../components/About';
import LeftIconComponent from '../components/LeftIconComponent';

const navigationOptions = {
  headerStyle: {
    backgroundColor: '#000',
    height: 50,
    justifyContent: 'flex-end',
    elevation: 0,
  },
  headerTitleStyle: {
    color: '#FFFFFF',
    justifyContent: 'flex-end',
  },
  headerTintColor: '#FFFFFF',
};

const MainStack = new StackNavigator({
  Home: {
    screen: Home
  },
  About: {
    screen: About
  }
}, {
  navigationOptions
})

export default MainStack;