import request from '../utils/request2';
import { PAGE_SIZE } from '../constants';

export function fetch({ page }) {
  // return request(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`);
  return request(`/java/api/getUserList?_page=${page}&_limit=${PAGE_SIZE}`)
}

export function remove(id) {
  return request(`java/api/users/${id}`, {
    method: 'DELETE',
  });
}

export function patch(id, values) {
  return request(`java/api/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}

export function create(values) {
  return request('java/api/users', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}
