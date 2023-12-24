<template>
  <div class="home-head">
    <div class="logo">
      <router-link
        to="/"
        class="router-link-active"
        @click="handleNavClick('#')"
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
          <router-link to="/goods/0" class="" @click="handleNavClick('goods')"
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
                  <div
                    class="line"
                    :class="{ showLine: isActive('cart') }"
                  ></div>
                </div>
                <span class="cart-icon"
                  ><div class="el-badge cart-badge no-num">
                    <img
                      class="base-icon"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABGBJREFUWEfNl39oW1UUx7/nvjQLNtApOAUdQsBfDLXk3fe6xnYEJ46KIA5aHYj4x2RSUNQ/hjKYdUwFh38ozinqH0OQaZ2/f0xnMbq2IXn3Rqg/66TqBP9YwQ0bapv2vSM3JBLbJk3XZNuBB493c+755Nzz4x7CeSZ0nvGAOjs7LyoUCs8T0QwzjwH4XGv907kCJdd1u33f/7oMQEQ+gAORSGT38PDwqbMNVjwyx3Hamdlm5o0A7gEQBqABbNJaT59NqEUx1NHRceX8/Pz7AK4FMKi17junQCWPxYIg+BbABQC+BzDTRKg/ALyqtf7Y2KiaZfF4/BMi6mkiyP+2FkLc6XneW7WA7iai1wHMhUKhzmaB+b7fx8w7iUgppZyqQO3t7Wsty/rLgOTz+bbx8fGpZkAlEokrZmdnfwPwp9b6spqFMR6PzxJRuOzOZgC5rnub7/sfEtGQUurmmkC2bZ8AsJ6IXlZK3d8MIMdxdgdB8AQR7VNK7VzOQ18Q0WYAGa21qVENFynle8x8OxFtU0odWs5DTwN4FMCk1npdw2kASClPMPN6y7KuzmazP9cEcl33Jt/3h0w7UUqFGg3U3d198fT09EkimvI8r42IuCZQb2+vNTExMWfqlWVZsWw2+2sjoWzbvgXAZwCOaa031SyMZcO2bZt0jzLzA7lc7oVGAjmO81gQBE8BeE5r/VC9QOMArmLmN3O53F2NBJJSZpnZsSxrazabfbdeoHcA3MHMP+RyuQ2NALJtu4WI9poKDeAkgMu11iY0qveyiiN7BMCzpoUQ0dEGALUAuI6ZLyWieQC3KqX+23fZK6xt29cA+LEBIAu3GBNCPOh53leVC8sCmR9LKb9j5g1E9CSA0VXCzTHzuNbadIFFUi/QDmZ+CcDxcDi8MZ1OF5tuM6QuoJ6enjWTk5NfMnMnEXmWZW3PZDJmIGi41AVkrCYSiXWFQiHNzLHSIHCsNKWcLmYHEQMwT/E9CILie+W3BeunwuHwwXQ6/c+KY6iskEwmo1NTU7sAmMwzg8BqpU9rPXjGQGXFrq6uC2dmZm5g5uuFEGuLbuBiGyp6vPJdCLHom1knotPRaPTFVCqVXxWQ4zh9QRDsIKI1AA55nre/dFxVveW67hbf9x8G0CaE+KC1tXVfKpUyNejMsqysJaXcxsxvVO4ihHjc87w91Wgcx9kcBIEpfJXxekBr3d8IoGFmvhHAHiL6nZlfM6Vfa31JNSAp5WFm3kpE+4UQQ77vvw3Aj8Vi0cHBwcJCvbqzzChKKb9h5nbTDH3f/wXAWOVdZiko27aPANgCoF8I8VEQBMdNQkQikbaRkZFFg8NKgXYx896S4QCAAHBQa31vNQ/Ztr0dwCulcuAzs0VER5RSS858KwJKJpOhfD7/DABjpIWZD4dCof5MJvN3rfwvXeRNULcS0afhcPi+0dFR0+VXF9Rl7YGBAZFKpcyzZKYsZcikupQyVL5mVPsDK/LQaqtgPfrnHdC/uSTaNHw3VJMAAAAASUVORK5CYII="
                      alt="pc-cart"
                      data-v-9855e34c=""
                      style="width: 21px; height: 21px"
                    /><sup
                      class="el-badge__content el-badge__content--danger is-fixed"
                      >0</sup
                    >
                  </div></span
                >
              </div>
              <div class="title">购物车</div>
            </div></router-link
          >
        </div>
        <div class="header-navigation-item">
          <div class="text-label">
            <div class="en-title nav-menu">
              <div class="en-title-inner">
                SIGN UP/IN
                <div class="line"></div>
              </div>
            </div>
            <div class="title" title="">登录/注册</div>
          </div>
        </div>
        <div class="header-navigation-item">
          <router-link to="personal" @click="handleNavClick('personal')"
            ><div class="text-label">
              <div class="en-title nav-menu">
                <div class="en-title-inner">
                  MORE
                  <div :class="{ showLine: isActive('personal') }"></div>
                </div>
              </div>
              <div class="title" title="">个人中心</div>
            </div></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import logo from "@/assets/logo.png";
import { ref } from "vue";

const routePath = ref('#');

function handleNavClick(url) {
  routePath.value = url;
}

function isActive(url) {
  return routePath.value === url;
}

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
  margin-right: 22px;
}

.showLine {
  border: 0.5px solid #333;
}
</style>