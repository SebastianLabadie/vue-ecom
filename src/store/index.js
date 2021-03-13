import Vue from "vue";
import Vuex from "vuex";
import { getAllProducts } from "@/api/products.api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    products: []
  },
  mutations: {
    ADD_TO_CART(state, product) {
      var indexOfDuplicated = 0;
      const productFiltered = state.cart.filter((el, i) => {
        if (el.ProductID == product.ProductID) indexOfDuplicated = i;
        return el.ProductID == product.ProductID;
      });
      if (productFiltered.length != 0) {
        state.cart[indexOfDuplicated].ProductTimesBought++;
        Vue.forceUpdate ();
      } else {
        product.ProductTimesBought = 1;
        state.cart.push(product);
        
      }
    },
    SET_PRODUCTS(state, data) {
      state.products = data;
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await getAllProducts();
        commit("SET_PRODUCTS", response.data.sdtListProducts.sdtProducts);
      } catch (error) {
        // handle the error here
      }
    }
  },
  modules: {}
});
