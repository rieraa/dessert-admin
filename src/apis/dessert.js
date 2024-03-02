import http from '@/utils/http.js';
import { ElMessage } from 'element-plus'

const getAllDessert = async (page = 1) => {
  try {
    const { data } = await http.get(`/dessert/getAllDessert?page=${page}`);
    return data;
  } catch (error) {
    ElMessage.error(`获取甜品失败,${error}`);
    return Promise.reject(error);
  }
};

const getDessertById = async (id = 1) => {
    try {
      const { data } = await http.get(`/dessert/getDessertById?id=${id}`);
      return data;
    } catch (error) {
      ElMessage.error(`获取甜品失败,${error}`);
      return Promise.reject(error);
    }
};




export { getAllDessert, getDessertById };
