import api from '../../api'
import * as types from '../action-types'

export function doGetSuratMasuk (nim) {
  return (dispatch) => {
    api.post('/surat_masuk/get_distribusi_personal', {
      api_kode: '1003',
      api_subkode: '2',
      api_search: [
        `'PS'`,
        nim,
        '10'
      ]
    })
      .then(response => {
        if (response.data.status === 'ok') {
          let responData = response.data
          dispatch(getSuratMasuk(responData))
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

export function getSuratMasuk (suratMasuk) {
  return { type: types.GET_SURAT_MASUK, suratMasuk }
}