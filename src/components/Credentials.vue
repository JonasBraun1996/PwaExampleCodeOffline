<template>
  <div>
    <h1 style="color: green">Credentials-Test</h1>
    <div class="columns">
      <div class="column">
        <form id="credential-form" @submit="storeCredential(event)">
          <p>
            <label>
              login:
              <input type="text" name="username" required autocomplete="username" />
            </label>
            <label>
              password:
              <input
                type="password"
                name="password"
                required
                autocomplete="current-password"
              />
            </label>
          </p>
          <p>
            <button type="submit">Store credential</button>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Credentials",
  methods: {
    storeCredential() {
      event.preventDefault();

      if (!navigator.credentials) {
        alert("Credential Management API not supported");
        return;
      }
      
      let credentialForm = document.getElementById("credential-form");
      /*eslint-disable */
      let credential = new PasswordCredential(credentialForm);
      /*eslint-enable */
      navigator.credentials.store(credential).then(() => this.log(
        "Storing credential for " + credential.id + " (result cannot be checked by the website)."
      )).catch(err => this.log("Error storing credentials: " + err));
    },
  }
};
</script>
<style scoped>
</style>