<template>
  <div>
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      const loginUrl =
        'https://spendwise.auth.eu-west-3.amazoncognito.com/oauth2/authorize?response_type=code&client_id=7ds8aruedeqf5jotdl6ung76n5&redirect_uri=https://dgklnacx3mgmx.cloudfront.net'
      window.location.href = loginUrl
    }
  }
}
</script>
