<template>
  <div id="container">
    <v-img
      height="100vh"
      :eager="true"
      class="align-center"
      src="../assets/pages/justlogo.png"
    >
    </v-img>
  </div>
</template>

<script>
export default {
  name: "justLogo",
  mounted() {
    let c = document.getElementById("container").scrollHeight;
    this.$emit("update", c);
  },
};
</script>

<style>
</style>