<template>
  <header-view></header-view>
  <div class="main-container">
    <SideBar></SideBar>
    <div style="width: 100%; padding: 16px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import HeaderView from './components/headerView.vue'
import SideBar from './components/sideBar.vue'
</script>

<style scoped>
/* 防止菜单和交互元素被意外选中 */
.el-menu,
.el-button {
  user-select: none;
}

.main-container {
  height: 100vh;
  display: flex;
}
</style>
