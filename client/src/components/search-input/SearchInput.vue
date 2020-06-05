<template>
  <v-container>
    <v-row>
      <v-col sm="8" lg="4">
        <v-text-field
          v-model="text"
          id="search-input"
          label="Type a movie name"
          outlined
          @keyup.enter="$emit('search', text)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'search-input',
  data() {
    return {
      text: null,
    }
  }
}
</script>