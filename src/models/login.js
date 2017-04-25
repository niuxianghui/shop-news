import { login } from "../services/login"
import {routerRedux } from "dva/router"

export default {
  namespace: 'login',
  state: {},
  reducers: {},
  effects: {
    *userlogin({ payload,dispatch}, { call, put }) {
      const data = yield call(login, payload)
      if ( data.data.code === 200 ) {
        console.log(data.data.code)
        yield put (routerRedux.push("/home"))
      }
    },
  },
  subscriptions: {},
};
