import request from '../utils/fetch';

export async function queryConfig(param) {
  let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
  }
  return request('/getConfig/1',options);
}