import React from 'react'
import { AppRegistry } from 'react-native'
import Login from './src/layouts/LoginPage'
import { Provider } from 'react-redux'
import configureStore from './src/store'

const store = configureStore()

const SiSurat = () => (
  <Provider store={store}>
    <Login />
  </Provider>
)

AppRegistry.registerComponent('SiSuratUIN', () => SiSurat)
