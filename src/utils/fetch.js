import store from '../index';
import axios from 'axios';
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

  axios.get(url).then(checkStatus).then(parseText)
  .then(res => {
    console.log(res.data);
    console.log(res.status);
    console.log(res.statusText);
    console.log(res.headers);
    console.log(res.config);
  });

}



