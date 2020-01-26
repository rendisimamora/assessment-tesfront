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
        <flickity
          class="flickity flickity--mobile"
          ref="flickity"
          :options="flickityMobileOptions"
        >
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

        <flickity
          class="flickity flickity--desktop"
          ref="flickity"
          :options="flickityDesktopOptions"
        >
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
    flickityMobileOptions: {
      contain: true,
      prevNextButtons: false,
      pageDots: true,
      draggable: true,
      fullscreen: true,
      groupCells: 1
    },

    flickityDesktopOptions: {
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
  &--desktop {
    @media (max-width: 500px) {
      display: none;
    }
  }
  &--mobile {
    @media (min-width: 501px) {
      display: none;
    }
  }
}
.item {
  &__list {
    width: 100%;
    @media (min-width: 900px) {
      display: flex;
    }
  }
}

.is-selected {
  width: 49%;
  @media (max-width: 500px) {
    width: 100%;
  }
}
</style>
