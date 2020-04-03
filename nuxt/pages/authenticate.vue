<template>
  <section>
    <navigation />
    <h1>Authenticate!</h1>
    <form class="auth-form">
      <ul>
        <li><input v-model="email" placeholder="email" /></li>
        <li><input v-model="password" placeholder="password" type="password" /></li>
      </ul>
      <button :class="{ 'is-loading': isLoggingIn }" @click.prevent="login">Login</button> or <button :class="{ 'is-loading': isSigningUp }" class="ghost" @click.prevent="signup">Sign up</button>
    </form>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import Navigation from '../components/navigation';

export default {
  name: 'Login',
  components: { Navigation },

  data() {
    return {
      email: 'Hosea_Goldner@hotmail.com',
      password: '89bd9d8d69a674e0f467cc8796ed151a05dfc2ddf7cc78ca1ba928fc8167',
      isLoggingIn: false,
      isSigningUp: false,
    };
  },

  methods: {
    ...mapActions('auth', ['authenticate']),
    ...mapActions('users', ['create']),

    async login() {
      const credentials = { email: this.email, password: this.password };
      this.isLoggingIn = true;
      await this.authenticate({ ...credentials, strategy: 'local' });
      this.isLoggingIn = false;
      this.$router.push('/secret');
    },

    async signup() {
      const credentials = { email: this.email, password: this.password };
      this.isSigningUp = true;
      await this.create(credentials);
      await this.authenticate({ ...credentials, strategy: 'local' });
      this.isSigningUp = false;
      this.$router.push('/secret');
    }
  }
}
</script>

<style>
.auth-form ul {
  list-style: none;
  padding: 0;
}

.auth-form li + li {
  margin-top: .5em;
}
</style>

