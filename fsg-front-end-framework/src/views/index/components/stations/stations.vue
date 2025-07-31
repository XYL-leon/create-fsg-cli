<script setup>
import { useLayoutStore } from '@/store/layoutStore';
import { getStationsByCode } from '@/api/meteo/stations.js';

const layoutStore = useLayoutStore();

getStationsByCode({
  id: '1000017',
  stationType: 'country,area',
  startTime: '',
  endTime: '202507140844',
}).then(res => {
  console.log(res);
});
</script>
<template>
  <div class="fsg_stations_comp_wrapper">
    <div class="fsg_stations_title">
      <div class="fsg_stations_title_cont">
        <svg-icon class="weather_icon" icon-class="icon-weather"></svg-icon>
        <span class="text">实况</span>
      </div>
      <button class="close" @click="layoutStore.setRightPanelStatus(false)">
        <svg-icon class="close_icon" icon-class="icon-close"></svg-icon>
      </button>
    </div>
    <div class="stations_component_wrapper">
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use './stations.scss';
</style>