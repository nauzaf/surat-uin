import * as types from '../action-types'

export function getSuratMasuk(nim) {
  return { type: types.GET_SURAT_MASUK, nim }
}