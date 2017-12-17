import React, { Component } from 'react'

import Toolbar from '../components/Toolbar'
import ListSurat from '../components/ListSurat'
import FabButton from '../components/FabButton'
import SideBar from '../components/SideMenu'

import { Drawer, Container } from 'native-base'

import { connect } from 'react-redux'
import { getSuratKeluar } from '../store/actions/surat_keluar'

class KotakMasukPage extends Component {

  static navigationOptions = { header: null }

  constructor(props) {
    super(props)
    if (!this.props.isLoad) {
      this.props.dispatchGetSuratKeluar(this.props.nim)
    }
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

    const { navigate } = this.props.navigation

    return(
      <Drawer
        ref={(ref) => { this._drawer = ref }}
        content={<SideBar navigator={this._navigator} navigator1={this.navigate.kotakMasuk} navigator2={this.navigate.kotakKeluar} navigator3={this.navigate.tulisSurat} />}
        onClose={() => this.closeDrawer()} 
      >
        <Container>
          <Toolbar judul='Kotak Keluar' aksi = {this.open}/>
          {
            this.props.suratKeluar.data.map( (suratKeluar) => (
              <ListSurat asalSurat={ suratKeluar.PERIHAL } catatan={ suratKeluar.G_JENIS } tglMasuk={ suratKeluar.WAKTU_KIRIM } />
            ))
          }
          <FabButton navigator={this.navigate.tulisSurat} />
        </Container>
      </Drawer>
    )
  }
}

function mapStateToProps (state) {
  return {
    nim: state.login.userName,
    suratKeluar: state.suratKeluar
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchGetSuratKeluar: (nim) => dispatch(getSuratKeluar(nim))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KotakMasukPage)