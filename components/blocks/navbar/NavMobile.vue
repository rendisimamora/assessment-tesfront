<template>
  <div class="navbar-mobile">
    <div
      class="navbar-mobile__header d-flex align-center justify-space-between"
    >
      <div
        class="navbar-mobile__header-left d-flex align-center justify-center"
      >
        <a href="#" class="text-none pl-2">
          <v-icon class="ico-menu mr-5">reorder</v-icon>
        </a>
        <div class="navbar-mobile__header-logo">
          <Logo />
        </div>
      </div>
      <div
        class="navbar-mobile__header-right d-flex align-center justify-center"
      >
        <a
          href="#"
          class="caption text-none font-montserrat font-weight-bold primary--text pa-2"
          >LOGIN</a
        >
      </div>
    </div>
    <div class="navbar-mobile__search mr-5">
      <div class="d-flex mt-1 pl-2">
        <v-icon>search</v-icon>
        <v-text-field
          placeholder="search products, articles, topics, brands, etc"
          solo
          hide-details
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$color-lightgrey: #d0d0d0;
.v-text-field {
  padding: 0px;
  font-size: 12px;
}

.navbar {
  &-mobile {
    position: fixed;
    background: #fff;
    width: 100%;
    z-index: 99;

    @media (min-width: 960px) {
      display: none;
    }

    &__header {
      height: 60px;

      &-logo {
        width: 150px;
      }
      &-left {
        flex-shrink: 0;
      }
      &-right {
        border-left: 1px solid $color-lightgrey;
        width: 70px;
        height: 100%;
      }
    }
    &__search {
      width: 100%;
      flex-shrink: 1;
      border-top: 1px solid $color-lightgrey;
    }
  }
}

.nav {
  &-item {
    display: inline-block;
  }
}

.ico {
  &-menu {
    font-size: 30px !important;
  }
}
</style>
