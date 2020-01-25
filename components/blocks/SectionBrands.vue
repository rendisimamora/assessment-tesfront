<template>
  <div>
    <div class="my-5">
      <H2 title="Top Brands" />
      <div class="mb-3 d-flex justify-space-between">
        <p class="subheading secondary--text">We all know and love</p>

        <a href="#" class="subheading text-none primary--text">
          See more
          <v-icon class="icon primary--text">keyboard_arrow_right</v-icon>
        </a>
      </div>

      <div class="pb-5">
        <v-layout row wrao>
          <v-flex xs4 md2 v-for="(item, i) in items" :key="i">
            <CardBrands :image="item.image" :title="item.title" />
          </v-flex>
        </v-layout>
      </div>
    </div>

    <H2
      title="Female Daily - Find everything you want to know about beauty on Female
        Daily"
    />

    <p class="body-2 my-3">
      Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty
      Tutorials, Discussions, Beauty Workshops, anything! We are here to be your
      friendly solution to all things beauty, inside and out!
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "Wardah",
        image:
          "https://static.femaledaily.com/dyn/800/images/brands-pics/brands_1542081250_wardah_800x800.png"
      },
      {
        title: "Maybeline",
        image:
          "https://static.femaledaily.com/dyn/800/images/brands-pics/brands_1571201621_logo_maybe_800x800.png"
      },
      {
        title: "Emina",
        image:
          "https://static.femaledaily.com/dyn/800/images/brands-pics/brands_1551120321_Emina_Logo_800x800.png"
      },
      {
        title: "Garnier",
        image:
          "https://static.femaledaily.com/dyn/800/images/brands-pics/brands_1551817430_Garnier_Lo_800x800.png"
      },
      {
        title: "The body shop",
        image:
          "https://static.femaledaily.com/dyn/800/images/brands-pics/brands_1542081653_tbs_800x800.png"
      },
      {
        title: "PIX",
        image:
          "https://static.femaledaily.com/dyn/800/images/brands-pics/brands_1554349296_PIXY_NEW_L_800x800.png"
      }
    ]
  })
};
</script>
