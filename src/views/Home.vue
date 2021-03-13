<template>
  <div class="product_list">
    <ProductCard
      v-for="product in products"
      :key="product.ProductName"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from "../components/Cards/ProductCard/ProductCard.vue";
import { mapActions } from "vuex";

export default {
  components: { ProductCard },
  name: "Home",
  data: () => ({
    isLoading: false
  }),

  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    ...mapActions(["fetchProducts"])
  },
  async created() {
    this.isLoading = true;
    await this.fetchProducts();
    this.isLoading = false;
  }
};
</script>

<style lang="scss">
.product_list {
  display: flex;
}
</style>
