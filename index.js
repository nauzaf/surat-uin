import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import Router from './src/router'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import configureStore from './src/store'

import Loading from './src/layouts/LoadingPage'

const app = configureStore()

const onBeforeLift = () => {
  // take some action before the gate lifts
}

const SiSurat = () => (
  <Provider store={app.store}>
    <PersistGate
      loading={<Loading />}
      onBeforeLift={onBeforeLift}
      persistor={app.persistor}>
      <Router />
    </PersistGate>
  </Provider>
)

AppRegistry.registerComponent('SiSuratUIN', () => SiSurat)
