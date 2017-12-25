import { combineReducers } from 'redux'
import user from './user'
import suratMasuk from './surat_masuk'
import suratKeluar from './surat_keluar'
import nav from './navigator'

export default combineReducers({
  user,
  suratMasuk,
  suratKeluar,
  nav
})