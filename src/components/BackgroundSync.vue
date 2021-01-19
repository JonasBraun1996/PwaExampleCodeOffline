<template>
  <div>
    <h1 style="color: green">BackgroundSync-Test</h1>
    <button @click="checkCompatibility()">Check IndexedDB Api</button><br>
    {{ this.compatible }}
  </div>
</template>

<script>
export default {
  name: "BackgroundSync",
   data: function() {
    return {
      compatible: ""
    };
  },
  methods: {
    checkCompatibility() {
      let indexedDB =
        self.indexedDB ||
        self.mozIndexedDB ||
        self.webkitIndexedDB ||
        self.msIndexedDB;
      if (indexedDB) {
        this.compatible = "BackgroundSync in diesem Browser kompatibel";
      } else {
        this.compatible = "BackgroundSync in diesem Browser nicht kompatibel";
      }
    }
  }
};
</script>
<style scoped>
</style>
