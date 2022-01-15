<template>
  <div id="container">
    <v-img
      height="100vh"
      :eager="true"
      class="align-center"
      src="../assets/pages/purpose.jpg"
    >
      <v-row class="justify-center my-4">
        <v-col md=7 cols=11>
          <v-card style="border-radius: 34px; opacity: 0.9;">
            <div class="pa-6">
              <p class="text-h4 text-md-h2 text-center font-weight-medium font-italic" style="color: #9687D2">Purpose</p>
              <p class="text-subtitle-1 text-sm-h6 text-md-h4 over-p">
                <ul>
                  <li>To encourage youth from all around the world to share their visions and start to realize them.</li>
                  <li>To step aside differences we have and raise up the value of "Unity in Diversity"</li>
                  <li>To improve youth knowledge about cultures and grow respect/tolerance behavior. </li>
                  <li>To make programs that can have a good impact on the world through activities for people, the environment, and others especially the youth. </li>
                  <li>To prepare the young generation by developing skills and talent they have through programs in the organization. </li>
                </ul>
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-img>
  </div>
</template>

<script>
export default {
  name: "Purpose",
};
</script>

<style scoped>
.over-p {
  color: #7361b3;
}
</style>
