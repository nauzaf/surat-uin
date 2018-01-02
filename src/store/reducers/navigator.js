import { NavigationActions } from 'react-navigation'
import { AppNavigator } from '../../router'

import * as types from '../action-types'

const initialState = AppNavigator.router.getStateForAction(NavigationActions.init())

export default (state = initialState, action) => {
    let nextState
    switch (action.type) {
        case types.NAV_WELCOME:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Welcome' }),
                state
            )
            break
        case types.NAV_LOGIN:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'Login'})] }),
                state
            )
            break
        default:
            nextState = AppNavigator.router.getStateForAction(action, state)
            break
    }
    return nextState || state
}
