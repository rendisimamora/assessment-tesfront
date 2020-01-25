<template>
  <div class="card pa-2">
    <div class="card__products">
      <img
        class="card__products-image"
        :src="productImage"
        :alt="productName"
      />
    </div>
    <div class="card__rating mb-3 d-flex align-center">
      <p class="font-weight-bold mr-1">7</p>
      <v-rating
        class="mr-1"
        :empty-icon="'mdi-star'"
        :background-color="'secondary'"
        v-model="star"
        half-increments
        readonly
      ></v-rating>
      <p>(10)</p>
    </div>
    <a href="#" class="text-none card-anchor black--text font-weight-bold"
      ><p>{{ productName }}</p></a
    >
    <a href="#" class="text-none card-anchor black--text font-weight-medium"
      ><p>{{ productDescription }}</p></a
    >
  </div>
</template>

<script>
export default {
  props: {
    productName: String,
    productDescription: String,
    productImage: String,
    star: Number
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 19%;
  margin-right: 10px;
  @media (max-width: 600px) {
    width: 50%;
  }
  &__products {
    &-image {
      width: 150px;
      height: 200px;
      object-fit: cover;
      display: block;
      margin: auto;
      &:hover {
        transition: 0.3s;
        opacity: 0.8;
      }
    }
  }
  &-anchor {
    &:hover {
      color: #db284e !important;
    }
  }
}
</style>
