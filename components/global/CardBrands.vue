<template>
  <div class="card">
    <a href="#" class="card__anchor">
      <img class="card__image" :src="image" :alt="title" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    image: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 100px;
  overflow: hidden;
  &__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &__anchor {
    &:hover {
      transition: 0.3s;
      opacity: 0.8;
    }
  }
}
</style>
