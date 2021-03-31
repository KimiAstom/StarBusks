<template>
  <div class="index-right">
    <div class="detail_warp clearfix">
      <div class="img_warp">
        <img :src="img_url" :alt="title2">
      </div>
      <div class="detail_content">
        <p>{{ title1 }}</p>
        <p>{{ title2 }}</p>
      </div>
    </div>
    <module :List="sort" />
  </div>
</template>

<script>
import module from '@/views/detail/components/index/module'

export default {
  name: 'right',
  props: ['menuList', 'id1', 'id2', 'id3'],
  data () {
    return {
      img_url: '',
      title1: '',
      title2: '',
      sort: []
    }
  },
  components: {
    module
  },
  watch: {
    id1: {
      handler: function () {
        let type = this.menuList.find(v => v.id == this.id1)
        let sort = type.type.find(v => v.id == this.id1 + this.id2)
        this.title1 = sort.title
        let ob = sort.sort.find(v => v.id == this.id1 + this.id2 + this.id3)
        this.title2 = ob.title
        this.img_url = ob.img_url
        this.sort = sort.sort.filter(v => v.id != this.id1 + this.id2 + this.id3)
      },
      deep: true
    },
    id2: {
      handler: function () {
        let type = this.menuList.find(v => v.id == this.id1)
        let sort = type.type.find(v => v.id == this.id1 + this.id2)
        this.title1 = sort.title
        let ob = sort.sort.find(v => v.id == this.id1 + this.id2 + this.id3)
        this.title2 = ob.title
        this.img_url = ob.img_url
        this.sort = sort.sort.filter(v => v.id != this.id1 + this.id2 + this.id3)
      },
      deep: true
    },
    id3: {
      handler: function () {
        let type = this.menuList.find(v => v.id == this.id1)
        let sort = type.type.find(v => v.id == this.id1 + this.id2)
        this.title1 = sort.title
        let ob = sort.sort.find(v => v.id == this.id1 + this.id2 + this.id3)
        this.title2 = ob.title
        this.img_url = ob.img_url
        this.sort = sort.sort.filter(v => v.id != this.id1 + this.id2 + this.id3)
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.index-right {
  background-color: #f7f7f7;
}

.detail_warp {
  width: 100%;
  background-color: #fafafa;
}

.img_warp {
  float: left;
  width: 40%;
  text-align: center;
  margin: 2% 0;
}

.img_warp img {
  width: 90%;

}

.detail_content {
  float: left;
  width: 60%;
  height: 40%;
}

.detail_content p:nth-of-type(1) {
  height: 14px;
  margin-top: 30%;
  padding-left: 20px;
  line-height: 14px;
  font-size: 14px;
  color: #c2a661;
  font-weight: 600;
}

.detail_content p:nth-of-type(2) {
  height: 28px;
  margin-top: 20px;
  padding-left: 20px;
  color: black;
  line-height: 28px;
  font-size: 28px;
  font-weight: 400;
}

.clearfix {
  *zoom: 1;
}

.clearfix:before,
.clearfix:after {
  display: table;
  line-height: 0;
  content: "";
}

.clearfix:after {
  clear: both;
}


</style>