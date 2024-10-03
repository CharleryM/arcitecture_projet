<template>
  <div>
    <nav>
      <router-link to="/login">Login</router-link>
      <router-link to="/graph">Graphique</router-link>
      <router-link to="/form">Formulaire</router-link>
    </nav>
    <router-view /> 
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
nav {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 20px;
}
</style>
