<template>
  <v-app light>
    <v-content>
      <Nav />
      <nuxt />
      <Footer />
      <FooterMobile />
      <BottomFrame />
    </v-content>
  </v-app>
</template>

<script>
import Nav from "@/components/blocks/navbar/Nav";
import Footer from "@/components/blocks/footer/Footer";
import FooterMobile from "@/components/blocks/footer/FooterMobile";

export default {
  components: {
    Nav,
    Footer,
    FooterMobile
  }
};
</script>
