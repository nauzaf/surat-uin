import React, { Component } from 'react'
import Toolbar from '../components/Toolbar'
import ListSurat from '../components/ListSurat'
import FabButton from '../components/FabButton'
import { View } from 'react-native'
import { Container } from 'native-base'
import { Drawer, Button } from 'native-base'
import SideBar from '../components/SideMenu'

export default class KotakMasukPage extends Component {

    static navigationOptions = { header: null }

    constructor(props) {
        super(props)
    }
    closeDrawer () {
        this._drawer._root.close()
    }
    openDrawer () {
        this._drawer._root.open()
    }

    open = () => {
        this.openDrawer()
    }
   
    render(){

        const { navigate } = this.props.navigation

        return(
            <Drawer
            ref={(ref) => { this._drawer = ref; }}
            content={<SideBar navigator={this._navigator} navigator1={() => navigate('Login')} navigator2={() => navigate('Login')} />}
            onClose={() => this.closeDrawer()} >
         <Container>
            <Toolbar judul='Kotak Masuk' aksi = {this.open}/>
            <ListSurat />
            <FabButton />
         </Container>
         </Drawer>
        )
    }
}