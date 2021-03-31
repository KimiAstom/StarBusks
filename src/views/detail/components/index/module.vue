<template>
  <div class="menu-module-warp">
    <div class="menu-module" v-if="List.length>0">
      <h3>猜你喜欢</h3>
      <div class="items-warp">
        <item v-for="v in List" :key="v.id" :item="v" />
      </div>
    </div>
  </div>
</template>

<script>
import item from './item.vue'

export default {
  name: 'modules',
  props: ['List'],
  components: {
    item
  }
}
</script>

<style scoped>
.menu-module-warp {
  width: 96%;
  margin: 0 auto;
}

.menu-module {
  width: 100%;
  padding-top: 30px;
  border-bottom: 1px solid #d9d9d9;
}

.menu-module h3 {
  font-size: 14px;
  font-weight: 600;
  color: #6c6c6c;
}

.items-warp {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>