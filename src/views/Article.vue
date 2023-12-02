<template>
  <div class="container">
    1111
  </div>
</template>
<script>
import { fetchList } from 'api/article'
export default {
  name: 'Article',
  data () {
    return {
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    async getList (loadMore = true) {
      const result = await fetchList()
    }
  }
}
</script>