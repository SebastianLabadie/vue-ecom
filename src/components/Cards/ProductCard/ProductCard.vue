<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="product.ProductImage"></v-img>

    <v-card-title>{{ product.ProductName }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="product.ProductRating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">
          {{ product.ProductRating }} ({{ product.ProductReviews }})
        </div>
      </v-row>

      <div class="my-4 subtitle-1">$ • {{ product.ProductPrice }}</div>

      <div>{{ product.ProductDescription }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="addToCart">
        Buy
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ProductCard",
  data: () => ({}),
  props: {
    product: {}
  },
  methods: {
    addToCart() {
      this.$store.commit("ADD_TO_CART", this.product);
    }
  }
};
</script>

<style></style>
