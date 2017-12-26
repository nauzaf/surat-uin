import React, { Component } from 'react'

import Toolbar from '../components/Toolbar'
import ListSurat from '../components/ListSurat'
import FabButton from '../components/FabButton'
import SideBar from '../components/SideMenu'

import { Drawer, Container, List, Content } from 'native-base'

import { connect } from 'react-redux'
import { doGetSuratMasuk } from '../store/actions/suratMasuk'

class KotakMasukPage extends Component {

  static navigationOptions = { header: null }

  constructor(props) {
    super(props)
  }

  load = () => {
    if (!this.props.suratMasuk.isLoad){
      this.props.dispatchGetSuratMasuk(this.props.key)
    }
  }

  componentDidMount () {
    this.load()
  }

  data = this.props.suratMasuk.data

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
          <Toolbar judul='Surat Masuk' aksi = {this.open}/>
          <Content style={{marginLeft:-15}}>
            <List>
              {
                this.data.map( (suratMasuk, index) => (
                  <ListSurat key={index} asalSurat={ suratMasuk.DARI } catatan={ suratMasuk.CATATAN } tglMasuk={ suratMasuk.TGL_MASUK } />
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
    key: state.user.userName,
    suratMasuk: state.suratmasuk
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchGetSuratMasuk: (key) => dispatch(doGetSuratMasuk(key))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KotakMasukPage)