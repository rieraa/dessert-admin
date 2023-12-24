<template>
  <div class="main">
    <div class="split-text split-big">
      <span>HOLILAND *</span><span>HOLILAND *</span><span>HOLILAND *</span
      ><span>HOLILAND</span>
    </div>
    <div class="search">
      <div class="header-search">
        <div>
          <el-input
            size="large"
            v-model="input"
            :prefix-icon="Search"
            placeholder="查询商品"
          >
            <template #suffix>
              <el-button text> 搜索 </el-button>
            </template>
          </el-input>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue';
const input = ref('');
</script>
  
<style lang="scss" scoped>
.main {
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