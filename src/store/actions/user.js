import api from '../../api'
import * as types from '../action-types'

export function doLogin (username, pass) {
  return (dispatch) => {
    api.post('/login', {
      user: username,
      password: pass
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
            dispatch(login(responData.data[0]))
            dispatch(goToKotakMasuk())
          }
        }
        else {
          alert('Terjadi kesalahan pada sistem. Hubungi PTIPD UIN Sunan Kalijaga')
        }
      })
      .catch(e => {
        alert('Mohon maaf terjadi kesalahan, silahkan cek koneksi anda')
      })
  }
}

export function login (dataUser) {
  return { type: types.LOGIN, dataUser }
}

export function goToKotakMasuk () {
  return { type: types.NAV_KOTAK_MASUK }
}