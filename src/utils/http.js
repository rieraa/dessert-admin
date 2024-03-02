import axios from 'axios';
import { getToken } from '@/utils/auth';
import { ElMessage } from 'element-plus';

const service = axios.create({
  baseURL: 'http://localhost:9898/api', // url = base url + request url
  timeout: 15000, // request timeout
});

service.interceptors.request.use(
  config => {
    config.headers['Authorization'] = getToken();
    return config;
  },
  error => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code !== 2000) {
      if (res.code === 3001) {
        ElMessage.error('未登录，请先登录');
        location.replace('/login');
        return Promise.resolve('');
      }
      console.log('接口信息报错', res.msg);
      return Promise.reject(new Error(res.msg || 'Error'));
    } else {
      return res;
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
