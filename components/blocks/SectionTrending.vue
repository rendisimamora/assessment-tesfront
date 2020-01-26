<template>
  <div class="my-5">
    <H2 title="Trending This Week" />
    <p class="subheading secondary--text">
      See our weekly most reviewed products
    </p>

    <no-ssr>
      <flickity class="flickity" ref="flickity" :options="flickityOptions">
        <CardProducts
          v-for="(item, i) in items"
          :key="i"
          :productImage="item.image"
          :productName="item.title"
          :productDescription="item.description"
          :star="item.star"
        />
      </flickity>
    </no-ssr>
  </div>
</template>

<script>
export default {
  data: () => ({
    flickityOptions: {
      contain: true,
      prevNextButtons: false,
      pageDots: true,
      draggable: true,
      wrapAround: true
    },

    items: [
      {
        title: "NATURE REPUBLIC",
        description: "Aloe Vera 92% Soothing Gel",
        image:
          "https://static.femaledaily.com/dyn/155/images/prod-pics/product_1545206288_Nature_Rep_800x800.jpg",
        star: 3.9
      },
      {
        title: "CETAPHIL",
        description: "Gentle Skin Cleanser",
        image:
          "https://static.femaledaily.com/dyn/155/images/prod-pics/product_1545203672_Cetaphil_G_800x800.jpg",
        star: 3.9
      },
      {
        title: "VASELINE",
        description: "Repairing Jelly (Pure Petroleum Jelly)",
        image:
          "https://static.femaledaily.com/dyn/155/images/prod-pics/product_1552546007_2091603_70_800x800.jpg",
        star: 3.9
      },
      {
        title: "Emina",
        description: "Sun Protection SPF 30 PA++",
        image:
          "https://static.femaledaily.com/dyn/155/images/prod-pics/product_1469761401_Sun_Protec_800x800.jpg",
        star: 3.9
      },
      {
        title: "GARNIER",
        description: "Micellar Cleansing Water All-in Mackup",
        image:
          "https://static.femaledaily.com/dyn/155/images/prod-pics/product_1545203305_Garnier_Mi_800x800.jpg",
        star: 3.9
      },
      {
        title: "MARCKS",
        description: "Bedak Beauty",
        image:
          "https://static.femaledaily.com/dyn/155/images/prod-pics/product_1535101658_Marcks_Bed_800x800.jpg",
        star: 3.9
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.is-selected {
  width: 19%;
  @media (max-width: 600px) {
    width: 50%;
  }
}
</style>
