import { StackNavigator } from 'react-navigation'

import KotakMasukPage from './layouts/KotakMasukPage'
import KotakKeluarPage from './layouts/KotakKeluarPage'
import LoginPage from './layouts/LoginPage'
import TulisSuratPage from './layouts/TulisSuratPage'

const router = StackNavigator({
    Login: { screen: LoginPage },
    KotakMasuk: { screen: KotakMasukPage },
    KotakKeluar: { screen: KotakKeluarPage },
    TulisSurat: { screen: TulisSuratPage }
})

export default router