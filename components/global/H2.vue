<template>
  <h2 class="text-title font-roboto font-weight-bold black-text">
    {{ title }}
  </h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title is null"
    }
  }
};
</script>

<style lang="scss" scoped>
.text-title {
  font-size: 22px;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 14px;
  }
}
</style>
