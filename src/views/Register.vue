<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <router-link to="/login">Have an Account?</router-link>
          </p>

          <ul class="error-messages">
            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
          </ul>

          <form>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
                v-model="name"
              />
            </fieldset>
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
              @click="register"
              :disabled="disableRegisterButton"
            >
              Sign up
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
      name: "",
      email: "",
      password: "",
      errors: [],
      disableRegisterButton: false
    };
  },
  methods: {
    register() {
      var username = this.name;
      var email = this.email;
      var password = this.password;
      this.disableRegisterButton = true;
      this.$store
        .dispatch("register", { username, email, password })
        .then(() => this.$router.push({ name: "Home" }))
        .catch(error => {
          this.errors = formatApiErrors(error.response.data.errors);
        })
        .then(() => (this.disableRegisterButton = false));
    }
  }
};
</script>
