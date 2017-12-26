import React, { Component } from 'react'

import Toolbar from '../components/Toolbar'
import FabButton from '../components/FabButton'
import SideBar from '../components/SideMenu'

import { Drawer, Container, List, Content, Text } from 'native-base'

import { connect } from 'react-redux'
import { doGetSuratMasuk } from '../store/actions/suratMasuk'

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
    kotakMasuk: () => this.props.navigation.navigate('KotakMasuk'),
    kotakKeluar: () => this.props.navigation.navigate('KotakKeluar'),
    tulisSurat: () => this.props.navigation.navigate('TulisSurat')
  }
 
  render(){

    return(
      <Drawer
        ref={(ref) => { this._drawer = ref }}
        content={<SideBar navigator={this._navigator} navigator1={this.navigate.kotakMasuk} navigator2={this.navigate.kotakKeluar} navigator3={this.navigate.tulisSurat} />}
        onClose={() => this.closeDrawer()} 
      >
        <Container>
          <Toolbar judul='SI Surat UIN Suka' aksi = {this.open}/>
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