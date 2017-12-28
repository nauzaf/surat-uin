import React, { Component } from 'react'

import Toolbar from '../components/Toolbar'
import FabButton from '../components/FabButton'
import SideBar from '../components/SideMenu'

import { Drawer, Container, List, Content, Text } from 'native-base'

import { connect } from 'react-redux'

class WelcomePage extends Component {

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

  navigate = {
    suratPersonal: () => this.props.navigation.navigate('SuratPersonal'),
    suratKeluar: () => this.props.navigation.navigate('Surateluar'),
    tulisSurat: () => this.props.navigation.navigate('TulisSurat')
  }
 
  render(){

    return(
      <Drawer
        ref={(ref) => { this._drawer = ref }}
        content={<SideBar navigator={this._navigator} navigator1={this.navigate.suratPersonal} navigator2={this.navigate.suratKeluar} navigator3={this.navigate.tulisSurat} />}
        onClose={() => this.closeDrawer()} 
      >
        <Container>
          <Toolbar judul='SI Surat UIN Suka' aksi = {this.open} icon='menu'/>
					<Text style={{alignSelf: 'center', marginTop: 200}}>Assalamualaikum</Text>
          <Text style={{alignSelf: 'center'}}>{this.props.name}</Text>
          <FabButton navigator={this.navigate.tulisSurat} />
        </Container>
      </Drawer>
    )
  }
}

function mapStateToProps (state) {
  return {
    name: state.user.firstName + ' ' + state.user.lastName
  }
}

export default connect(mapStateToProps)(WelcomePage)