import api from '../../api'
import * as types from '../action-types'

const initialState = {
  isLogin: false,
  userName: null,
  firstName: null,
  lastName: null,
  mailAddress: null
}

export default function (state = initialState, action) {
  switch(action.type) {
    case types.LOGIN:
      api.post('/login', {
        user: action.auth.user,
        password: action.auth.password
      })
        .then(response => {
          if (response.data.status === 'ok') {
            let responData = response.data
            if (responData.data === 1 || responData.data === 2 || responData.data === 3 || responData.data === 5 || responData.data === 6) {
              alert('Terjadi kesalahan pada sistem. Hubungi PTIPD UIN Sunan Kalijaga')
            }
            else if (responData.data === 4) {
              alert('User atau Password yang anda masukan salah')
            }
            else {
              state.isLogin = true
              state.userName = responData.data[0].NamaPengguna
              state.firstName = responData.data[0].NamaDepan
              state.lastName = responData.data[0].NamaBelakang
              state.mailAddress = responData.data[0].AlamatEmail
              alert('Assalamualaikum ' + responData.data[0].NamaDepan + ' tekan tombol login sekali lagi untuk masuk')
            }
          }
          else {
            alert('Terjadi kesalahan pada sistem. Hubungi PTIPD UIN Sunan Kalijaga')
          }
        })
        .catch(e => {
          alert('Mohon maaf terjadi kesalahan, silahkan cek koneksi anda')
        })
      return state
    default :
      return state
  }
}