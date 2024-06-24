<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Bagian Header dan Drawer -->
    
    <q-page-container>
      <q-page class="q-pa-md">
        <weather-widget></weather-widget>
      </q-page>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import WeatherWidget from '../components/WeatherWidget.vue'

export default {
  components: {
    WeatherWidget,
  },
}
</script>
