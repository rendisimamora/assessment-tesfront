<template>
  <v-app light>
    <v-content>
      <Nav />
      <NavMobile />
      <nuxt />
      <Footer />
      <FooterMobile />
      <BottomFrame />
    </v-content>
  </v-app>
</template>

<script>
import Nav from "@/components/blocks/navbar/Nav";
import NavMobile from "@/components/blocks/navbar/NavMobile";
import Footer from "@/components/blocks/footer/Footer";
import FooterMobile from "@/components/blocks/footer/FooterMobile";

export default {
  components: {
    Nav,
    NavMobile,
    Footer,
    FooterMobile
  }
};
</script>
