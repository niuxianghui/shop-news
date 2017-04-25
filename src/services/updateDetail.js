/**
 * Created by niuxianghui on 17/4/24.
 */
import config from "../utils/config"

import request from "../utils/request"

const { api } = config

export async function updateDetail(params) {
  let url;
  if (params.type === 'Merchant') {
    url = api.updateMerchant + params.id;
  }else if (params.type === 'good') {
    url = api.updateGood + params.id;
  }
  return request(url, {
    method: "GET",
    credentials: 'same-origin',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
  })
}
