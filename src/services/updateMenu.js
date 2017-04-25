/**
 * Created by niuxianghui on 17/4/23.
 */
import config from "../utils/config"

import request from "../utils/request"

const { api } = config

export async function updateMenu(param) {
  return request(api.updateMenu + param, {
    method: "GET",
    credentials: 'same-origin',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
  })
}
