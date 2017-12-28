import React, { Component } from 'react'

import Toolbar from '../components/Toolbar'
import ListSurat from '../components/ListSurat'
import FabButton from '../components/FabButton'
import SideBar from '../components/SideMenu'

import { Drawer, Container, List, Content } from 'native-base'

import { connect } from 'react-redux'
import { doGetSuratPersonal } from '../store/actions/suratPersonal'

class SuratPersonalPage extends Component {

  static navigationOptions = { header: null }

  constructor(props) {
    super(props)
  }

  load = () => {
    if (!this.props.suratPersonal.isLoad){
      this.props.dispatchGetSuratPersonal(this.props.keyNumber)
    }
  }

  componentDidMount () {
    this.load()
  }

  data = this.props.suratPersonal.data

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
 
  render(){

    const {navigate} = this.props.navigation

    return(
      <Drawer
        ref={(ref) => { this._drawer = ref }}
        content={<SideBar navigator={this._navigator} navigator1={this.navigate.suratPersonal} navigator2={this.navigate.suratKeluar} navigator3={this.navigate.tulisSurat} />}
        onClose={() => this.closeDrawer()} 
      >
        <Container>
          <Toolbar judul='Surat Personal' aksi = {this.open} icon='menu'/>
          <Content style={{marginLeft:-15}}>
            <List>
              {
                this.data.map( (suratMasuk, index) => (
                  <ListSurat key={index} asalSurat={ suratMasuk.DARI } catatan={ suratMasuk.CATATAN } tglMasuk={ suratMasuk.TGL_MASUK } navigator={ () => navigate('DetailSuratPersonal', {idSurat: suratMasuk.ID_DISTRIBUSI_SURAT }) } />
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
    suratPersonal: state.suratpersonal
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchGetSuratPersonal: (key) => dispatch(doGetSuratPersonal(key))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SuratPersonalPage)