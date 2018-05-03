// import request from '../utils/request';
import fetch from 'dva/fetch';

function request(url, options) {

  return fetch(url, options)
    .then(res => {
      if (res.status >= 200 && res.status < 300) {
        return res;
      }else {
        throw new Error({status: false});
      }
    })
    .then(response => {
      return response.json();
    })
    .catch(e => {
      console.log(e.status);
    });
}

export function getMenu(param) {
  let array = [];
  let data = request('/menu/datas')
  .then(d => {
    console.log(d);
    d.map(item => {
      array.push(item);
    })
  });   // promirse
  return array;

}