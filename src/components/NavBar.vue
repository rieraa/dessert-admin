<template>
  <div class="home-head">
    <div class="logo">
      <router-link to="/" class="router-link-active" @click="handleNavClick('#')"
        ><img alt="Holiland Logo" lazy="loaded" :src="logo"
      /></router-link>
    </div>
    <div class="navigation">
      <div class="header-navigation">
        <div class="header-navigation-item">
          <router-link
            @click="handleNavClick('#')"
            to="/"
            class="router-link-active router-link-exact-active"
            aria-current="page"
            ><div class="text-label">
              <div class="en-title nav-menu">
                <div class="en-title-inner">
                  HOME
                  <div :class="{ showLine: isActive('#') }"></div>
                </div>
              </div>
              <div class="title">首页</div>
            </div></router-link
          >
        </div>
        <div class="header-navigation-item">
          <router-link to="/goods/list" class="" @click="handleNavClick('goods')"
            ><div class="text-label">
              <div class="en-title nav-menu">
                <div class="en-title-inner">
                  PRODUCTS
                  <div :class="{ showLine: isActive('goods') }"></div>
                </div>
              </div>
              <div class="title">全部产品</div>
            </div></router-link
          >
        </div>
        <div class="header-navigation-item">
          <router-link to="/cart" @click="handleNavClick('cart')"
            ><div class="text-label nav-cart">
              <div class="en-title nav-menu">
                <div class="en-title-inner">
                  CART
                  <div class="line" :class="{ showLine: isActive('cart') }"></div>
                </div>
              </div>
              <div class="title">购物车</div>
            </div></router-link
          >
        </div>
        <div v-if="!isLogin" class="header-navigation-item">
          <router-link to="/login" @click="handleNavClick('login')">
            <div class="text-label">
              <div class="en-title nav-menu">
                <div class="en-title-inner">
                  SIGN UP/IN
                  <div :class="{ showLine: isActive('login') }"></div>
                </div>
              </div>
              <div class="title" title="">登录/注册</div>
            </div>
          </router-link>
        </div>
        <div v-else class="header-navigation-item">
          <router-link to="/personal" @click="handleNavClick('personal')">
            <div class="text-label">
              <div class="en-title nav-menu">
                <div class="en-title-inner">
                  {{ userName }}
                  <div :class="{ showLine: isActive('personal') }"></div>
                </div>
              </div>
              <div class="title" title="">个人订单</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from '@/assets/logo.png';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const routePath = ref('#');
const route = useRoute();

const isLogin = localStorage.getItem('userName') !== void 0;
const userName = localStorage.getItem('userName');

function handleNavClick(url) {
  routePath.value = url;
}

function isActive(url) {
  return routePath.value === url;
}

watch(
  () => route.path,
  () => {
    const name = route.path.split('/')[1];
    if (name === '') {
      routePath.value = '#';
    } else routePath.value = name;
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.home-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 18px 7px 6px;
  .logo {
    flex: 1;
    margin-right: 20px;
    margin-bottom: 2px;
    max-width: 352px;
    a > img {
      width: 100%;
      display: block;
    }
  }
  .header-navigation {
    display: flex;
    box-sizing: border-box;
    &-item {
      position: relative;
      margin-left: 28px;
    }
    .text-label {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: inherit;
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 1px;
      word-break: normal;
      cursor: pointer;
      .en-title {
        font-family: Akz;
        font-weight: 400;
        line-height: 19px;
        display: flex;
        text-transform: uppercase;
      }
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}

.header-navigation-item:first-child {
  margin-left: 0;
}
.header-navigation-item .nav-cart .cart-icon {
  position: absolute;
  right: 0;
  margin-top: -3px;
}
.header-navigation-item .nav-cart .en-title-inner {
  margin-right: 0px;
}

.showLine {
  border: 0.5px solid #333;
}
</style>
