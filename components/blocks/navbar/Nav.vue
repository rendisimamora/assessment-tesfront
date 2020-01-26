<template>
  <div class="navbar">
    <div class="d-flex">
      <div class="navbar-left d-flex align-center justify-center">
        <a href="#" class="text-none">
          <v-icon class="ico-menu mr-5">reorder</v-icon>
        </a>
        <div class="navbar__logo">
          <Logo />
        </div>
      </div>
      <div class="navbar__search mr-5">
        <div class="form__group mt-3 d-flex ">
          <v-icon class="pl-2">search</v-icon>
          <v-text-field
            class="body-2"
            placeholder="search products, articles, topics, brands, etc"
            solo
            hide-details
          />
        </div>
      </div>
      <div class="navbar-right d-flex align-center justify-center primary">
        <a href="#" class="text-none font-montserrat white--text pa-2"
          ><v-icon class="white--text mr-2">person</v-icon>LOGIN / SIGNUP</a
        >
      </div>
    </div>
    <div class="navbar__category py-2 d-flex align-center justify-center">
      <ul class="nav">
        <li
          class="body-2 nav-item font-weight-bold mr-5"
          v-for="(item, i) in items"
          :key="i"
        >
          <a href="#" class="text-none black--text">{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "SKINCARE"
      },
      {
        title: "MAKE UP"
      },
      {
        title: "BODY"
      },
      {
        title: "HAIR"
      },
      {
        title: "FRAGRANCE"
      },
      {
        title: "NAILS"
      },
      {
        title: "TOOLS"
      },
      {
        title: "BRANDS"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.v-text-field {
  padding: 0px;
}

.navbar {
  position: fixed;
  width: 100%;
  background: #fff;
  z-index: 99;
  @media (max-width: 959px) {
    display: none;
  }
  &-left {
    width: 250px;
    flex-shrink: 0;
  }

  &-right {
    width: 225px;
    height: 60px;
    flex-shrink: 0;
  }
  &__search {
    width: 100%;
    flex-shrink: 1;
  }
  &__logo {
    width: 150px;
  }
  &__category {
    border: 1px solid #d0d0d0;
  }
}

.nav {
  &-item {
    display: inline-block;
  }
}

.form {
  &__group {
    border: 1px solid #e0e0e0;
  }
}

.ico {
  &-menu {
    font-size: 30px !important;
  }
}
</style>
