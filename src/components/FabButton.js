import React, { Component } from 'react'
import { Container, Header, View, Button, Icon, Fab } from 'native-base'

export default class FabButton extends Component {
  constructor(props) {
      super(props)
    this.state = {
      active: 'true'
    }
  }
  render() {
    return (  
        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: 'green' }}
            position="bottomRight"
           >
            <Icon name="add" />
          </Fab>
        </View>
    )
  }
}