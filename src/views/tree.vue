<template>
  <div>
    <i-tree :data="treeData" :showCheckbox="true"></i-tree>
  </div>
</template>

<script>
import iTree from '@/components/tree/tree.vue'
export default {
  components: { iTree },
  data () {
    return {
      treeData: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

</style>
