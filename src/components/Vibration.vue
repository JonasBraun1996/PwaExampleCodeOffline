<template>
  <div>
    <h1 style="color: green">Vibrationsfunktions-Test</h1>
    <div>Smartphone Benachrichtigungen auf Vibration einstellen</div><br>
    <button @click="vibrateSimple()">Vibration 3 Sekunden</button>
  </div>
</template>

<script>
export default {
  name: "Vibration",
  methods: {
    vibrateSimple() {
        navigator.vibrate(3000);
    }  
  }
};
</script>
<style scoped>
</style>