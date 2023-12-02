import request from '@/utils/request'

export function logUp (data) {
  return request({
    url: '/reader/register/email',
    method: 'get',
    params: data
  })
}

export function Reader (data) {
  return request({
    url: '/reader/oauth/url',
    method: 'get',
    params: data
  })
}
export function login (data) {
  return request({
    url: '/reader/login/email',
    method: 'get',
    params: data
  })
}
export function getInfo (token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout () {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
