import React, { Component } from 'react'

import Toolbar from '../components/Toolbar'
import ListSurat from '../components/ListSurat'
import FabButton from '../components/FabButton'
import SideBar from '../components/SideMenu'

import { Drawer, Container, List, Content } from 'native-base'

import { connect } from 'react-redux'
import { doGetSuratKeluar } from '../store/actions/suratKeluar'
import { doLogout } from '../store/actions/user'

class SuratKeluarPage extends Component {

  static navigationOptions = { header: null }

  constructor(props) {
    super(props)
  }

  load = () => {
    if (!this.props.suratKeluar.isLoad){
      this.props.dispatchGetSuratKeluar(this.props.keyNumber)
    }
  }

  componentDidMount () {
    this.load()
  }

  data = this.props.suratKeluar.data

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
    suratKeluar: () => this.props.navigation.navigate('SuratKeluar'),
    tulisSurat: () => this.props.navigation.navigate('TulisSurat')
  }

  logout = () => {
    this.props.dispatchLogout()
  }
 
 
  render(){
    return(
      <Drawer
        ref={(ref) => { this._drawer = ref }}
        content={<SideBar navigator={this._navigator} navigator1={this.navigate.suratPersonal} navigator2={this.navigate.suratKeluar} navigator3={this.navigate.tulisSurat} navigator4={this.logout} />}
        onClose={() => this.closeDrawer()} 
      >
        <Container>
          <Toolbar judul='Surat Keluar' aksi = {this.open} icon='menu'/>
          <Content style={{marginLeft:-15}}>
            <List>
              {
                this.data.map( (suratKeluar, index) => (
                  <ListSurat key={index} asalSurat={ suratKeluar.PERIHAL } catatan={ suratKeluar.G_JENIS } tglMasuk={ suratKeluar.WAKTU_KIRIM } navigator={()=>alert('hello')} />
                ))
              }
            </List>
          </Content>
          <FabButton navigator={this.navigate.tulisSurat} />
        </Container>
      </Drawer>
    )
  }
}

function mapStateToProps (state) {
  return {
    keyNumber: state.user.userName,
    suratKeluar: state.suratkeluar
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchGetSuratKeluar: (key) => dispatch(doGetSuratKeluar(key)),
    dispatchLogout: () => dispatch(doLogout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SuratKeluarPage)