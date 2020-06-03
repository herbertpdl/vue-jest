<template>
  <v-container>
    <v-row>
      <v-col sm="8" lg="4">
        <v-text-field
          v-model="text"
          id="search"
          label="Buscar por filme"
          outlined
          @keyup.enter="$emit('search', text)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {
      text: null,
    }
  }
}
</script>