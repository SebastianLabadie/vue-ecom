<template>
  <v-app>
    <v-main>
      <Header />
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Footer from "./components/Footer/Footer.vue";
import Header from "./components/Header/Header.vue";

export default {
  name: "App",

  components: {
    Header,
    Footer
  },

  data: () => ({})
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
</style>
