import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import Router from './src/router'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import configureStore from './src/store'
const app = configureStore()

const SiSurat = () => (
  <Provider store={app.store}>
    <PersistGate persistor={app.persistor}>
      <Router />
    </PersistGate>
  </Provider>
)

AppRegistry.registerComponent('SiSuratUIN', () => SiSurat)
