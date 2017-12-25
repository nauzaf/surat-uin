import { NavigationActions } from 'react-navigation'
import { AppNavigator } from '../../router'

import * as types from '../action-types'

const initialState = AppNavigator.router.getStateForAction(NavigationActions.init())

export default (state = initialState, action) => {
    let nextState
    switch (action.type) {
        case types.NAV_KOTAK_MASUK:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'KotakMasuk' }),
                state
            )
            break
        default:
            nextState = AppNavigator.router.getStateForAction(action, state)
            break
    }
    return nextState || state
}
