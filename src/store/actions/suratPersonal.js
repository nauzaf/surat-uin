import api from '../../api'
import * as types from '../action-types'

export function doGetSuratPersonal (key) {
  return (dispatch) => {
    api.post('/surat_masuk/get_distribusi_personal', {
      api_kode: '1003',
      api_subkode: '2',
      api_search: [
        `'PS'`,
        key,
        '10'
      ]
    })
      .then(response => {
        if (response.data.status === 'ok') {
          let responData = response.data
          dispatch(getSuratPersonal(responData))
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

export function getSuratPersonal (suratPersonal) {
  return { type: types.GET_SURAT_PERSONAL, suratPersonal }
}