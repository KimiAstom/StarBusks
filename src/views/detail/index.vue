<template>
  <div id="app">
    <left-module class="index-left" :id1="id_1"></left-module>
    <right-module class="index-right" :menuList="menuList" :id1="id_1" :id2="id_2" :id3="id_3"></right-module>
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
      id_1: '0',
      id_2: '0',
      id_3: '0'
    }
  },
  components: {
    leftModule,
    rightModule
  },
  mounted () {
    if (window.localStorage.getItem('menuList')) {
      this.menuList = JSON.parse(window.localStorage.getItem('menuList'))
    } else {
      this.axios.get('/menuList')
          .then(
              (res) => {
                this.menuList = res.data
                window.localStorage.setItem('menuList', JSON.stringify(res.data))
              }
          )
    }
    let id = window.location.search.split('=')[1].toString()
    this.id_1 = id.substring(0, 2)
    this.id_2 = id.substring(2, 4)
    this.id_3 = id.substring(4, 6)
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
  position: fixed;
  width: 70%;
  height: 100%;
  margin-left: 30%;
  z-index: -1;
}

</style>
