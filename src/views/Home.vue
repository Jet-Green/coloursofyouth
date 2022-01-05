<template>
  <div>
    <section>
      <welcome id="welcome" />
    </section>
    <section><justLogo id="just-logo" /></section>
    <section><whoAreWe /></section>
  </div>
</template>

<script>
import Welcome from "../components/Welcome.vue";
import justLogo from "../components/justLogo.vue";
import whoAreWe from "../components/whoAreWe.vue";

export default {
  name: "Home",
  data: () => ({
    inMove: false,
    activeSection: 0,
    offsets: [],
    touchStartY: 0,

    // scrollContainer: null,
  }),
  components: { Welcome, justLogo, whoAreWe },

  mounted() {
    this.calculateSectionOffsets();

    window.addEventListener("wheel", this.handleMouseWheelDOM, {
      passive: false,
    }); // Mozilla Firefox
    window.addEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    }); // Other browsers
    window.addEventListener("touchstart", this.touchStart, {
      passive: false,
    }); // mobile devices
    window.addEventListener("touchmove", this.touchMove, {
      passive: false,
    }); // mobile devices
  },
  destroyed() {
    window.removeEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    }); // Other browsers
    window.removeEventListener("wheel", this.handleMouseWheelDOM, {
      passive: false,
    }); // Mozilla Firefox
    window.removeEventListener("touchstart", this.touchStart); // mobile devices
    window.removeEventListener("touchmove", this.touchMove); // mobile devices
  },
  methods: {
    calculateSectionOffsets() {
      let sections = document.getElementsByTagName("section");
      let length = sections.length;
      for (let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
      }
    },
    moveDown: function () {
      this.inMove = true;
      this.activeSection--;
      if (this.activeSection < 0) this.activeSection = this.offsets.length - 1;
      this.scrollToSection(this.activeSection, true);
    },
    moveUp: function () {
      this.inMove = true;
      this.activeSection++;
      if (this.activeSection > this.offsets.length - 1) this.activeSection = 0;
      this.scrollToSection(this.activeSection, true);
    },
    handleMouseWheelDOM: function (e) {
      if (e.deltaY > 0 && !this.inMove) {
        this.moveUp();
      } else if (e.deltaY < 0 && !this.inMove) {
        this.moveDown();
      }
      e.preventDefault();
      return false;
    },
    handleMouseWheel: function (e) {
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }
      e.preventDefault();
      return false;
    },
    touchStart(e) {
      e.preventDefault();
      this.touchStartY = e.touches[0].clientY;
    },
    touchMove(e) {
      if (this.inMove) return false;
      e.preventDefault();
      const currentY = e.touches[0].clientY;
      if (this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }
      this.touchStartY = 0;
      return false;
    },
    scrollToSection(id, force = false) {
      if (this.inMove && !force) return false;
      this.activeSection = id;
      this.inMove = true;
      document.getElementsByTagName("section")[id].scrollIntoView({
        behavior: "smooth",
      });
      setTimeout(() => {
        this.inMove = false;
      }, 400);
    },
  },
};
</script>
