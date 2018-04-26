import store from '../index';
import fetch from 'dva/fetch';
// const fetch = require('node-fetch');
import { routerRedux } from 'dva/router';
function parseText(response) {
  console.log(`parseText : `);
  return response.text();
}
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    console.log(`response success`);
    return response;
  }
  console.log(`响应异常了`);
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @param  {boolean} rap       是否是rap请求 true是 false 否
 * @return {object}           An object containing either "data" or "err"
 */
 export default function request(url, options) {
    console.log(`fetch.request`+ url);
    return fetch(url, options)
    .then(checkStatus)
    .then(parseText)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      const { dispatch } = store;
      const status = err.name;
      console.log(`status:  ` + status);
      dispatch(routerRedux.push('/exception/403'));
     });
  }