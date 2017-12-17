import * as types from '../action-types'

export function getSuratKeluar(nim) {
  return { type: types.GET_SURAT_KELUAR, nim }
}