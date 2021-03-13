<template>
  <article class="product" @click="getProduct()">
    <header>
      <a class="remove">
        <img
          src="http://www.astudio.si/preview/blockedwp/wp-content/uploads/2012/08/1.jpg"
          alt=""
        />

        <h3>Remove product</h3>
      </a>
    </header>

    <div class="content">
      <h1>{{ product.ProductName }}</h1>
        <slot></slot>
      {{ product.ProductDescription }}

      <div
        title="You have selected this product to be shipped in the color yellow."
        style="top: 0"
        class="color yellow"
      ></div>
      <div style="top: 43px" class="type small">XXL</div>
    </div>

    <footer class="content">
      <span class="qt-minus">-</span>
      <span class="qt">{{ product.ProductTimesBought }}</span>
      <span class="qt-plus" @click="addToCart()">+</span>

      <h2 class="full-price">
        {{ product.ProductPrice * product.ProductTimesBought }} USD
      </h2>

      <h2 class="price">
        {{ product.ProductPrice * product.ProductTimesBought }} USD
      </h2>
    </footer>
  </article>
</template>

<script>
export default {
  name: "ProductRowCheckout",
  data: () => ({
    product: {}
  }),
  props: {
    p: {}
  },
  computed: {},
  methods: {
    addToCart() {
      this.$store.commit("ADD_TO_CART", this.product);
    },
    getProduct() {
        console.log('tengo')
      this.product = this.$store.state.cart.filter(
        prod => prod.ProductID === this.p.ProductID
      )[0];
    }
  },
  created() {
    this.getProduct();
  }
};
</script>

<style lang="scss">
.product.removed {
  margin-left: 980px !important;
  opacity: 0;
}
.product {
  border: 1px solid #eee;
  margin: 20px 0;
  width: 100%;
  height: 195px;
  position: relative;
  transition: margin 0.2s linear, opacity 0.2s linear;
  img {
    width: 100%;
    height: 100%;
  }
  header {
    background-color: #fff;
    border: 1px solid #ccc;
    border-style: none none solid none;
    float: left;
    background: #000;
    margin: 0 1% 20px 0;
    overflow: hidden;
    padding: 0;
    position: relative;
    width: 24%;
    height: 195px;
    &:hover {
      img {
        opacity: 0.7;
      }
      h3 {
        bottom: 73px;
      }
    }
    h3 {
      background: #53b5aa;
      color: #fff;
      font-size: 22px;
      font-weight: 300;
      line-height: 49px;
      margin: 0;
      padding: 0 30px;
      position: absolute;
      bottom: -50px;
      right: 0;
      left: 0;
      -o-transition: bottom 0.2s linear;
      transition: bottom 0.2s linear;
    }
  }
  .content {
    background-color: #fff;
    border: 1px solid #ccc;
    border-style: none none solid none;
    float: left;
    box-sizing: border-box;
    height: 140px;
    padding: 0 20px;
    width: 75%;
  }
  h1 {
    color: #53b5aa;
    font-size: 25px;
    font-weight: 300;
    margin: 17px 0 20px 0;
  }
  footer.content {
    height: 50px;
    margin: 6px 0 0 0;
    padding: 0;
  }
  footer {
    .price {
      background: #fcfcfc;
      color: #000;
      float: right;
      font-size: 15px;
      font-weight: 300;
      line-height: 49px;
      margin: 0;
      padding: 0 30px;
    }
    .full-price {
      background: #53b5aa;
      color: #fff;
      float: right;
      font-size: 22px;
      font-weight: 300;
      line-height: 49px;
      margin: 0;
      padding: 0 30px;
      transition: margin 0.15s linear;
    }
  }
}
.remove {
  cursor: pointer;
}
.qt {
  display: block;
  float: left;
  font-size: 19px;
  line-height: 50px;
  width: 70px;
  text-align: center;
}
.qt-plus {
  display: block;
  float: left;
  background: #fcfcfc;
  border: none;
  font-size: 30px;
  font-weight: 300;
  height: 100%;
  padding: 0 20px;
  transition: background 0.2s linear;
  line-height: 50px;
  &:hover {
    background: #53b5aa;
    color: #fff;
    cursor: pointer;
  }
}
.qt-minus {
  display: block;
  float: left;
  background: #fcfcfc;
  border: none;
  font-size: 30px;
  font-weight: 300;
  height: 100%;
  padding: 0 20px;
  transition: background 0.2s linear;
  line-height: 47px;
  &:hover {
    background: #53b5aa;
    color: #fff;
    cursor: pointer;
  }
}
.left {
  float: left;
}
.right {
  float: right;
}
.btn {
  background: #53b5aa;
  border: 1px solid #999;
  border-style: none none solid none;
  cursor: pointer;
  display: block;
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  padding: 16px 0;
  width: 290px;
  text-align: center;
  transition: all 0.2s linear;
  &:hover {
    color: #fff;
    background: #429188;
  }
}
.type {
  background: #fcfcfc;
  font-size: 13px;
  padding: 10px 16px;
  left: 100%;
  border: 1px solid #ccc;
  border-style: none none solid none;
  position: absolute;
}
.color {
  border: 1px solid #ccc;
  border-style: none none solid none;
  position: absolute;
  width: 40px;
  height: 40px;
  right: -40px;
}
.red {
  background: #cb5a5e;
}
.yellow {
  background: #f1c40f;
}
.blue {
  background: #3598dc;
}
.minused {
  margin: 0 50px 0 0 !important;
}
.added {
  margin: 0 -50px 0 0 !important;
}
</style>
