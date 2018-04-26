import { routerRedux } from 'dva/router';
import { message } from 'antd';
import { fakeSubmitForm } from '../services/api';
import { queryConfig} from '../services/config';

export default {
  namespace: 'form',

  state: {
    step: {
      payAccount: 'ant-design@alipay.com',
      receiverAccount: 'test@example.com',
      receiverName: 'Alex',
      amount: '500',
    },
    configs:[],
  },

  effects: {
    *submitRegularForm({ payload }, { call }) {
      yield call(fakeSubmitForm, payload);
      message.success('提交成功');
    },
    *submitStepForm({ payload }, { call, put }) {
      yield call(fakeSubmitForm, payload);
      yield put({
        type: 'saveStepFormData',
        payload,
      });
      yield put(routerRedux.push('/form/step-form/result'));
    },
    *submitAdvancedForm({ payload }, { call }) {
      yield call(fakeSubmitForm, payload);
      message.success('提交成功');
    },

    *submitConfigForm222({payload}, {call, put}) {
      yield call(queryConfig, payload);
      yield console.log(payload);
      yield put({
        type: 'getConfigFormData',
        payload,
      });
    },

    *submitConfigForm({payload}, {call, put}) {
      const result = yield call(queryConfig, payload);
      yield put({
          type: 'getConfigFormData',
          payload: result
      });
      // yield put(routerRedux.push('/config/select'));
    }
  },

  reducers: {
    saveStepFormData(state, { payload }) {
      return {
        ...state,
        step: {
          ...state.step,
          ...payload,
        },
      };
    },
    getConfigFormData(state, {payload}) {

      return {
          ...state,
          configs: payload
      }
    }
  },
};
