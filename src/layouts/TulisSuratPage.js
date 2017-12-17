import React, { Component } from 'react'

import Toolbar from '../components/Toolbar'
import SideBar from '../components/SideMenu'

import { Drawer, Container, Content, Form, Item, Input, Button, Text } from 'native-base'

class TulisSuratPage extends Component {

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

    const { navigate } = this.props.navigation

    return(
      <Drawer
        ref={(ref) => { this._drawer = ref }}
        content={<SideBar navigator={this._navigator} navigator1={this.navigate.kotakMasuk} navigator2={this.navigate.kotakKeluar} navigator3={this.navigate.tulisSurat} />}
        onClose={() => this.closeDrawer()} 
      >
        <Container>
          <Toolbar judul='Tulis Surat' aksi = {this.open}/>
          <Content>
            <Form>
              <Item floatingLabel>
                <Input placeholder="NIM" />
              </Item>
              <Item floatingLabel>
                <Input placeholder="Perihal" />
              </Item>
              <Item floatingLabel>
                <Input placeholder="Pesan" />
              </Item>
            </Form>
            <Button block success>
              <Text>Kirim</Text>
            </Button>
          </Content>
        </Container>
      </Drawer>
    )
  }
}

export default TulisSuratPage