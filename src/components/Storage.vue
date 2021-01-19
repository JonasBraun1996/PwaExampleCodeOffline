<template>
  <div>
    <h1 style="color: green">Speicher-Test</h1>
    <p> Benutzer Speicher <b id="usage">unbekannt</b> bytes.</p>
    <p> Geschätzter freier Speicher ist <b id="quota">unbekannt</b> bytes.</p>
    <p> Geschätzter Verbrauch ist <b id="percent">unbekannt</b>%.</p>
    <p> Dauerhafter Speicher ist <b id="persisted">unbekannt</b>.</p>
    <p><button @click="requestStorage()">Speicherzugriff</button></p>
  </div>
</template>

<script>
export default {
  name: "Storage",
  methods: {
    requestStorage(){
        if ('storage' in navigator && 'estimate' in navigator.storage) {
            navigator.storage.estimate().then(estimate => {
                document.getElementById('usage').innerHTML = estimate.usage;
                document.getElementById('quota').innerHTML = estimate.quota;
                document.getElementById('percent').innerHTML = (estimate.usage * 100 / estimate.quota).toFixed(0);
            });
        }

        if ('storage' in navigator && 'persisted' in navigator.storage) {
        navigator.storage.persisted().then(persisted => {
            document.getElementById('persisted').innerHTML = persisted ? 'persisted' : 'not persisted';
            });
        }

        if ('storage' in navigator && 'persist' in navigator.storage) {
            navigator.storage.persist()
            .then(persisted => {
                document.getElementById('persisted').innerHTML = persisted ? 'persisted' : 'not persisted';
            });
        }
    }
  }
}
</script>
<style scoped>
</style>