<template>
  <div class="main">
    <div class="card_list">
      <div v-for="item in list" :key="item.dessertId" class="product_card">
        <div class="product_img" @click="handleClick(item.dessertId)">
          <img
            style="cursor: pointer"
            :src="item.dessertImg"
            alt="" />
        </div>
        <div class="card_info">
          <div class="left">
            <div class="title">{{ item.dessertName }}</div>
            <div class="price">
              <span class="base-price">¥ {{ item.dessertPrice }}</span><b class="extra">起</b>
            </div>
          </div>
          <div class="right">
            <div class="button">
              <el-button @click="handleClick(item.dessertId)" round>购买</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-loading="isLoading" ref="bottomRef" class="more">{{ text }}</div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { getAllDessert } from "@/apis/dessert.js";

const router = useRouter();
const curPage = ref(1);
const hasMore = ref(true);
const isLoading = ref(false);
const list = ref([])

const bottomRef = ref(null);

const text = computed(()=>{
  return hasMore.value ? '' : '没有更多啦'
})

const handleClick = (id) => {
  router.push(`${location.pathname}/${id}`);
};

const observer = new IntersectionObserver(
  async (entries) => {
    if (entries[0].isIntersecting) {
      if(hasMore.value){
        curPage.value = curPage.value + 1
        isLoading.value = true;
        const res = await getAllDessert(curPage.value)
        isLoading.value = false;
        hasMore.value = res.hasMore;
        list.value.push(...res.desserts)
        console.log(res);
      }
    }
  },
  {
    threshold: 0.5, // 阈值
  }
);

onMounted(async () => {
  observer.observe(bottomRef.value);
  isLoading.value = true;
  const res = await getAllDessert(curPage.value)
  isLoading.value = false;
  list.value = res.desserts;
  hasMore.value = res.hasMore;
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
    text-align: center;
    width: 100%;
    height: 30px;
    margin-top: 30px;
    color: #858585;
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
