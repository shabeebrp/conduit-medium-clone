<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <router-link to="/register">Need an account?</router-link>
          </p>
          <ul class="error-messages">
            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
          </ul>
          <form>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
                v-model="email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="password"
              />
            </fieldset>
            <button
              class="btn btn-lg btn-primary pull-xs-right"
              :disabled="disableLoginButton"
              @click="login"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatApiErrors } from "@/commons/errorFormatter";
export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      disableLoginButton: false
    };
  },
  methods: {
    login() {
      var email = this.email;
      var password = this.password;
      this.disableLoginButton = true;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push({ name: "Home" }))
        .catch(error => {
          this.errors = formatApiErrors(error.response.data.errors);
        })
        .then(() => (this.disableLoginButton = false));
    }
  }
};
</script>
