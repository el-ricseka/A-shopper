<template>
  <div id="app" class="container-nav">
    <Bazaar></Bazaar>
  </div>
</template>

<script>
import Bazaar from './components/Bazaar.vue'

export default {
  name: 'app',
  components: {
    Bazaar
  },
}
</script>

<style>
  body {
    background: #f8f8f8;
  }
</style>
