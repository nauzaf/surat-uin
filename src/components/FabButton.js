import React, { Component } from 'react'
import { View, Icon, Fab } from 'native-base'

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
            direction='up'
            style={{ backgroundColor: 'green' }}
            position='bottomRight'
            onPress={ this.props.navigator }
           >
            <Icon name='add' />
          </Fab>
        </View>
    )
  }
}