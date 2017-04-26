/**
 * Created by niuxianghui on 17/4/25.
 */
import request from '../utils/request2';

export function updateMerchant(id, values) {
  return request(`/api/merchant/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  })
}

export function updateGood(id, values) {
  return request(`/api/good/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  })
}


export function createGood(values) {
  return request(`/api/good`, {
    method: 'PUT',
    body: JSON.stringify(values),
  })
}


export function deleteGood(id) {
  return request(`/api/good/${id}`, {
    method: 'DELETE',
  })
}
