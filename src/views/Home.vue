<template>
  <div>
    <welcome />
    <justLogo />
    <whoAreWe />
  </div>
</template>

<script>
import Welcome from "../components/Welcome.vue";
import justLogo from "../components/justLogo.vue";
import whoAreWe from "../components/whoAreWe.vue";
export default {
  name: "Home",

  components: { Welcome, justLogo, whoAreWe },
};
</script>
