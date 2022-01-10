<template>
  <v-app>
    <!-- <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

       <v-btn target="_blank" text> </v-btn>
    </v-app-bar> -->

    <v-main>
      <router-view @update="onUpdate" v-scroll="onScroll" />
    </v-main>
  </v-app>
</template>

<script>
import router from "./router/index";
export default {
  name: "App",

  data: () => ({
    routes: router.options.routes,
  }),
  methods: {
    onUpdate: function (c) {
      console.log(c);
      console.log(this.routes);
    },
    onScroll: function (e) {},
  },
};
</script>
