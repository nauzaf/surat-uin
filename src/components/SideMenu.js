import React, { Component } from "react"
import { Image, TouchableOpacity } from "react-native"
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
  Thumbnail
} from "native-base"
import styles from "./style"
import SideMenuItem from "./SideMenuItem"

const drawerCover = require('../assets/img/uin.jpg')
const drawerImage = require('../assets/img/lana.jpg')

class SideBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    }
  }

  render() {

    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Thumbnail large style={styles.drawerImage} source={drawerImage} />
          <TouchableOpacity onPress={this.props.navigator1}>
          <SideMenuItem dynamicIcon="menu" dynamicTitle="Surat Masuk" navigator={this.props.navigator1} />
          </TouchableOpacity>
          <SideMenuItem dynamicIcon="menu" dynamicTitle="Surat Keluar" navigator={this.props.navigator2}/>
        </Content>
      </Container>
    );
  }
}

export default SideBar;