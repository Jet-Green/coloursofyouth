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
      <transition name="page" mode="out-in">
        <router-view @update="onUpdate" />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import router from "./router/index";
export default {
  name: "App",

  data: () => ({
    routes: router.options.routes,
    current: 0,
    inMove: false,
  }),
  mounted() {
    this.addListeners();
  },
  methods: {
    onUpdate: function (c) {
      // console.log(c);
      // console.log(this.routes);
    },
    handleMouseWheelDOM: function (e) {
      // console.log(this.current);
      let c = document.getElementById("container");
      if (window.innerHeight == c.scrollHeight) {
        if (e.deltaY < 0) {
          this.current -= 1;
        } else {
          this.current += 1;
        }
        this.correctCurrent();
        router.push(this.routes[this.current].path);
      } else if (e.deltaY > 0) {
        if (window.innerHeight + window.pageYOffset == c.scrollHeight) {
          this.current += 1;
          this.correctCurrent();
          router.push(this.routes[this.current].path);
        }
      } else {
        this.current -= 1;
        this.correctCurrent();
        router.push(this.routes[this.current].path);
      }
    },
    handleMouseWheel: function (e) {
      let c = document.getElementById("container");
      if (window.innerHeight == c.scrollHeight) {
        if (e.deltaY < 0) {
          this.current -= 1;
        } else {
          this.current += 1;
        }
        this.correctCurrent();
        router.push(this.routes[this.current].path);
      } else if (e.deltaY > 0) {
        if (window.innerHeight + window.pageYOffset == c.scrollHeight) {
          this.current += 1;
          this.correctCurrent();
          router.push(this.routes[this.current].path);
        }
      } else {
        this.current -= 1;
        this.correctCurrent();
        router.push(this.routes[this.current].path);
      }
    },
    touchStart(e) {
      this.touchStartY = e.touches[0].clientY;
    },
    touchMove(e) {
      if (this.inMove) return false;
      console.log(this.current);
      const currentY = e.touches[0].clientY;
      if (this.touchStartY < currentY) {
        this.current -= 1;
        this.correctCurrent();
        this.inMove = true;
        router.push(this.routes[this.current].path);
      } else {
        this.current += 1;
        this.correctCurrent();
        this.inMove = true;
        router.push(this.routes[this.current].path);
      }
      this.touchStartY = 0;
      setTimeout(() => (this.inMove = false), 500);
      return false;
    },
    addListeners: function () {
      window.addEventListener("wheel", this.handleMouseWheelDOM); // Mozilla Firefox
      window.addEventListener("mousewheel", this.handleMouseWheel); // Other browsers
      window.addEventListener("touchstart", this.touchStart); // mobile devices
      window.addEventListener("touchmove", this.touchMove);
    },
    moveUp: function () {},
    correctCurrent: function () {
      if (this.current < 0) this.current = this.routes.length - 1;
      if (this.current > this.routes.length - 1) this.current = 0;
    },
  },
};
</script>
