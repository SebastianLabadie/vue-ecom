<template>
  <div>
    <section id="cart" >
      <ProductRowCheckout
        v-for="product in cartProducts"
        :key="product.ProductName"
        :p="product"
      >{{product.ProductTimesBought}}</ProductRowCheckout>
    </section>

    <footer id="site-footer">
      <div class="container clearfix">
        <div class="left">
          <h2 class="subtotal">Subtotal: <span>163.96</span>€</h2>
          <h3 class="tax">Taxes (5%): <span>8.2</span>€</h3>
          <h3 class="shipping">Shipping: <span>5.00</span>€</h3>
        </div>

        <div class="right">
          <h1 class="total">Total: <span>177.16</span>€</h1>
          <a class="btn">Checkout</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import ProductRowCheckout from "../components/ProductRowCheckout/ProductRowCheckout.vue";
export default {
  components: { ProductRowCheckout },
  name: "Checkout",
  data: () => ({
  }),
  methods: {
  },
computed: {
  cartProducts() { return this.$store.state.cart; }
},
watch: {
  cartProducts(nv) {
      this.cartProducts = nv;
  }
}

};
</script>

<style lang="scss">
.clearfix {
  content: "";
  display: table;
  clear: both;
}
#site-header {
  background: #fff;
  margin: 0 0 30px 0;
  h1 {
    font-size: 31px;
    font-weight: 300;
    padding: 40px 0;
    position: relative;
    margin: 0;
    span {
      color: #53b5aa;
    }
    span.last-span {
      background: #fff;
      padding-right: 150px;
      position: absolute;
      left: 217px;
      transition: all 0.2s linear;
    }
    &:hover {
      span.last-span {
        left: 363px;
      }
    }
    span.is-open {
      left: 363px;
    }
    em {
      font-size: 16px;
      font-style: normal;
      vertical-align: middle;
    }
  }
}
#site-footer {
  background: #fff;
  margin: 30px 0 0 0;
  padding: 40px;
  h1 {
    background: #fcfcfc;
    border: 1px solid #ccc;
    border-style: none none solid none;
    font-size: 24px;
    font-weight: 300;
    margin: 0 0 7px 0;
    padding: 14px 40px;
    text-align: center;
  }
  h2 {
    font-size: 24px;
    font-weight: 300;
    margin: 10px 0 0 0;
  }
  h3 {
    font-size: 19px;
    font-weight: 300;
    margin: 15px 0;
  }
}
a {
  color: #000;
  text-decoration: none;
  transition: color 0.2s linear;
  &:hover {
    color: #53b5aa;
  }
}
.container {
  font-family: "Open Sans", sans-serif;
  margin: 0 auto;
  width: 980px;
}
#cart {
  width: 100%;
  padding: 20px 60px;
  h1 {
    font-weight: 300;
  }
  a {
    color: #53b5aa;
    text-decoration: none;
    transition: color 0.2s linear;
    &:hover {
      color: #000;
    }
  }
}
</style>
