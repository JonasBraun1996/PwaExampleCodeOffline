<template>
  <div id="app">
    <img alt="PWA" src="./assets/pwa.png" />
    <pwa></pwa>
  </div>
</template>

<script>
import pwa from "./components/PWA_Prototype.vue";

export default {
  name: "App",
  components: {
    pwa
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
