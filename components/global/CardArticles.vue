<template>
  <v-layout row wrap>
    <v-flex xs6 md12>
      <div class="card">
        <a href="#" class="card__anchor text-none">
          <div class="card__image position-relative">
            <v-btn
              class="btn position-absolute shadow-none font-weight-bold"
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
.card {
  &__image {
    height: 180px;
    border-radius: 8px;
    overflow: hidden;
    @media (min-width: 320px) and (max-width: 480px) {
      height: auto;
    }
  }
  &__anchor {
    &:hover {
      .card__image {
        transition: 0.3s;
        opacity: 0.8;
      }
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
.btn {
  letter-spacing: 0px;
}
</style>
