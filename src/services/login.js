/**
 * Created by niuxianghui on 17/4/23.
 */
import config from "../utils/config"

import request from "../utils/request"

const { api } = config

export async function login(params) {
  const option = {
    method: "POST",
    credentials: 'same-origin',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "name=" + params.username + "&&passwd=" + params.password
  }
  return request(api.login, option )
}

