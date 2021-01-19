<template>
  <div>
    <h1 style="color: green">Standort-Test</h1>
    <button @click="getGPS">Standort anfragen</button>
    <div id="standort"></div>
  </div>
</template>

<script>
export default {
  name: "Gps",
  methods: {
    getGPS() {
      const standort = document.getElementById("standort");

      if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(location) {
                var newLocation = document.createElement("p");
                newLocation.innerHTML = "Standort: " + location.coords.latitude + ", " + location.coords.longitude;
                standort.appendChild(newLocation);
            });
      } else {
        standort.innerText = "Gps Interface not supported by this browser.";
      }
    }
  }
};
</script>
<style scoped>
</style>