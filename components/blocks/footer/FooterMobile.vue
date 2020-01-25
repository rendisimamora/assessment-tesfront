<template>
  <div class="footer font-montserrat py-5">
    <v-container grid-list-xl>
      <div class="text-center">
        <!-- Navbar -->
        <ul class="footer-nav d-flex justify-center pl-0 ma-1">
          <li class="footer-nav-item">
            <a
              href="#"
              class="body-2 black--text text-none font-weight-bold pa-2"
              >About Us
            </a>
          </li>
          <li class="footer-nav-item">
            <a
              href="#"
              class="body-2 black--text text-none font-weight-bold pa-2"
              >Feedback
            </a>
          </li>
          <li class="footer-nav-item">
            <a
              href="#"
              class="body-2 black--text text-none font-weight-bold pa-2"
              >Contact
            </a>
          </li>
        </ul>
        <ul class="footer-nav d-flex justify-center pl-0 ma-1">
          <li class="footer-nav-item">
            <a
              href="#"
              class="body-2 black--text text-none font-weight-bold pa-2"
              >Terms & Conditions</a
            >
          </li>
          <li class="footer-nav-item">
            <a
              href="#"
              class="body-2 black--text text-none font-weight-bold pa-2"
              >Privacy Policy</a
            >
          </li>
          <li class="footer-nav-item">
            <a
              href="#"
              class="body-2 black--text text-none font-weight-bold pa-2"
              >Help</a
            >
          </li>
        </ul>
        <ul class="footer-nav d-flex justify-center pl-0 ma-1">
          <li class="footer-nav-item">
            <a
              href="#"
              class="body-2 black--text text-none font-weight-bold pa-2"
              >Awards</a
            >
          </li>
          <li class="footer-nav-item">
            <a
              href="#"
              class="body-2 black--text text-none font-weight-bold pa-2"
              >Newsletter</a
            >
          </li>
        </ul>
        <!-- End Nav -->

        <!-- Download app -->
        <p class="body-2 primary--text my-4">
          Download Our Mobile App
        </p>
        <div class="d-flex justify-center">
          <img
            class="image-store mr-2"
            src="https://s3-ap-southeast-1.amazonaws.com/assets.femaledaily.com/fdn-talk/assets/btn_appstore.png"
            alt="playstore"
          />
          <img
            class="image-store"
            src="https://s3-ap-southeast-1.amazonaws.com/assets.femaledaily.com/fdn-talk/assets/btn_playstore.png"
            alt="appstore"
          />
        </div>
        <!-- End Download-->

        <!-- Footer Logo -->
        <div class="footer__logo my-5">
          <img
            src="https://femaledaily.com/static/images/logo_FD.png"
            alt="Female Daily Network"
          />
          <p class="body-2 my-3">
            Copyright © 2015 - 2020 Female Daily Network ∙ All the rights
            reserved
          </p>
        </div>
        <!-- End Footer Logo -->

        <!-- Footer Social -->
        <div class="footer__social">
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
        </div>
        <!-- End Social -->
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
$color-grey: #e0e0e0;
.footer {
  border-top: 1px solid $color-grey;
  @media (min-width: 960px) {
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
    width: 150px;
    object-fit: cover;
  }
}
</style>
