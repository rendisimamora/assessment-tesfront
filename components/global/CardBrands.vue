<template>
  <div class="item__thumbnail">
    <img class="image" :src="image" :alt="title" />
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
.item {
  &__thumbnail {
    width: 100%;
    height: 100px;
    overflow: hidden;
  }
}
.image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
