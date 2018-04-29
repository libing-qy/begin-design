import request from '../utils/request';

export async function queryConfig(param) {
  let options = {
      
  }
  return request('/getConfig/1',options);
}
