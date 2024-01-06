<template>
  <div class="main">
    <div class="detail">
      <div class="img" data-v-2a07f562="">
        <img
          class="cover-img"
          src="https://p1-cdn-holiland.1900m.com/goods/cover_s/202308/11/2922a1691744698b6773.jpg?x-oss-process=image/resize,m_fill,limit_0,w_630,h_630" />
      </div>
      <div class="info">
        <div class="base-card info-item">
          <div class="base-card-inner">
            <div class="name">教师节蛋糕-桃李春风</div>
            <div class="price">
              <span class="base-price">¥ 239</span>
            </div>
          </div>
        </div>
        <div class="base-card info-item">
          <div class="title">口味选择</div>
          <el-radio-group v-model="radio1">
            <el-radio label="酸奶提子口味">酸奶提子口味</el-radio>
            <el-radio label="凤梨生椰口味">凤梨生椰口味</el-radio>
            <el-radio label="双莓慕斯鲜果口味">双莓慕斯鲜果口味</el-radio>
            <el-radio label="玫瑰慕斯+草莓口味">玫瑰慕斯+草莓口味 </el-radio>
          </el-radio-group>
          <div class="title">规格选择</div>
          <el-radio-group v-model="radio2">
            <el-radio label="Φ14cm*h7cm "
              >Φ14cm*h7cm
              <div class="extra">（建议2至4人食用）</div>
            </el-radio>
            <el-radio label="Φ14cm*h8cm "
              >Φ14cm*h8cm
              <div class="extra">（建议2至4人食用）</div>
            </el-radio>
          </el-radio-group>
        </div>
      </div>
    </div>

    <SplitText :noSearch="true" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SplitText from '@/components/SplitText.vue';

const radio1 = ref('1');
const radio2 = ref('2');
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  .detail {
    display: flex;
    height: 634px;
    align-items: stretch;
    .img {
      width: 630px;
      flex-shrink: 0;
      .cover-img {
        width: 100%;
        height: 630px;
        border-radius: 20px;
      }
    }
    .info {
      min-width: 438px;
      margin-left: 15px;
      .base-card {
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 20px;
        padding: 20px;
        overflow: hidden;
        .base-card-inner {
          display: flex;
          justify-content: space-between;
          .name {
            font-size: 21px;
            font-weight: 500;
            color: #333;
            line-height: 29px;
            letter-spacing: 1px;
          }
          .price {
            font-size: 21px;
            font-weight: 500;
            color: #cb986d;
            line-height: 29px;
            vertical-align: top;
            white-space: nowrap;
          }
        }
      }
      .info-item {
        margin-bottom: 15px;
        .title {
          font-size: 16px;
          font-weight: 500;
          color: #333;
          line-height: 22px;
          margin: 10px 0;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }
        .title:first-child {
          margin-top: 0;
        }
        .el-radio__label {
          display: flex;
        }
        .extra {
          font-size: 12px;
          font-weight: 400;
          color: #333;
          line-height: 17px;
        }
      }
    }
  }
}
</style>
