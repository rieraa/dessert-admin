<template>
  <div class="main">
    <div class="split-text split-big">
      <span v-for="i in textNum" :key="i">ZHAOYUXIN *</span>
      <span>ZHAOYUXIN</span>
    </div>
    <div v-if="!noSearch" class="search">
      <div class="header-search">
        <div>
          <el-input size="large" v-model="input" :prefix-icon="Search" placeholder="查询商品">
            <template #suffix>
              <el-button @click="onSearch" text> 搜索 </el-button>
            </template>
          </el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Search } from '@element-plus/icons-vue';
const props = defineProps({
  noSearch: {
    type: Boolean,
    required: false,
    default: false,
  },
});
const router = useRouter();
const input = ref('');
const textNum = props.noSearch ? 4 : 3;

const onSearch = () => {
  router.replace(`/goods/list?keyWords=${input.value}`);
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .split-text {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    margin: 14px 5px;
    border-top: 1px solid #333333;
    border-bottom: 1px solid #333333;
    font-size: 24px;
    font-family: Akz;
    font-weight: 400;
    color: #333;
    line-height: 28px;
    letter-spacing: 1px;
    .split-big {
      flex: 1;
      margin-right: 8px;
    }
  }
  .header-search {
    width: 300px;
  }
}
</style>
