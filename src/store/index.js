import { Platform } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import devTools from 'remote-redux-devtools'
import rootReducer from './reducers'

if (__DEV__) {
  // Use it if Remote debugging with RNDebugger, otherwise use remote-redux-devtools
  /* eslint-disable no-underscore-dangle */
  composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    require('remote-redux-devtools').composeWithDevTools)({
    name: Platform.OS
  });
  /* eslint-enable no-underscore-dangle */
}

export default function configureStore() {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools({
      name: Platform.OS,
      hostname: 'localhost',
      port: 5678
    })
  );
  let store = createStore(rootReducer, enhancer)
  return store
}