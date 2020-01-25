<template>
  <v-app light>
    <v-content>
      <v-container grid-list-xl>
        <nuxt />
      </v-container>
      <Footer />
      <FooterMobile />
    </v-content>
  </v-app>
</template>

<script>
import Footer from "@/components/blocks/footer/Footer";
import FooterMobile from "@/components/blocks/footer/FooterMobile";
export default {
  components: {
    Footer,
    FooterMobile
  }
};
</script>
