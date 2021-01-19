<template>
  <div>
    <h1 style="color: green">Bluetooth-Test</h1>
    <p>
      <button @click="checkCompatibility()">Check Bluetooth API</button>
    </p>
    {{ this.compatibility }}
    <p id="target"></p>
  </div>
</template>

<script>
export default {
  name: "Bluetooth",
  props: {},
  data: function() {
    return {
      compatibility: "Button drücken um zu Testen"
    };
  },
  methods: {
    checkCompatibility() {
      if (navigator.bluetooth) {
        console.log("kompatibel");
        this.compatibility = "Bluetooth API kompatibel in diesem Browser";
      } else {
        console.log("nicht kompatibel");
        this.compatibility =
          "Nicht kompatibel in diesem Browser - Bluetooth-Schnittstelle nicht verfügbar";
      }
    }
  }
};
</script>
<style scoped>
</style>