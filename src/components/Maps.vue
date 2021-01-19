<template>
  <div>
    <h1 style="color: green">Maps-Test</h1>
    <div>
      <center>
        <GmapMap
          :center="{lat:48.5, lng:8}"
          :zoom="7"
          map-type-id="terrain"
          style="width: 500px; height: 300px"
        >
        </GmapMap>
      </center>
    </div>
  </div>
</template>

<script>
export default {
  name: "Maps"
};
</script>
<style scoped>
</style>
