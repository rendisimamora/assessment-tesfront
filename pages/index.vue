<template>
  <div>
    <SectionArticles :items="items.articles" />

    <SectionPopular />
    <SectionVideo />
    <SectionBrands />
  </div>
</template>

<script>
import SectionArticles from "@/components/blocks/SectionArticles";
import SectionPopular from "@/components/blocks/SectionPopular";
import SectionVideo from "@/components/blocks/SectionVideo";
import SectionBrands from "@/components/blocks/SectionBrands";
export default {
  async asyncData({ app }) {
    let res = await app.$api.fdn.get();
    console.log("DATA___", res);
    let items = {
      articles: res["latest articles"]
    };

    return {
      items
    };
  },

  components: {
    SectionArticles,
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
