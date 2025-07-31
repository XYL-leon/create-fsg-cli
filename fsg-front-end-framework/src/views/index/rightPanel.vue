<script setup>
import { useLayoutStore } from '@/store/layoutStore';

const layoutStore = useLayoutStore();

let showContainer = ref(true);

watch(
  () => layoutStore.rightPanelSwitchStatus,
  () => {
    if (layoutStore.rightPanelSwitchStatus) {
      showContainer.value = true;
    } else {
      const timer = setTimeout(() => {
        showContainer.value = false;
        clearTimeout(timer);
      }, 280);
    }
  }
);

const rightPanelSwitch = () => {
  layoutStore.setRightPanelStatus(false);
};
</script>
<template>
  <div class="fsg_right_panel" :class="{ hide: !layoutStore.rightPanelSwitchStatus }">
    <div class="fsg_right_panel_container" v-if="showContainer">
      <slot name="container"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use './rightPanel.scss';
</style>