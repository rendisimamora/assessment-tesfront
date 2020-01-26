<template>
  <div class="banner">
    <div class="banner__image">
      <v-container grid-list-xl>
        <div class="banner__card">
          <div class="banner__card-item ">
            <H2
              title="Psst! We give product matches that will be perfect for you!"
            />
            <p class="text mt-2">
              They will fit your skin, hair, body, AND they solve your beauty
              concerns at the same time. Sign up and complete your Beauty ID
              now!
            </p>
            <v-btn
              color="primary white--text"
              class="btn d-flex align-self-end box-shadow text-capitalize"
              tile
              large
              >Log in / Register</v-btn
            >
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  overflow: hidden;
  &__image {
    background: url("https://s3-ap-southeast-1.amazonaws.com/assets.femaledaily.com/web-assets/banner_matches_visitor.png")
      no-repeat;
    background-position: center;
    height: 405px;
    width: 100%;
    margin: 0 0 60px 0;
    @media (max-width: 800px) {
      background: url("https://s3-ap-southeast-1.amazonaws.com/assets.femaledaily.com/web-assets/banner_matches_visitor_mobile.png")
        no-repeat;
      background-size: 320px 349px;
      height: 349px;
      background-color: #fddae0;
      margin: 0 0 24px 0;
      padding: 16px 16px 0 16px;
      background-position: right;
      @media (min-width: 320px) and (max-width: 480px) {
        width: 500px;
      }
    }
  }
  &__card {
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    flex-flow: row;
    &-item {
      width: 300px;
      flex-shrink: 0;
      display: flex;
      flex-flow: column;
      align-items: baseline;
      @media (min-width: 1264px) {
        margin: 10px 0 0 135px;
        padding-top: 30px;
      }
      @media (min-wdith: 800px) {
        padding-top: 40px;
      }
      @media (min-width: 320px) and (max-width: 480px) {
        padding-top: 0px;
      }
    }
  }
}
.text {
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 12px;
  }
}
.btn {
  width: 200px;
  border-radius: 4px;
}
</style>
