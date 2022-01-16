<template>
  <div>
    <welcome />
    <div style="height: 4vh; background-color: white"></div>
    <justLogo />
    <div style="height: 4vh; background-color: white"></div>
    <whoAreWe />
    <div style="height: 4vh; background-color: white"></div>
    <purpose />
    <div style="height: 4vh; background-color: white"></div>
    <aboutUs />
    <div style="height: 4vh; background-color: white"></div>
    <howItWorks />
  </div>
</template>

<script>
import Welcome from "../components/welcome.vue";
import JustLogo from "../components/justLogo.vue";
import whoAreWe from "../components/whoAreWe.vue";
import Purpose from "../components/purpose.vue";
import aboutUs from "../components/aboutUs.vue";
import howItWorks from "../components/howItWorks.vue";
export default {
  components: {
    Welcome,
    JustLogo,
    whoAreWe,
    aboutUs,
    howItWorks,
    Purpose,
  },
};
</script>

<style scoped>
</style>
