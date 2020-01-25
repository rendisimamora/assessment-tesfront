<template>
  <div class="footer font-montserrat py-5">
    <v-container grid-list-xl>
      <v-layout row wrap>
        <v-flex xs12 md3>
          <ul class="footer-nav">
            <li class="footer-nav-item" v-for="(item, i) in itemsNav.home">
              <a href="#" class="black--text text-none font-weight-bold"
                >{{ item.title }}
              </a>
            </li>
          </ul>
        </v-flex>
        <v-flex xs12 md3>
          <ul class="footer-nav">
            <li class="footer-nav-item" v-for="(item, i) in itemsNav.terms">
              <a href="#" class="black--text text-none font-weight-bold">{{
                item.title
              }}</a>
            </li>
          </ul>
        </v-flex>
        <v-flex xs12 md3>
          <ul class="footer-nav" v-for="(item, i) in itemsNav.terms">
            <li class="footer-nav-item">
              <a href="#" class="black--text text-none font-weight-bold">{{
                item.title
              }}</a>
            </li>
          </ul>
        </v-flex>
        <v-flex xs12 md3>
          <p class="font-weight-bold primary--text">
            Download Our Mobile App
          </p>

          <v-layout wrap>
            <v-flex xs3 md6 v-for="(item, i) in itemsStore" :key="i">
              <img
                class="image-store mr-5"
                :src="item.image"
                :alt="item.title"
              />
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>

      <!-- Copyright -->
      <v-layout row wrap>
        <v-flex xs12 md9>
          <div class="footer__logo">
            <Logo />
          </div>
          <p class="font-montserrat my-3">
            Copyright © 2015 - 2020 Female Daily Network ∙ All the rights
            reserved
          </p>
        </v-flex>
        <v-flex xs12 md3>
          <a
            v-for="(item, i) in itemsSocial"
            :key="i"
            :href="item.link"
            target="_blank"
            :class="item.className + ` text-none white--text mr-2`"
          >
          </a>
        </v-flex>
      </v-layout>
      <!-- End Copyright-->
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
  @media (max-width: 959px) {
    display: none;
  }
  &-nav {
    &-item {
      display: block;
      margin-bottom: 10px;
    }
  }
  &__logo {
    width: 150px;
  }
}

.image {
  &-store {
    width: 100%;
    object-fit: cover;
  }
}
</style>
