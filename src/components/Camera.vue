<template>
  <div>
    <h1 style="color: green">Kamera-Test</h1>
      <p>
        <button type="button" @click="getStream('video')">Kamera aktivieren</button>
      </p>
      <video controls autoplay style="height:360px; width: 480px;"></video>
  </div>
</template>

<script>
export default {
  name: "Camera",
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

      var apicheck =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;

      if (apicheck) {
        return new Promise(function(resolve, reject) {
          apicheck.bind(navigator)(constraints, resolve, reject);
        });
      }
    },

    getStream(type) {
      if (!navigator.mediaDevices && !navigator.getUserMedia 
          && !navigator.webkitGetUserMedia && !navigator.mozGetUserMedia 
          && !navigator.msGetUserMedia) {
        alert("User Media Interface not supported.");
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
            mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
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