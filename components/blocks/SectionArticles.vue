<template>
  <div>
    <H2 title="Latest Articles" />
    <div class="mb-3 d-flex justify-space-between">
      <p class="subheading secondary--text">Unravel more beauty</p>

      <a href="#" class="subheading font-weight-medium text-none primary--text">
        See more
        <v-icon class="icon primary--text">keyboard_arrow_right</v-icon>
      </a>
    </div>
    <v-layout row wrap>
      <v-flex xs12 md4 v-for="(item, i) in items" :key="i">
        <CardArticles
          :title="item.title"
          :src="item.image"
          :author="item.author"
          :publishedAt="item.published_at"
        />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array
    }
  }
};
</script>
