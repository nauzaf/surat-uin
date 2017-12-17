import React, { Component } from "react"
import {
    Text,
    ListItem,
    Icon,
    Left
} from "native-base"

  export default class SideMenuItem extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <ListItem onPress={this.props.navigator}>
                <Left>
                    <Icon name={this.props.dynamicIcon} />
                    <Text>{this.props.dynamicTitle}</Text>
                </Left>
            </ListItem>
        )
    }
  }