<template>
  <div id="container">
    <v-img
      height="100vh"
      :eager="true"
      class="align-center justify-center"
      src="../assets/pages/welcomebackground.png"
    >
      <p class="text-h4 text-md-h2 font-weight-medium text-center">
        Welcome to Colours Of Youth Website
      </p>
      <v-img src="../assets/logo.png" height="260px" contain></v-img>
    </v-img>
  </div>
</template>

<script>
export default {
  name: "Welcome",
};
</script>

<style scoped>
</style>
