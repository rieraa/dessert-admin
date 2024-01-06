<template>
  <div class="main">
    <div class="card_list">
      <div v-for="i in product_total" :key="i" class="product_card">
        <div class="product_img" @click="handleClick(i)">
          <img
            style="cursor: pointer"
            src="https://p1-cdn-holiland.1900m.com/goods/detail_img_h/202308/11/2922a1691744243b1469.jpg?x-oss-process=image/resize,m_fill,limit_0,w_350,h_300"
            alt="" />
        </div>
        <div class="card_info">
          <div class="left">
            <div class="title">教师节蛋糕-桃李春风</div>
            <div class="price">
              <span class="base-price">¥ 239.00</span><b class="extra">起</b>
            </div>
          </div>
          <div class="right">
            <div class="button">
              <el-button @click="handleClick(i)" round>购买</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="bottomRef" class="more"></div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const curPage = ref(0);
const product_total = ref(10);

const bottomRef = ref(null);

const handleClick = (id) => {
  router.push(`${location.pathname}/${id}`);
};

const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      product_total.value += 15;
    }
  },
  {
    threshold: 0.5, // 阈值
  }
);

onMounted(() => {
  observer.observe(bottomRef.value);
});

onUnmounted(() => {
  observer.disconnect();
});
</script>

<style lang="scss" scoped>
.main {
  .card_list {
    display: flex;
    flex-wrap: wrap;
  }
  .more {
    width: 100%;
    height: 30px;
    margin-top: 30px;
  }
}

.product_card {
  width: 350px;
  height: 380px;
  box-sizing: border-box;
  margin-right: 14px;
  margin-bottom: 14px;
  border-radius: 25px;
  overflow: hidden;
  background-color: #eee8e6;
  .product_img {
    height: 300px;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .card_info {
    display: flex;
    padding: 7px 20px 11px;
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    height: 80px;
    justify-content: space-between;
    .left {
      max-width: 81%;
      cursor: pointer;
      .title {
        font-size: 16px;
        font-weight: 500;
        color: #333;
        line-height: 22px;
        vertical-align: top;
        white-space: nowrap;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
      }
      .price {
        font-size: 18px;
        font-weight: 500;
        color: #333;
        line-height: 25px;
        .base-price {
          word-break: normal;
        }
        .extra {
          font-size: 8px;
          font-weight: 400;
          color: #858585;
          line-height: 11px;
          margin-left: 4px;
        }
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      .button {
        text-align: right;
      }
    }
  }
}
.product_card:nth-child(3n) {
  margin-right: 0;
}
</style>
