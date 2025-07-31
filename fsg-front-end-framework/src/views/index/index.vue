<script setup>
import HeaderPanel from './headerPanel.vue';
import LeftPanel from './leftPanel.vue';
import RightPanel from './rightPanel.vue';
import Map from './map/map.vue';

// right
import Stations from "./components/stations/stations.vue"
import MapMenus from './components/mapMenus/mapMenus.vue';

// left
import MeteoFactorStati from './components/meteoFactorSta/meteoFactorStati.vue';

import { useLayoutStore } from '../../store/layoutStore';

const layoutStore = useLayoutStore();
</script>
<template>
  <div class="fsg_main_page" :class="[layoutStore.layoutPanelStatus]">
    <HeaderPanel />
    <LeftPanel>
      <template #container>
        <MeteoFactorStati />
      </template>
    </LeftPanel>
    <RightPanel>
      <template #container>
        <Stations />
      </template>
    </RightPanel>
    <Map />
    <MapMenus />
  </div>
</template>
<style lang="scss" scoped>
@use './index.scss';
</style>