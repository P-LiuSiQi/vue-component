<template>
  <div class="home">
    <div :class="['home-tabs', {'active': isActived === item }]" v-for="item in tabs" :key="item" @click="changeRouter(item)">
      {{item}}
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      tabs: ['table-slot', 'table-render', 'tree'],
      isActived: 'table-slot'
    }
  },
  methods: {
    changeRouter (item) {
      this.isActived = item
      this.$router.push(`/${item}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.home-tabs {
  display: inline-block;
  font-size: 18px;
  margin:0 10px 20px 0;
  cursor: pointer;
  &:hover {
    color: rgb(41,184,219);
  }
}
.active {
  color: rgb(41,184,219);
}
</style>
