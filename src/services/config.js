import request from '../utils/fetch';

export async function queryConfig(param) {
  console.log(`service.queryConfig: `+ param.key +` & `+ param.sId);
  let options = {

  }
  return request('/config/getConfigs',options);
}