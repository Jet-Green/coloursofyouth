<template>
  <v-app>
    <v-navigation-drawer fixed temporary v-model="drawer" app>
      <v-list nav>
        <!-- active-class="deep-purple--text text--accent-4" -->
        <v-list-item-group>
          <v-list-item v-for="(item, key) in routes" :key="key">
            <v-list-item-content @click="routeTo(item.path)">
              <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app rounded hide-on-scroll color="#FFD184">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="d-flex d-sm-none"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <template>
        <!-- align-with-title -->
        <v-tabs v-model="tab" grow color="#9687D2" class="d-none d-sm-block">
          <v-tabs-slider color="#9687D2"></v-tabs-slider>
          <v-tab v-for="(item, i) in routes" :key="i">{{ item.name }}</v-tab>
        </v-tabs>
      </template>
      <!-- <div class="d-flex d-sm-none"></div> -->
      <div class="ml-5 d-flex">
        <a
          href="https://www.instagram.com/coloursofyouthorg/"
          target="_blank"
          style="text-decoration: none"
          class="mr-5"
        >
          <v-icon icon="mdi-instagram" color="" class="r">
            mdi-instagram
          </v-icon>
        </a>
        <a
          href="mailto:coloursofyouthorg@gmail.com"
          target="_blank"
          style="text-decoration: none"
        >
          <v-icon icon="mdi-gmail" color="" class="r"> mdi-gmail </v-icon>
        </a>
      </div>
    </v-app-bar>

    <v-main>
      <v-tabs-items v-model="tab" class="d-none d-sm-block">
        <v-tab-item v-for="(item, index) in routes" :key="index">
          <component :is="(routes.component = item.component)"></component>
        </v-tab-item>
      </v-tabs-items>
      <router-view class="d-block d-sm-none" />
    </v-main>
  </v-app>
</template>

<script>
import router from "./router/index";
import Home from "./views/Home.vue";
import Welcome from "./components/welcome.vue";
import JustLogo from "./components/justLogo.vue";
import whoAreWe from "./components/whoAreWe.vue";
import Purpose from "./components/purpose.vue";
import aboutUs from "./components/aboutUs.vue";
import howItWorks from "./components/howItWorks.vue";

export default {
  name: "App",

  data: () => ({
    tab: null,
    drawer: false,
    routes: [
      {
        name: "Home",
        path: "/",
        icon: "",
        component: Home,
      },
      {
        name: "Who Are We?",
        path: "/who-are-we",
        icon: "",
        component: whoAreWe,
      },
      {
        name: "Purpose",
        path: "/purpose",
        icon: "",
        component: Purpose,
      },
      {
        name: "About Us",
        path: "/about",
        icon: "",
        component: aboutUs,
      },
      {
        name: "How Colours Of Youth Works",
        path: "/workflow",
        icon: "",
        component: howItWorks,
      },
    ],
  }),
  mounted() {},
  methods: {
    routeTo: function (path) {
      router.push(path);
    },
  },
};
</script>
<style scoped lang="scss">
.r {
  cursor: pointer;
  opacity: 1;
  &:hover {
    opacity: 1.3;
    transform: scale(1.3);
  }
}
</style>
