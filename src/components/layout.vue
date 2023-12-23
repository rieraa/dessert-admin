<template>
  <div class="main-layout">
    <div class="header-home">
      <NavBar />
      <SplitText />
    </div>
    <RouterView />
  </div>
</template>
  
<script setup>
import NavBar from "./NavBar.vue";
import SplitText from "./SplitText.vue";
</script>
  
<style lang="scss" scoped>
.main-layout {
  width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header-home {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 6px;
}
</style>