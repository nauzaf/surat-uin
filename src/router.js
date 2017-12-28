import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import React from 'react'
import { connect } from 'react-redux'

import SuratPersonalPage from './layouts/SuratPersonalPage'
import SuratKeluarPage from './layouts/SuratKeluarPage'
import LoginPage from './layouts/LoginPage'
import TulisSuratPage from './layouts/TulisSuratPage'
import WelcomePage from './layouts/WelcomePage'
import DetailSuratPersonalPage from './layouts/DetailSuratPersonalPage'

export const AppNavigator = StackNavigator({
    Login: { screen: LoginPage },
    SuratPersonal: { screen: SuratPersonalPage },
    SuratKeluar: { screen: SuratKeluarPage },
    TulisSurat: { screen: TulisSuratPage },
    Welcome: { screen: WelcomePage },
    DetailSuratPersonal: { screen: DetailSuratPersonalPage }
})

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

const mapStateToProps = state => ({
    nav: state.nav
})

export default connect(mapStateToProps)(AppWithNavigationState)