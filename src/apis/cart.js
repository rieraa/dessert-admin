import http from '@/utils/http.js';
import { ElMessage } from 'element-plus';

const getCartList = async () => {
  try {
    const { data } = await http.get(`/cart/getCartList`);
    return data;
  } catch (error) {
    ElMessage.error(`获取购物车列表失败,${error}`);
    return Promise.reject(error);
  }
};

const updateCart = async params => {
  try {
    const { data } = await http.post(`/cart/addCart`, params);
    return data;
  } catch (error) {
    ElMessage.error(`更新失败,${error}`);
    return Promise.reject(error);
  }
};

const deleteCart = async cartId => {
  try {
    const { data } = await http.post(`/cart/deleteCart`, { cartId });
    return data;
  } catch (error) {
    ElMessage.error(`删除购物车失败,${error}`);
    return Promise.reject(error);
  }
};

export { deleteCart, updateCart, getCartList };
