import http from '@/utils/http.js';
import { ElMessage } from 'element-plus';

const addOrder = async params => {
  try {
    const { data } = await http.post(`/orders/addOrder`, params);
    return data;
  } catch (error) {
    ElMessage.error(`新增订单失败,${error}`);
    return Promise.reject(error);
  }
};

const getOrderList = async () => {
  try {
    const { data } = await http.get(`/orders/getOrderList`);
    return data;
  } catch (error) {
    ElMessage.error(`获取订单失败,${error}`);
    return Promise.reject(error);
  }
};

export { addOrder, getOrderList };
