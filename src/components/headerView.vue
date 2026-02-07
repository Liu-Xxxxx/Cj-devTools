<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    router="routers"
  >
    <el-menu-item index="/">
      <div class="header-logo">
        <Odometer style="width: 1.5em; height: 1.5em; margin-right: 8px" />
        <span>CJ - 调试工具</span>
      </div>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>连接方式: {{ selectOption }}</template>
      <el-menu-item v-for="option in connectOption" :key="option" @click="selectOption = option">{{
        option
      }}</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="2">
      <template #title>波特率: {{ selectedBaudRate }}</template>
      <el-menu-item v-for="rate in serialBaudRates" :key="rate" @click="selectedBaudRate = rate">{{
        rate
      }}</el-menu-item>
    </el-sub-menu>

    <el-menu-item @click="handleConnect(!connectStatus)">{{
      connectStatus ? '断开' : '连接'
    }}</el-menu-item>

    <el-menu-item>状态: {{ connectStatus ? '已连接' : '未连接' }}</el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'

const connectStatus = ref(false)
const selectOption = ref('串口')
const selectedBaudRate = ref(9600)
const connectOption = ['串口', '蓝牙', '网络']
const serialBaudRates = [9600, 14400, 19200, 38400, 57600, 115200, 128000, 256000]

const handleConnect = (state) => {
  connectStatus.value = state
}
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
/* 放大图标和文字 */
.header-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px; /* 放大文字 */
  color: var(--el-color-primary);
}
</style>
