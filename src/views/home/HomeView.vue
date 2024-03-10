<template>
  <div class="home-main">
    <el-carousel height="520px">
      <el-carousel-item v-for="item in imgUrl" :key="item">
        <img @click="onClick" :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
    <div class="brand-intro">
      <div style="font-size: 26px; padding-bottom: 5px">
        Selling is recommended
      </div>
      <div>——热卖推荐——</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import img1 from "@/assets/carousel/1.jpg";
import img2 from "@/assets/carousel/2.jpg";
import img3 from "@/assets/carousel/3.jpg";

const router = useRouter();

const onClick = ()=>{
  router.push('/goods/list')
}

const imgUrl = [img1, img2, img3];
</script>

<style lang="scss" scoped>
.home-main {
  width: 100%;
  border-radius: 3%;
  overflow: hidden;
}
.brand-intro {
  margin: 15px 0px;
  text-align: center;
}

.el-carousel__item {
  border-radius: 3%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 3%;
  }
}
</style>