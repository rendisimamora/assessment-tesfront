<template>
  <div class="footer font-montserrat py-5">
    <v-container grid-list-xl>
      <v-layout row wrap>
        <v-flex xs12 md3>
          <ul class="footer-nav">
            <li class="footer-nav-item">
              <a href="#" class="black--text text-none font-weight-bold"
                >About Us
              </a>
            </li>
            <li class="footer-nav-item">
              <a href="#" class="black--text text-none font-weight-bold"
                >Feedback
              </a>
            </li>
            <li class="footer-nav-item">
              <a href="#" class="black--text text-none font-weight-bold"
                >Contact
              </a>
            </li>
          </ul>
        </v-flex>
        <v-flex xs12 md3>
          <ul class="footer-nav">
            <li class="footer-nav-item">
              <a href="#" class="black--text text-none font-weight-bold"
                >Terms & Conditions</a
              >
            </li>
            <li class="footer-nav-item">
              <a href="#" class="black--text text-none font-weight-bold"
                >Privacy Policy</a
              >
            </li>
            <li class="footer-nav-item">
              <a href="#" class="black--text text-none font-weight-bold"
                >Help</a
              >
            </li>
          </ul>
        </v-flex>
        <v-flex xs12 md3>
          <ul class="footer-nav">
            <li class="footer-nav-item">
              <a href="#" class="black--text text-none font-weight-bold"
                >Awards</a
              >
            </li>
            <li class="footer-nav-item">
              <a href="#" class="black--text text-none font-weight-bold"
                >Newsletter</a
              >
            </li>
          </ul>
        </v-flex>
        <v-flex xs12 md3>
          <p class="font-weight-bold primary--text">
            Download Our Mobile App
          </p>
          <!--<div class="d-flex justify-space between">
           
          </div>-->
          <v-layout wrap>
            <v-flex xs3 md6>
              <img
                class="image-store mr-5"
                src="https://s3-ap-southeast-1.amazonaws.com/assets.femaledaily.com/fdn-talk/assets/btn_appstore.png"
                alt="playstore"
              />
            </v-flex>
            <v-flex xs3 md6>
              <img
                class="image-store"
                src="https://s3-ap-southeast-1.amazonaws.com/assets.femaledaily.com/fdn-talk/assets/btn_playstore.png"
                alt="appstore"
              />
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>

      <!-- Copyright -->
      <v-layout row wrap>
        <v-flex xs12 md9>
          <img
            src="https://femaledaily.com/static/images/logo_FD.png"
            alt="Female Daily Network"
          />
          <p class="font-montserrat my-3">
            Copyright © 2015 - 2020 Female Daily Network ∙ All the rights
            reserved
          </p>
        </v-flex>
        <v-flex xs12 md3>
          <a
            href="https://www.facebook.com/FemaleDailyNetwork/"
            target="_blank"
            class="icon-facebook text-none white--text mr-2"
          >
          </a>
          <a
            href="https://twitter.com/femaledaily"
            class="icon-twitter text-none white--text mr-2"
            target="_blank"
          >
          </a>
          <a
            href="https://www.instagram.com/femaledailynetwork/"
            target="_blank"
            class="icon-instagram text-none white--text mr-2"
          >
          </a>
          <a
            href="https://www.youtube.com/user/FemaleDailyNetwork"
            target="_blank"
            class="icon-youtube text-none white--text mr-2"
          >
          </a>
        </v-flex>
      </v-layout>
      <!-- End Copyright-->
    </v-container>
  </div>
</template>

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
}

.image {
  &-store {
    width: 100%;
    object-fit: cover;
  }
}
</style>
