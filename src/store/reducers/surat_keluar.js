import api from '../../api'
import * as types from '../action-types'

const initialState = {
  isLoad: false,
  totalSurat: 0,
  data: []
}

export default function (state = initialState, action) {
  switch(action.type) {
    case types.GET_SURAT_KELUAR:
      api.post('/surat_keluar/get_surat_personal', {
        api_kode: '90006',
        api_subkode: '1',
        api_search: [
          action.nim,
          '10'
        ]
      })
        .then(response => {
          if (response.data.status === 'ok') {
            let responData = response.data
            state.totalSurat = responData.data.length
            state.data = responData.data
            state.isLoad = true
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