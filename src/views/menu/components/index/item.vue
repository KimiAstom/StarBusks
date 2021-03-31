<template>
  <div class="item-wrap">
    <a :href="'/detail.html?id='+item.id">
      <div class="item-img-wrap">
        <img :src="item['img_url']" :alt="item.title">
      </div>
      <h4>{{ item.title }}</h4>
    </a>
  </div>

</template>

<script>
export default {
  name: 'item',
  props: ['item']
}
</script>

<style scoped>
.item-wrap {
  width: 25%;
}

.item-wrap a {
  display: block;
  width: 100%;
  padding-bottom: 30px;
  margin: 0 auto;
  text-decoration: none;
}

.item-img-wrap {
  width: 100%;
  padding-top: 25px;
  text-align: center;
  overflow: hidden;
}

.item-img-wrap img {
  width: 50%;
  border-radius: 50%;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.12);
}

.item-wrap h4 {
  width: 80%;
  margin: 0 auto;
  padding-top: 15px;
  color: black;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}

.item-wrap:hover .item-img-wrap img {
  box-shadow: 0 1px 3px 2px rgba(0, 0, 0, 0.12)
}

.item-wrap:hover {
  transform: translateY(-5px);
  transition: all 0.5s;
}
</style>