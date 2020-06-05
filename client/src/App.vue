<template>
  <v-app>
    <search />
  </v-app>
</template>

<script>
import Search from './pages/search/Search';

export default {
  name: 'App',
  components: {
    Search,
  },
  data: () => ({
    //
  }),
};
</script>
