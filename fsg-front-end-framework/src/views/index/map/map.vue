<script setup>
import MapController from '@/plugins/mapManager/mapController';

let mapController, Maps;

const mapTargets = ref([
  {
    target: 'map_container1', // 即 id = map_container
    viewOption: {
      center: [126.55417278799258, 43.85709771505423],
      zoom: 6,
      projection: 'EPSG:4326',
    },
    service: ['Windy.Normal.Map'],
  },
  {
    target: 'map_container2',
    viewOption: {
      center: [126.55417278799258, 43.85709771505423],
      zoom: 6,
      projection: 'EPSG:4326',
    },
    service: ['Windy.Normal.Map'],
  },
  {
    target: 'map_container3',
    viewOption: {
      center: [126.55417278799258, 43.85709771505423],
      zoom: 6,
      projection: 'EPSG:4326',
    },
    service: ['Windy.Normal.Map'],
  },
  {
    target: 'map_container4',
    viewOption: {
      center: [126.55417278799258, 43.85709771505423],
      zoom: 6,
      projection: 'EPSG:4326',
    },
    service: ['Windy.Normal.Map'],
  },
]);

let activeMapTarget = ref('');

onMounted(() => {
  mapController = new MapController({ TianDiTuKey: '' });
  Maps = mapController.initMap(mapTargets.value);
  mapController.addLayers();

  mapTargets.value.forEach(item => {
    Maps[item.target].on('click', function (e) {
      console.log(e.coordinate);

      activeMapTarget.value = item.target;
    });
  });
});
</script>
<template>
  <div class="map_wrapper">
    <div
      v-for="item in mapTargets"
      :key="item.target"
      class="map_container"
      :class="{ active: activeMapTarget === item.target }"
      :id="item.target"
    ></div>
  </div>
</template>
<style lang="scss" scoped>
.map_wrapper {
  position: fixed;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  .map_container {
    width: 50%;
    height: 50%;
    box-sizing: border-box;
    border: 1px solid #000;
    &.active {
      border-color: #ea3323;
      box-shadow: inset -1px 0px 8px 0px rgba(234, 51, 35, 0.45);
    }
  }
}
</style>
