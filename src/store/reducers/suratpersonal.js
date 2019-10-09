import * as types from '../action-types'

const initialState = {
  isLoad: false,
  totalSurat: 0,
  data: []
}

export default function (state = initialState, action) {
  switch(action.type) {
    case types.GET_SURAT_PERSONAL:
      state.totalSurat = action.suratPersonal.data.length
      state.data = action.suratPersonal.data
      state.isLoad = true
      return state
    default :
      return state
  }
}