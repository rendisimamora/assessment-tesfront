<template>
  <div class="card pa-5 mr-5">
    <div class="font-montserrat text-center">
      <a href="#" class="card__anchor">
        <img class="image image-circle" :src="avatar" :alt="name" />
      </a>
      <div class="card__text">
        <h2 class="card__text-name">{{ name }}</h2>
        <div class="card__icon mt-2 d-flex justify-space-around">
          <p><v-icon>person</v-icon>{{ users }}</p>
          <p><v-icon>list</v-icon>{{ list }}</p>
          <p><v-icon>insert_comment</v-icon>{{ comments }}</p>
        </div>
        <p class="card__text-description my-5">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String
    },
    name: {
      type: String,
      default: "Title"
    },
    description: {
      type: String,
      default: "Description"
    },
    users: {
      type: Number
    },
    list: {
      type: Number
    },
    comments: {
      type: Number
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  box-shadow: -3px 4px 10px 0 rgba(0, 0, 0, 0.08);
  width: 300px;
  &__text {
    @media (min-width: 320px) and (max-width: 480px) {
      width: 180px;
    }
    &-name {
      @media (min-width: 320px) and (max-width: 480px) {
        font-size: 16px;
      }
    }
    &-description {
      font-weight: 600;
      font-size: 14px;
      @media (min-width: 320px) and (max-width: 480px) {
        font-size: 12px;
      }
    }
  }

  &__icon {
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 14px;
    }
  }

  &__anchor {
    &:hover {
      transition: 0.3s;
      opacity: 0.8;
    }
  }
}

.image {
  object-fit: cover;
  width: 225px;
  height: 100%;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100px;
  }
}
</style>
