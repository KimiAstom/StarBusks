<template>
  <div id="app">
    <left-module class="index-left"></left-module>
    <right-module class="index-right"></right-module>
  </div>
</template>

<script>
import leftModule from './components/index/leftModule.vue'
import rightModule from './components/index/rightModule.vue'

export default {
  name: 'App',
  components: {
    leftModule,
    rightModule
  }
}
</script>

<style>
.index-left {
  position: fixed;
  width: 30%;
  height: 100%;
}

.index-right {
  width: 70%;
  margin-left: 30%;
}

</style>
