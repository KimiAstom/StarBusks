<template>
  <div id="app">
    <left-module class="index-left" :state="state" :update="update"></left-module>
    <right-module class="index-right" :state="state" :update="update"></right-module>
  </div>
</template>

<script>
import leftModule from './components/index/leftModule.vue'
import rightModule from './components/index/rightModule.vue'

export default {
  name: 'App',
  data () {
    return {
      state: '0'
    }
  },
  components: {
    leftModule,
    rightModule
  },
  methods: {
    update (i) {
      this.state = i
    }
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
