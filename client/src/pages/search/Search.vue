<template>
  <div class="search">
    <search-input @search="handleSearch" />
  </div>
</template> 

<script>
import { getMoviesByTitleAndPage } from '@/services'

import SearchInput from '@/components/search-input/SearchInput'

export default {
  name: 'search',
  components: {
    SearchInput,
  },
  data() {
    return {
      movies: null,
      totalResults: null,
    }
  },
  methods: {
    handleSearch(value) {
      getMoviesByTitleAndPage(value)
        .then(resp => {
          this.movies = resp.Search
          this.totalResults = resp.totalResults
          console.log(this.totalResults)
          console.log(this.movies)
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>