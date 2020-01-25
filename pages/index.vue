<template>
  <div class="female-app">
    <SectionInfo />
    <v-container grid-list-xl>
      <SectionArticles :items="items.articles" />
    </v-container>
    <v-container grid-list-xl>
      <SectionPopular />
      <SectionVideo />
      <SectionBrands />
    </v-container>
  </div>
</template>

<script>
import SectionArticles from "@/components/blocks/SectionArticles";
import SectionInfo from "@/components/blocks/SectionInfo";
import SectionPopular from "@/components/blocks/SectionPopular";
import SectionVideo from "@/components/blocks/SectionVideo";
import SectionBrands from "@/components/blocks/SectionBrands";
export default {
  async asyncData({ app }) {
    let res = await app.$api.fdn.get();
    let items = {
      articles: res["latest articles"]
    };

    return {
      items
    };
  },

  components: {
    SectionArticles,
    SectionInfo,
    SectionPopular,
    SectionVideo,
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
