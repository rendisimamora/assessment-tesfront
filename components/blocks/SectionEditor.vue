<template>
  <v-container>
    <div class="my-5">
      <H2 title="Editor's Choice" />
      <p class="subheading secondary--text">Curated with love</p>

      <div class="pb-5">
        <div class="overflow-auto-y">
          <div class="d-flex ml-1 mr-5">
            <CardEditorChoice
              v-for="(item, i) in items"
              :key="i"
              :userName="item.editor"
              :userRole="item.role"
              :productName="item.product.name"
              :productRating="item.product.rating"
              :productDescription="item.product.description"
              :productImage="item.product.image"
            />
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    items: {
      type: Array
    }
  }
};
</script>
