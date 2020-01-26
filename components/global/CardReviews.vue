<template>
  <div class="card mx-2">
    <div class="card__reviews pa-5">
      <div class="d-flex">
        <img
          class="card__reviews-image"
          :src="productImage"
          :alt="productName"
        />
        <div class="card__name ml-2 d-flex justify-center flex-column">
          <p class="font-weight-bold">{{ productName }}</p>
          <p class="font-weight-medium">{{ productDescription }}</p>
        </div>
      </div>
      <v-divider class="my-2" />
      <div class="d-flex justify-space-between">
        <v-rating
          class="mr-1"
          :empty-icon="'mdi-star'"
          :background-color="'secondary'"
          v-model="star"
          half-increments
          readonly
        ></v-rating>
        <p class="caption secondary--text">2 Hours ago</p>
      </div>
      <p class="body-2 mt-2">
        {{ comment }}
        <span class="primary--text">Read More</span>
      </p>
    </div>
    <div class="card__profile text-center">
      <img
        class="card__profile-image image-circle"
        src="https://static.femaledaily.com/dyn/50/images/user-pics/ea7cb60774b63df3a0a084906221ea4b.jpg"
        :alt="userName"
      />
      <p class="body-2 font-weight-bold">{{ userName }}</p>
      <p class="caption secondary--text">
        <span>
          {{ userProfile.join(", ") }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productName: String,
    productDescription: String,
    productImage: String,
    star: Number,
    comment: String,
    userName: String,
    userProfile: Array
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 49%;
  @media (max-width: 600px) {
    width: 100%;
  }
  &__reviews {
    border: solid 1px #e0e0e0;
    border-radius: 8px;
    &-image {
      width: 80px;
      height: 80px;
      object-fit: cover;
    }
  }
  &__profile {
    margin-top: -15px;
    &-image {
      width: 50px;
      height: 50px;
      object-fit: cover;
    }
  }
}
</style>
