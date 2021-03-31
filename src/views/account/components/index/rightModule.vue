<template>
  <div class="index-right">
    <login v-if="state === '00'" :update="update" />
    <register v-if="state === '01'" />
    <club v-if="state === '02'" :update="update"/>
  </div>
</template>

<script>
import login from './login.vue'
import register from './register.vue'
import club from '@/views/account/components/index/club'

export default {
  name: 'right',
  props: ['state', 'update'],
  components: {
    login,
    register,
    club
  }
}
</script>

<style scoped>
.index-right {
  background-color: #ffffff;
}
</style>