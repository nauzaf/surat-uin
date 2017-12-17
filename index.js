import React,{Component} from 'react'
import { AppRegistry } from 'react-native'
import Router from './src/router'
import { Provider } from 'react-redux'
import configureStore from './src/store'
const store = configureStore()

const SiSurat = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

AppRegistry.registerComponent('SiSuratUIN', () => SiSurat)
