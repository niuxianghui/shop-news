import { updateMenu } from '../services/updateMenu'

export default {
  namespace: 'home',
  state: {
    hello: 'world',
    life: [],
    eat: [],
    play:[],
  },
  reducers: {
    updateMenu(state, { payload: data }) {
      console.log(data)
      return {
        ...state,
        eat: data.data,
      }
    },
    updateMenu2(state, { payload: data }) {
      console.log(data)
      return {
        ...state,
        life: data.data,
      }
    },
    updateMenu3(state, { payload: data }) {
      console.log(data)
      return {
        ...state,
        play: data.data,
      }
    }
  },
  effects: {
    *updateMenuEf({ payload, }, { call, put }) {
      let data = yield call(updateMenu, 'eat')
      yield put({ type: 'updateMenu', payload: data})
      data = yield call(updateMenu, 'life')
      yield put({ type: 'updateMenu2', payload: data})
      data = yield call(updateMenu, 'play')
      yield put({ type: 'updateMenu3', payload: data})
      console.log(data)
    },
  },
  subscriptions: {
    setup({dispatch}) {
      dispatch({ type: "updateMenuEf"})
    }
  },

};
