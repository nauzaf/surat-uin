import * as types from '../action-types'

export function login(auth) {
  return { type: types.LOGIN, auth }
}