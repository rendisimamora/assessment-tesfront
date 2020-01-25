<template>
  <div class="female-app">
    <v-container grid-list-xl>
      <TopFrame />
      <BillboardFrame />

      <SectionEditor :items="items.editors" />
    </v-container>
    <SectionInfo />

    <v-container grid-list-xl>
      <HorizontalFrame />
      <SectionReviews :items="items.reviews" />
      <SectionArticles :items="items.articles" />
      <SectionPopular />
      <SectionVideo />
      <SectionTrending :items="items.reviews" />
      <SectionBrands />
    </v-container>
  </div>
</template>

<script>
import SectionEditor from "@/components/blocks/SectionEditor";
import SectionInfo from "@/components/blocks/SectionInfo";
import SectionReviews from "@/components/blocks/SectionReviews";
import SectionArticles from "@/components/blocks/SectionArticles";
import SectionPopular from "@/components/blocks/SectionPopular";
import SectionVideo from "@/components/blocks/SectionVideo";
import SectionTrending from "@/components/blocks/SectionTrending";
import SectionBrands from "@/components/blocks/SectionBrands";
export default {
  async asyncData({ app }) {
    let res = await app.$api.fdn.get();
    let items = {
      editors: res["editor's choice"],
      articles: res["latest articles"],
      reviews: res["latest review"]
    };

    return {
      items
    };
  },

  components: {
    SectionEditor,
    SectionInfo,
    SectionReviews,
    SectionArticles,
    SectionPopular,
    SectionVideo,
    SectionTrending,
    SectionBrands
  },

  head() {
    return {
      title: "Female Daily - Info, Artikel, Video dan Review Seputar Kecantikan"
    };
  }
};
</script>

<style lang="scss" scoped>
.female-app {
  padding-top: 120px;
}
</style>
