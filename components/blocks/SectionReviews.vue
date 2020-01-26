<template>
  <div class="my-5">
    <H2 title="Latest Reviews" />
    <div class="mb-3 d-flex justify-space-between">
      <p class="subheading secondary--text">
        So you can make better purchase decision
      </p>

      <a href="#" class="subheading font-weight-medium text-none primary--text">
        See more
        <v-icon class="icon primary--text">keyboard_arrow_right</v-icon>
      </a>
    </div>
    <div class="item__list">
      <no-ssr>
        <flickity class="flickity" ref="flickity" :options="flickityOptions">
          <CardReviews
            v-for="(item, i) in items"
            :key="i"
            :productImage="item.product.image"
            :productName="item.product.name"
            :productDescription="item.product.desc"
            :userName="item.user"
            :userProfile="item.profile"
            :star="item.star"
            :comment="item.comment"
          />
        </flickity>
      </no-ssr>
      <ReviewsFrame />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array
  },

  data: () => ({
    flickityOptions: {
      contain: true,
      prevNextButtons: false,
      pageDots: true,
      draggable: true,
      fullscreen: true,
      groupCells: 2
    }
  })
};
</script>

<style lang="scss" scoped>
.flickity {
  width: 100%;
}
.item {
  &__list {
    width: 100%;
    display: flex;
  }
}

.is-selected {
  width: 49%;
  @media (max-width: 600px) {
    width: 100%;
  }
}
</style>
