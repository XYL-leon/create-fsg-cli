<script setup>
import { useLayoutStore } from '@/store/layoutStore';
import { menus } from './menus';

let MapMenus = menus;

const layoutStore = useLayoutStore();

let activeMenuIndex = ref(1);

const onClickMenu = index => {
  if (MapMenus[index].value === 'weather') {
    activeMenuIndex.value = index;
    layoutStore.setRightPanelStatus(!layoutStore.rightPanelSwitchStatus);
  }
};
</script>
<template>
  <ul
    class="map_menus_wrapper"
    :class="{
      close_right_panel: !layoutStore.rightPanelSwitchStatus,
    }"
  >
    <li
      class="map_menus_item"
      :class="{
        active: activeMenuIndex === index,
      }"
      v-for="(item, index) in MapMenus"
      :key="item.value"
      @click="onClickMenu(index)"
    >
      <svg-icon class="map_menus_item_icon" :icon-class="item.icon"></svg-icon>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
@use './mapMenus.scss';
</style>