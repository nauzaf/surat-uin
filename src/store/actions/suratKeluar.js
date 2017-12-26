import api from '../../api'
import * as types from '../action-types'

export function doGetSuratKeluar (nim) {
  return (dispatch) => {
    api.post('/surat_keluar/get_surat_personal', {
      api_kode: '90006',
      api_subkode: '1',
      api_search: [
        nim,
        '10'
      ]
    })
      .then(response => {
        if (response.data.status === 'ok') {
          let responData = response.data
          dispatch(getSuratKeluar(responData))
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

export function getSuratKeluar (suratKeluar) {
  return { type: types.GET_SURAT_KELUAR, suratKeluar }
}