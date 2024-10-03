<template>
  <div class="login-form">
    <h2>Connexion</h2>
    <label for="username">Nom d'utilisateur</label>
    <input type="text" id="username" v-model="form.username" class="form-input" placeholder="Entrer votre nom d'utilisateur" />

    <label for="password">Mot de passe</label>
    <input type="password" id="password" v-model="form.password" class="form-input" placeholder="Entrer votre mot de passe" />

    <button @click="login" class="submit-button">Se connecter</button>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify';

export default {
  name: 'login_form',
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
          async signIn() {
              try {
                  const user = await Auth.signIn(this.email, this.password);
                  console.log('Connexion réussie', user);
              } catch (error) {
                  console.error('Erreur lors de la connexion', error);
              }
          },
      },
};
</script>

<style scoped>
  .login-form {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  .form-input {
    padding: 10px;
    margin-top: 8px;
    border-radius: 5px;
    border: 1px solid #ddd;
  }

  .submit-button {
    margin-top: 20px;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
  }
</style>
