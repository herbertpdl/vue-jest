<template>
  <v-app>
    <search />
  </v-app>
</template>

<script>
import Search from './components/search/Search';

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
