import React, { Component } from 'react'
import { connect } from 'react-redux'
import { doLogin } from '../store/actions/user'
import { TextInput, Button, View, Image, StyleSheet, Text } from 'react-native'

class LoginPage extends Component {

  static navigationOptions = { header: null }

  constructor(props) {
    super(props)
    if (props.user.isLogin) {
      this.props.navigation.navigate('KotakMasuk')
    }
    this.state = {
      username: null,
      password: null
    }
  }

  login = () => {
    if (!this.props.user.isLogin) {
      this.props.dispatchDoLogin(this.state.username, this.state.password)
    }
  }

  render () {

    return (
      <View style={styles.Container}>
        <Text style={{alignItems: 'center', alignSelf: 'center', fontSize: 20, marginBottom:10}}>SISTIM SURAT UIN SUKA</Text>
        <Image
          style={{marginBottom: 40, alignSelf: 'center'}}
          source={require('../assets/img/logouin.png')}
        />
        <TextInput
          style={styles.TextInput}
          placeholder='Username' 
          onChangeText={(username) => this.setState({username})} 
          value={this.state.username}
          underlineColorAndroid='transparent'
        />
        <TextInput
          style={styles.TextInput}
          placeholder='Password'
          onChangeText={(password) => this.setState({password})} 
          value={this.state.password}
          secureTextEntry={true}
          underlineColorAndroid='transparent'
        />        
        <Button
          style={{marginTop: 20}}
          onPress= { this.login }
          title="Login"
          color='green'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center', 
    padding: 50
  },
  TextInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 20
  }
})

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchDoLogin: (username, pass) => dispatch(doLogin(username, pass))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)