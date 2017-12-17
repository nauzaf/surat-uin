import { StackNavigator } from 'react-navigation'

import KotakMasukPage from './layouts/KotakMasukPage'
import LoginPage from './layouts/LoginPage'

const router = StackNavigator({
    Login: { screen: LoginPage },
    KotakMasuk: { screen: KotakMasukPage }
})

export default router