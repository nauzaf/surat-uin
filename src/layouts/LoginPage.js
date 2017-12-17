import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../store/actions/login'
import { TextInput, Button, View, Image, StyleSheet, Text } from 'react-native'

class LoginPage extends Component {

  static navigationOptions = { header: null }

  constructor(props) {
    super(props)
    if (this.props.user.isLogin) {
      alert('Anda sudah login, tekan tombol login untuk masuk kembali')
    }
    this.state = {
      username: null,
      password: null
    }
  }

  login = () => {
    if (!this.props.user.isLogin) {
      this.props.dispatchLogin({ 
        user: this.state.username,
        password: this.state.password
      })
    }
    else {
      this.props.navigation.navigate('KotakMasuk')
    }
  }

  render () {

    const { navigate } = this.props.navigation

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
    user: state.login
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchLogin: (auth) => dispatch(login(auth))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)