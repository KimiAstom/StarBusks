<template>
  <div id="app">
    <left-module class="index-left"
        :menuList="menuList"
        :state="state"
        :update="update"></left-module>
    <right-module class="index-right" :menuList="menuList" :state="state"></right-module>
  </div>
</template>

<script>
import leftModule from './components/index/leftModule.vue'
import rightModule from './components/index/rightModule.vue'

export default {
  name: 'App',
  data () {
    return {
      menuList: [],
      state: '0'
    }
  },
  components: {
    leftModule,
    rightModule
  },
  mounted () {
    this.axios.get('/menuList')
        .then(
            (res) => {
              this.menuList = res.data
              this.state = '00'
              window.localStorage.setItem('menuList',JSON.stringify(res.data))
            }
        )
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
