<template>
  <v-app light>
    <v-content>
      <Navbar />
      <nuxt />
      <Footer />
      <FooterMobile />
      <BottomFrame />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/blocks/navbar/Navbar";
import Footer from "@/components/blocks/footer/Footer";
import FooterMobile from "@/components/blocks/footer/FooterMobile";
export default {
  components: {
    Navbar,
    Footer,
    FooterMobile
  }
};
</script>
