import * as types from '../action-types'

const initialState = {
  isLogin: false
}

export default function (state = initialState, action) {
  switch(action.type) {
    case types.LOGIN:
      fetch('http://demo4265533.mockable.io/api/login', {
        method: 'POST',
        headers: {
          'x-api-key': 'rewqdsaxz123',
          'content-type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((body) => {
        if (body.msg) {
          alert(body.msg)
          state.isLogin = true
        } else {
          alert('login gagal')
        }
      })
      .catch((error) => console.error(error))
      return state
    default :
      return state
  }
}