<script setup>
import { useLayoutStore } from '@/store/layoutStore';

const layoutStore = useLayoutStore();

let showContainer = ref(true);

watch(
  () => layoutStore.leftPanelSwitchStatus,
  () => {
    if (layoutStore.leftPanelSwitchStatus) {
      showContainer.value = true;
    } else {
      const timer = setTimeout(() => {
        showContainer.value = false;
        clearTimeout(timer);
      }, 280);
    }
  }
);

const leftPanelSwitch = () => {
  layoutStore.setLeftPanelStatus(false);
};
</script>
<template>
  <div class="left_panel" :class="{ hide: !layoutStore.leftPanelSwitchStatus }">
    <div class="left_panel_container" v-if="showContainer">
      <slot name="container"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use './leftPanel.scss';
</style>