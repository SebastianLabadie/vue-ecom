<template>
  <div class="header">
    <router-link to="/"><h2 class="logo">Compierivery</h2></router-link>
    <div class="input-component">
      <form @submit="onSubmit">
        <input type="text" />
        <button type="submit"><v-icon>search</v-icon></button>
      </form>
    </div>
    <div class="user-actions">
      <button class="btns btn_register">Registrarse</button>
      <button class="btns btn_my_account">Mi cuenta</button>
      <v-btn flat @click="navigateToCheckout">
        <v-badge left color="green">
          <span slot="badge">{{ cart.length }}</span>
          <v-icon>shopping_cart</v-icon> Cart
        </v-badge>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",

  data: () => ({}),
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      console.log("submited");
    },
    navigateToCheckout() {
      this.$router.push("Checkout");
    }
  }
};
</script>

<style lang="scss">
.logo {
  color: white;
  font-weight: 600;
}
.header {
  background: linear-gradient(to right, #ff7500, #f12711);
  height: 100px;

  display: flex;
  align-items: center;
  padding: 10px 15px;

  position: sticky;
  top: 0px;
  z-index: 100;
}
.input-component {
  flex: 1;
  border-radius: 4px;
  padding: 4px;
  margin: 0 18px;
  background-color: #fff;
  form {
    display: flex;
  }
  input {
    height: 12px;
    padding: 10px;
    width: 100%;
  }
  button {
    padding: 5px;
    height: 22px;
    display: grid;
    place-content: center;
    &:hover {
      cursor: pointer;
    }
  }
  input,
  button {
    border: none;
    outline: none;
    background: none;
  }
}
.user-actions {
  display: flex;
  justify-content: space-evenly;
  .btns {
    background: transparent;
    color: #fff;
    &:hover {
      cursor: pointer;
    }
    border: none;
    outline: none;
    padding: 6px;
  }
}
</style>
