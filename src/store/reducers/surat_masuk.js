import api from '../../api'
import * as types from '../action-types'

const initialState = {
  isLoad: false,
  totalSurat: 0,
  data: []
}

export default function (state = initialState, action) {
  switch(action.type) {
    case types.GET_SURAT_MASUK:
      api.post('/surat_masuk/get_distribusi_personal', {
        api_kode: '1003',
        api_subkode: '2',
        api_search: [
          `'PS','TS'`,
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