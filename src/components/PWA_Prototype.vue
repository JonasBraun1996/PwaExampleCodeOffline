<template>
  <div>
    <h1>Progressive Web Application</h1>
    <h2>Prototyp</h2>
    <div>
      <hr size="10" color="grey"/>
      <storage></storage>
      <hr size="10" color="grey"/>
      <Gps></Gps>
      <hr size="10" color="grey"/>
      <camera></camera>
      <hr size="10" color="grey"/>
      <upload></upload>
      <hr size="10" color="grey"/>
      <!-- <google-map></google-map> -->
      <maps></maps>
      <hr size="10" color="grey"/>
      <email></email>
      <hr size="10" color="grey"/>
      <bluetooth></bluetooth>
      <hr size="10" color="grey"/>
      <push></push>
      <hr size="10" color="grey"/>
      <internet></internet>
      <hr size="10" color="grey"/>
      <background-sync></background-sync>
      <hr size="10" color="grey"/>
      <anruf></anruf>
      <hr size="10" color="grey"/>
      <credentials></credentials>
      <hr size="10" color="grey"/>
      <vibration></vibration>
      <hr size="10" color="grey"/>
      <microfon></microfon>
    </div> 
  </div>
</template>

<script>
import Storage from './Storage.vue';
import Gps from './Gps.vue';
import Camera from './Camera.vue';
import Upload from './Upload.vue';
// import GoogleMap from './GoogleMap.vue';
import Maps from './Maps.vue';
import Email from './Email.vue';
import Bluetooth from './Bluetooth.vue';
import Push from './Push.vue';
import Internet from './Internet.vue';
import BackgroundSync from './BackgroundSync.vue';
import Anruf from './Anruf.vue';
import Credentials from './Credentials.vue';
import Vibration from './Vibration.vue';
import Microfon from './Microfon.vue';

export default {
  name: 'Pwa',
  props: {
  },
  components: {
    Storage,
    Gps,
    Camera,
    Upload,
    // GoogleMap,// 
    Maps,
    Email,
    Bluetooth,
    Push,
    Internet,
    BackgroundSync,
    Anruf,
    Credentials,
    Vibration,
    Microfon
  }
}
</script>
<style scoped>
</style>
