import request from '@/utils/request'

export function getList (query) {
  return request({
    url: '/user/list',
    method: 'get',
    params: query
  })
}

export function createItem (data) {
  return request({
    url: '/user/create',
    method: 'post',
    data
  })
}

export function updateItem (data) {
  return request({
    url: '/user/update',
    method: 'post',
    data
  })
}

export function deleteItem (query) {
  return request({
    url: '/user/delete',
    method: 'get',
    params: query
  })
}