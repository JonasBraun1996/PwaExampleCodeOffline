<template>
  <div>
    <h1 style="color: green"> Mikrofon-Test</h1>
    <p>
      <button type="button" @click="getStream('audio')">Mikrofon aktivieren</button>
    </p>
    <audio controls></audio>
  </div>
</template>

<script>
export default {
  name: "Microfon",
  data: function() {
    return {
      constraints: {}
    };
  },
  methods: {
    getUserMedia(constraints) {
      if (navigator.mediaDevices) {
        return navigator.mediaDevices.getUserMedia(constraints);
      }

      var legacyApi =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;

      if (legacyApi) {
        return new Promise(function(resolve, reject) {
          legacyApi.bind(navigator)(constraints, resolve, reject);
        });
      }
    },

    getStream(type) {
      if (
        !navigator.mediaDevices &&
        !navigator.getUserMedia &&
        !navigator.webkitGetUserMedia &&
        !navigator.mozGetUserMedia &&
        !navigator.msGetUserMedia
      ) {
        alert("User Media API not supported.");
        return;
      }

      this.constraints[type] = true;

      this.getUserMedia(this.constraints)
        .then(function(stream) {
          var mediaControl = document.querySelector(type);

          if ("srcObject" in mediaControl) {
            mediaControl.srcObject = stream;
          } else if (navigator.mozGetUserMedia) {
            mediaControl.mozSrcObject = stream;
          } else {
            mediaControl.src = (window.URL || window.webkitURL).createObjectURL(
              stream
            );
          }

          mediaControl.play();
        })
        .catch(function(err) {
          alert("Error: " + err);
        });
    }
  }
};
</script>
<style scoped>
</style>