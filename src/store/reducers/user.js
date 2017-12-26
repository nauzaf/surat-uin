import * as types from '../action-types'

const initialState = {
  isLogin: false,
  userName: null,
  firstName: null,
  lastName: null,
  mailAddress: null,
  jabatan: []
}

export default function (state = initialState, action) {
  switch(action.type) {
    case types.LOGIN:
      state.isLogin = true
      state.userName = action.dataUser.NamaPengguna
      state.firstName = action.dataUser.NamaDepan
      state.lastName = action.dataUser.NamaBelakang
      state.mailAddress = action.dataUser.AlamatEmail
      state.jabatan = action.dataUser.AnggotaDari
      return state
    default :
      return state
  }
}