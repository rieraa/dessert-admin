import http from '@/utils/http.js';
import { ElMessage } from 'element-plus';

const getDeliveryAddress = async () => {
  try {
    const { data } = await http.get(`/deliveryAddress/getDeliveryAddress`);
    return data;
  } catch (error) {
    ElMessage.error(`获取地址失败`);
    return Promise.reject(error);
  }
};

const addAddress = async params => {
  try {
    const { data } = await http.post(`/deliveryAddress/addAddress`, params);
    return data;
  } catch (error) {
    ElMessage.error(`新增地址失败,${error}`);
    return Promise.reject(error);
  }
};

const updateDeliveryAddress = async params => {
  try {
    const { data } = await http.post(`/deliveryAddress/updateDeliveryAddress`, params);
    return data;
  } catch (error) {
    ElMessage.error(`更新地址失败,${error}`);
    return Promise.reject(error);
  }
};

const deleteByDeliveryAddressId = async daId => {
  try {
    const { data } = await http.post(`/deliveryAddress/deleteByDeliveryAddressId`, { daId });
    return data;
  } catch (error) {
    ElMessage.error(`删除地址失败,${error}`);
    return Promise.reject(error);
  }
};

export { getDeliveryAddress, addAddress, updateDeliveryAddress, deleteByDeliveryAddressId };
