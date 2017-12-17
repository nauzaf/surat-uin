import { combineReducers } from 'redux'
import login from './login'
import suratMasuk from './surat_masuk'
import suratKeluar from './surat_keluar'

export default combineReducers({
  login,
  suratMasuk,
  suratKeluar
})