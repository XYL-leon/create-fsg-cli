<script setup>
import MeteoFactorSta from '@/components/meteoFactorSta/meteoFactorSta.vue';
</script>
<template>
  <div class="meteorological_factor_statistics">
    <div class="fsg_observe_title">
      <div class="fsg_observe_title_cont">
        <svg-icon class="weather_icon" icon-class="icon-weather"></svg-icon>
        <span class="text">气象要素统计查询</span>
      </div>
      <button class="close">
        <svg-icon class="close_icon" icon-class="icon-close"></svg-icon>
      </button>
    </div>
    <div class="mfs_components_wrapper">
      <MeteoFactorSta />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use './meteoFactorStati.scss';
</style>