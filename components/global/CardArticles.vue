<template>
  <v-layout row wrap>
    <v-flex xs6 md12>
      <div class="item ">
        <a href="#" class="text-none">
          <div class="item__thumbnail position-relative">
            <v-btn
              class="position-absolute shadow-none "
              color="white primary--text"
              x-small
              tile
              >Sponsored</v-btn
            >
            <img class="image" :src="src" :alt="title" />
          </div>
        </a>
      </div>
    </v-flex>
    <v-flex xs6 md12>
      <div class="articles d-flex flex-column justify-center">
        <h3 class="articles-title">{{ title }}</h3>
        <p class="articles-author mt-2">
          {{ author }}
          <span class="secondary--text">| {{ publishedAt }}</span>
        </p>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    src: {
      type: String
    },
    title: {
      type: String,
      default: "Title"
    },
    author: {
      type: String,
      default: "Female Daily Author"
    },
    publishedAt: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  &__thumbnail {
    height: 180px;
    border-radius: 8px;
    overflow: hidden;
    @media (min-width: 320px) and (max-width: 480px) {
      height: auto;
    }
  }
}

.image {
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
}

.articles {
  height: 100%;
  &-title {
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 12px;
    }
  }
  &-author {
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 12px;
    }
  }
}
</style>
