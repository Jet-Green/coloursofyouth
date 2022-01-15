<template>
  <div id="container">
    <v-img
      height="100vh"
      :eager="true"
      class="align-center"
      src="../assets/pages/whoAreWe.png"
    >
      <v-row class="justify-center">
        <v-col cols="11" md="8" class="text-center"
          ><p class="text-h4 text-md-h2 font-italic font-weight-medium">
            Who Are We?
          </p>
          <p class="text-subtitle-1 text-sm-h6 text-md-h4">
            Youth is the future leader of each country in the world. Every
            single youth will have a big impact on how life in the future will
            look like. Therefore, every youth should have a preparation that
            needs to be developed through something. That's why "Coloursof
            Youth" was found to prepare the young generation about the future
            they will face.
          </p>
          <p class="text-subtitle-1 text-sm-h6 text-md-h4">
            Coloursof Youth itself is a non-profit organization that encourages
            youth from all around the world to get together and share their
            vision to make a good impact on the world. This organization will
            hold programs that could improve the youth's knowledge about
            cultures from all around the world and step aside the differences to
            create a better world. We will raise up the value of "Unity in
            Diversity" to make a beneficial outcome for all youth around the
            world.
          </p>
        </v-col>
      </v-row>
    </v-img>
  </div>
</template>

<script>
export default {
  name: "whoAreWe",
};
</script>
<style>
p {
  color: white;
}
</style>