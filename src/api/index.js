import axios from 'axios'

export default api = axios.create({
  baseURL: 'http://mobile.surat.uin-suka.ac.id:3000/api/',
  headers: {'token': '213uih21y38c21okj3x2183joid2j39c013coiuj3912y3hcv3h8y3h783hu1h2873c'}
})