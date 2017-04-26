import { login, adminLogin, merchantLogin } from "../services/login"
import {routerRedux } from "dva/router"

export default {
  namespace: 'login',
  state: {

  },
  reducers: {
  },
  effects: {
    *userlogin({ payload,dispatch}, { call, put }) {
      const data = yield call(login, payload)
      if ( data.data.code === 200 ) {
        console.log(data.data.code)
        yield put (routerRedux.push("/home"))
      }
    },
    *adminlogin({ payload,dispatch}, { call, put }) {
      const data = yield call(adminLogin, payload)
      if ( data.data.code === 200 ) {
        console.log(data.data.code)
        yield put (routerRedux.push("/users"))
      }
    },
    *merchantlogin({ payload,dispatch}, { call, put }) {
      const data = yield call(merchantLogin, payload)
      if ( data.data.code === 200 ) {
        console.log(data.data.code)
        console.log(data.data.id)
        yield put( { type: "detail/update", payload: data.data.id})
        yield put (routerRedux.push("/merchant"))
      }
    },
  },
  subscriptions: {},
};
