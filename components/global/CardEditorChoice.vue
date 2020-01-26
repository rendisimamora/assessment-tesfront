<template>
  <div class="card my-5">
    <div class="d-flex">
      <div class="card__avatar">
        <img
          class="image image-circle card__avatar-image"
          src="https://static.femaledaily.com/dyn/70/images/user-pics/8cfa98979828b03949df998669bcca01.jpg"
          :alt="userName"
        />
      </div>
      <div class="card__profile ml-2">
        <p class="font-weight-bold">{{ userName }}a</p>
        <p class="caption secondary--text">{{ userRole }}</p>
      </div>
    </div>
    <div class="card__products d-flex">
      <img
        class="card__products-image"
        :src="productImage"
        :alt="productName"
      />

      <div class="card__rating mb-3 d-flex align-center">
        <p class="font-weight-bold mr-1">{{ productRating }}</p>
        <v-rating
          class="mr-1 d-flex"
          :empty-icon="'mdi-star'"
          :background-color="'secondary'"
          v-model="productRating"
          half-increments
          readonly
        ></v-rating>
        <p>(10)</p>
      </div>

      <a href="#" class="card-anchor text-none black--text font-weight-bold">
        <p>{{ productName }}</p></a
      >

      <a href="#" class="card-anchor text-none black--text font-weight-medium">
        <p>{{ productDescription }}</p></a
      >

      <p class="secondary--text">Beige Caramel</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userName: String,
    userRole: String,
    productName: String,
    productImage: String,
    productDescription: String,
    productRating: Number
  }
};
</script>

<style lang="scss" scoped>
.image {
  object-fit: cover;
  width: 50px;
  height: 50px;
}

.card {
  margin-right: 30px;
  &__avatar {
    margin: 0 0 -15px 16px;
  }
  &__products {
    width: 207px;
    padding: 16px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    word-break: break-word;
    flex-flow: column;
    min-height: 351px;
    &-image {
      width: 125px;
      height: 125px;
      object-fit: cover;
      display: block;
      margin: auto;
      &:hover {
        transition: 0.3s;
        opacity: 0.8;
        cursor: pointer;
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
