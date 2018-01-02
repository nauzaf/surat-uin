import React, { Component } from 'react'

import Toolbar from '../components/Toolbar'

import { Drawer, Container, Content, Form, Item, Input, Button, Text } from 'native-base'

class TulisSuratPage extends Component {

  static navigationOptions = { header: null }

  constructor(props) {
    super(props)
  }

  goBack = () => this.props.navigation.goBack()
 
  render(){
    return(
      <Container>
        <Toolbar judul='Tulis Surat' aksi = {this.goBack} icon='md-arrow-round-back'/>
        <Content padder>
          <Form>
            <Item floatingLabel>
              <Input placeholder='NIM' />
            </Item>
            <Item floatingLabel>
              <Input placeholder='Perihal' />
            </Item>
            <Item floatingLabel>
              <Input placeholder='Pesan' />
            </Item>
          </Form>
          <Button block warning style={{marginTop: 15}}>
            <Text>Kirim</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default TulisSuratPage