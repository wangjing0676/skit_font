import request from '@/utils/request'
import { getToken } from '@/utils/auth'

export function fetchList (query) {
  return request({
    url: '/shorts/discover',
    method: 'get',
    showLoading: false
  })
}

export function collectAdd (query) {
    return request({
      url: '/shorts/collect',
      method: 'post',
      data: query,
      showLoading: false
    })
  }
  export function collectList (query) {
    return request({
      url: '/shorts/collect',
      method: 'get',
      params: query,
      showLoading: false
    })
  }
