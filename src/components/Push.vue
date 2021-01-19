<template>
  <div>
    <h1 style="color: green">Push-Test</h1>
    <p>Current permission status is <b id="status">nicht angefragt</b>.</p>
    <p><button @click="requestPermission()">Berechtigung anfragen</button></p>
    <p><button @click="nonPersistentNotification()">Non-persistent notification</button></p>
    <p><button @click="persistentNotification()">Persistent notification</button></p>
  </div>
</template>

<script>
export default {
  name: "Push",
  methods: {
    requestPermission() {
      
      const $status = document.getElementById('status');
  
      if ('Notification' in window) {
        $status.innerText = Notification.permission;
      }
      if (!('Notification' in window)) {
        alert('Notification API not supported!');
        return;
      }
  
      Notification.requestPermission(function (result) {
        $status.innerText = result;
      });
    },

    nonPersistentNotification() {
      if (!('Notification' in window)) {
        alert('Notification API not supported!');
        return;
      }
  
      try {
         new Notification("Hi there - non-persistent!");
      } catch (err) {
        alert('Notification API error: ' + err);
      }
    },

    persistentNotification() {
      if (!('Notification' in window) || !('ServiceWorkerRegistration' in window)) {
        alert('Persistent Notification API not supported!');
        return;
      }
  
      try {
        navigator.serviceWorker.getRegistration()
          .then((reg) => reg.showNotification("Hi there - persistent!"))
          .catch((err) => alert('Service Worker registration error: ' + err));
      } catch (err) {
        alert('Notification API error: ' + err);
      }
  }
}
}
</script>
<style scoped>
</style>
