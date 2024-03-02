<template>
  <main style="width: 100%">
    <el-table v-loading="isLoading" :data="tableData" style="width: 100%">
      <el-table-column prop="orderId" label="Id" />
      <el-table-column prop="orderDate" label="订单时间" />
      <el-table-column prop="orderTotal" label="订单价格" />
      <el-table-column prop="remarks" label="订单备注" />
    </el-table>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getOrderList } from '@/apis/order.js';

const isLoading = ref(false);
const tableData = ref([]);

onMounted(async () => {
  isLoading.value = true;
  const res = await getOrderList();
  tableData.value = res;
  isLoading.value = false;
});
</script>

<style lang="scss" scoped></style>
