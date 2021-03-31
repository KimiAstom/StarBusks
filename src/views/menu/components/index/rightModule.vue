<template>
  <div class="index-right" v-if="Code != '0'">
    <Module v-for="v in List" :List="v" :key="v.id" />
    <footer class="index-right-footer">
      <small>KimiAstom & StarBusks @ 2021</small>
    </footer>
  </div>
</template>

<script>
import Module from './module.vue'

export default {
  name: 'right',
  props: ['menuList', 'state'],
  data () {
    return {
      Code: '0',
      List: []
    }
  },
  watch: {
    state: {
      handler: function () {
        this.Code = this.state
        this.List = []
        if (this.Code === '00') {
          this.List = JSON.parse(JSON.stringify(this.menuList))
        } else if (this.Code == '01') {
          this.List.push(this.menuList[0])
        } else if (this.Code == '02') {
          this.List.push(this.menuList[1])
        } else if (this.Code == '03') {
          this.List.push(this.menuList[2])
        } else {
          this.List.push(this.menuList[3])
        }
        window.scroll(0, 0)
      },
      deep: true
    }
  },
  components: {
    Module
  }
}
</script>

<style scoped>
.index-right {
  width: 70%;
  background-color: #f7f7f7;
}

.index-right-footer {
  height: 40px;
  width: 100%;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  color: #6f6f6f;
}

</style>