import { updateDetail } from '../services/updateDetail'
import { updateMerchant, updateGood, createGood, deleteGood } from '../services/MerchantDetail'


export default {
  namespace: 'detail',
  state: {
    merchant: {
      "id": 1,
      "introduction": "店铺名称",
      "address": "merchant_address",
      "userName": "merchant",
      "phoneNumber": "123456",
      "passWd": "test",
      "category": "life"
    },
    good: [
      {
        "id": 1,
        "price": 12,
        "introduction": "白菜便宜了",
        "name": "白菜",
        "merchantId": 1,
        "key": "1"
      }
    ]
  },
  reducers: {
    updateMerchant(state, payload) {
      return{
        ...state,
        merchant: payload.data,
      }
    },
    updateGood(state, payload) {
      return{
        ...state,
        good: payload.data,
      }
    }
  },
  effects: {
    *update({ payload, }, { call, put }) {
      let data = yield call(updateDetail, {
        type: "Merchant",
        id: payload,
      })
      yield put({ type: 'updateMerchant', data: data.data})
      const id = data.data.id;
      data = yield call(updateDetail, {
        type: "good",
        id: id,
      })
      yield put({ type: "updateGood", data: data.data})
      console.log("data:")
      console.log(data)
    },
    *patch({ payload: { id, values }}, { call, put, select }) {
      const data = yield call(updateMerchant, id, values)
      console.log("data:  ")
      console.log(data)
      yield put({ type: "update", payload: data.data.id})
    },
    *patchGood({ payload: { id, values }}, { call, put, select}) {
      console.log("hello")
      const data = yield call(updateGood, id, values);
      console.log(data)
      yield put({ type: 'update', payload: data.data.id});
    },
    *createGood({ payload: { values }}, { call, put, select}) {
      const merchantId = yield select(state => state.detail.merchant.id)
      values.merchantId = merchantId
      const data = yield call(createGood, values)
      yield put({ type: "update", payload: merchantId})
    },
    *deleteGood({ payload: {id}}, { call, put, select}) {
      const merchantId = yield select(state => state.detail.merchant.id)
      const data = yield call(deleteGood, id)
      yield put({ type: "update", payload: merchantId})
    },

  },
  subscriptions: {},
};
