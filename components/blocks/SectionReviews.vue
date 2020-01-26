<template>
  <div class="my-5 d-flex justify-space-between">
    <div class="item">
      <H2 title="Latest Reviews" />
      <div class="mb-3 d-flex justify-space-between">
        <p class="subheading secondary--text">
          So you can make better purchase decision
        </p>

        <a href="#" class="subheading text-none primary--text">
          See more
          <v-icon class="icon primary--text">keyboard_arrow_right</v-icon>
        </a>
      </div>
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
      freeScroll: true,
      groupCells: true,
      contain: true,
      prevNextButtons: false,
      pageDots: true,
      draggable: true,
      groupCells: 1,
      fullscreen: true
    }
  })
};
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
}

.is-selected {
  width: 50%;
  @media (max-width: 600px) {
    width: 100%;
  }
}
</style>
