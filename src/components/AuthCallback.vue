<template>
  <div>
    <h1>Login successful</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    // Get the access token from the URL hash
    const hash = window.location.hash
    const token = hash
      .split('&')
      .find((elem) => elem.startsWith('access_token'))
      .split('=')[1]

    if (token) {
      // Store the token (e.g., in localStorage or Vuex)
      localStorage.setItem('accessToken', token)

      // Optionally redirect to another page after login
      this.$router.push('/home') // or any other route
    }
  }
}
</script>
