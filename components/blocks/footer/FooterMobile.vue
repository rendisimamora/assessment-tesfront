<template>
  <div class="footer font-montserrat py-5">
    <v-container grid-list-xl>
      <div class="text-center">
        <!-- Navbar -->
        <ul class="footer-nav d-flex justify-center pl-0 ma-1">
          <li class="footer-nav-item" v-for="(item, i) in itemsNav.home">
            >
            <a href="#" class="black--text text-none font-weight-bold pa-2"
              >{{ item.title }}
            </a>
          </li>
        </ul>
        <ul class="footer-nav d-flex justify-center pl-0 ma-1">
          <li class="footer-nav-item" v-for="(item, i) in itemsNav.terms">
            <a href="#" class="black--text text-none font-weight-bold pa-2">{{
              item.title
            }}</a>
          </li>
        </ul>
        <ul class="footer-nav d-flex justify-center pl-0 ma-1">
          <li class="footer-nav-item" v-for="(item, i) in itemsNav.terms">
            <a href="#" class="black--text text-none font-weight-bold pa-2">{{
              item.title
            }}</a>
          </li>
        </ul>
        <!-- End Nav -->

        <!-- Download app -->
        <p class="primary--text text my-4">
          Download Our Mobile App
        </p>
        <div class="d-flex justify-center">
          <img
            v-for="(item, i) in itemsStore"
            :key="i"
            class="image-store mr-2"
            :src="item.image"
            :alt="item.title"
          />
        </div>

        <!-- End Download-->

        <!-- Footer Logo -->
        <div class="my-5">
          <div class="footer__logo">
            <Logo />
          </div>
          <p class="text text my-3">
            Copyright © 2015 - 2020 Female Daily Network ∙ All the rights
            reserved
          </p>
        </div>
        <!-- End Footer Logo -->

        <!-- Footer Social -->
        <div class="footer__social">
          <a
            v-for="(item, i) in itemsSocial"
            :key="i"
            :href="item.link"
            target="_blank"
            :class="item.className + ` text-none white--text mr-2`"
          >
          </a>
        </div>
        <!-- End Social -->
      </div>
    </v-container>
  </div>
</template>

<script>
import {
  NAV_HOME,
  NAV_TERMS,
  NAV_ABOUT,
  ITEMS_STORE,
  ITEMS_SOCIAL
} from "@/data/footer";
export default {
  data: () => ({
    itemsNav: {
      home: NAV_HOME,
      terms: NAV_TERMS,
      about: NAV_ABOUT
    },
    itemsStore: ITEMS_STORE,
    itemsSocial: ITEMS_SOCIAL
  })
};
</script>

<style lang="scss" scoped>
$color-grey: #e0e0e0;
.footer {
  border-top: 1px solid $color-grey;
  @media (min-width: 960px) {
    display: none;
  }
  &-nav {
    &-item {
      font-size: 12px;
      display: block;
      margin-bottom: 10px;
    }
  }
  &__logo {
    display: block;
    margin: auto;
    width: 150px;
  }
}

.image {
  &-store {
    width: 150px;
    object-fit: cover;
  }
}

.text {
  font-size: 12px;
}
</style>
