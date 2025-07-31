<script setup>
import { useLayoutStore } from '@/store/layoutStore';

const layoutStore = useLayoutStore();

const leftPanelSwitch = () => {
  layoutStore.setLeftPanelStatus(!layoutStore.leftPanelSwitchStatus);
};
const rightPanelSwitch = () => {
  layoutStore.setRightPanelStatus(!layoutStore.rightPanelSwitchStatus);
};
</script>
<template>
  <div class="header_panel">
    <!-- <el-button @click="leftPanelSwitch">{{
      layoutStore.leftPanelSwitchStatus ? '关闭左侧面板' : '打开左侧面板'
    }}</el-button>
    <el-button @click="rightPanelSwitch">{{
      layoutStore.rightPanelSwitchStatus ? '关闭右侧面板' : '打开右侧面板'
    }}</el-button> -->
    <div class="system_title"></div>
    <div class="header_menus">
      <div class="container_box"></div>
    </div>
    <div class="header_user_info"></div>
  </div>
</template>
<style lang="scss" scoped>
@use './headerPanel.scss';
</style>