<script setup>
import {RouterView} from 'vue-router'
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <Sidebar/>
  <!-- Page Content-->
  <div class="container-fluid p-0">
    <RouterView/>
  </div>
</template>