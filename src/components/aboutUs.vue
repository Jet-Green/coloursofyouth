<template>
  <div>
    <v-img
      height="100vh"
      class="align-center"
      src="../assets/pages/aboutUs.png"
    >
      <v-row class="justify-center align-center">
        <v-spacer></v-spacer>
        <v-col cols="11" sm="3" class="ma-0 pa-0 ml-4"
          ><p class="text-h4 text-md-h1 font-weight-bold ma-0">About Us?</p>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="11" sm="6" class="ma-0 pa-0 ml-4 mr-md-4">
          <p
            class="
              text-subtitle-1 text-sm-h6 text-md-h4
              font-weight-medium
              mr-4
              over-p
            "
          >
            Our founder started this organization in 2021. <br />He is the
            former head of the student council in his school. He has a lot of
            connections from around the world. Both of these things inspire him
            to start a non-profit organization that can unite youths from
            different backgrounds and cooperates together to make a positive
            outcome for the world especially the youth.
          </p>
          <p
            class="
              text-subtitle-1 text-sm-h6 text-md-h4
              font-weight-medium
              mr-4
              over-p
            "
          >
            Our goal has always been to raise the value of "Unity in Diversity"
            and hold programs that can make an impact on the world, and also
            develop youth skills in leadership, teamwork, critical thinking, and
            problem-solving, at the same time.
          </p>
        </v-col>
      </v-row>
    </v-img>
  </div>
</template>

<script>
export default {
  name: "aboutUs",
};
</script>
<style>
p {
  color: white;
}
.over-p {
  color: #7361b3;
}
</style>