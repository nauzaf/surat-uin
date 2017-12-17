import React, { Component } from 'react'
import { Image } from 'react-native'
import { Content, Container, Thumbnail } from 'native-base'
import styles from '../assets/style/style'
import SideMenuItem from './SideMenuItem'

const drawerCover = require('../assets/img/uin.jpg')
const drawerImage = require('../assets/img/profile_default.png')

class SideBar extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <Content bounces={false} style={{ flex: 1, backgroundColor: '#fff', top: -1 }}>
          <Image source={drawerCover} style={styles.drawerCover} />
          <Thumbnail large style={styles.drawerImage} source={drawerImage} />
          <SideMenuItem dynamicIcon='create' dynamicTitle='Tulis Surat' navigator={this.props.navigator3} />
          <SideMenuItem dynamicIcon='mail' dynamicTitle='Surat Masuk' navigator={this.props.navigator1} />
          <SideMenuItem dynamicIcon='exit' dynamicTitle='Surat Keluar' navigator={this.props.navigator2} />
        </Content>
      </Container>
    );
  }
}

export default SideBar;