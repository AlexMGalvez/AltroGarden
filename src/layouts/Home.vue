<template>
  <v-app>
    <v-container>
      <v-row align="center">
        <v-card width="100%" class="mt-5 ma-2">
          <v-app-bar absolute app flat class="primary" height="120">
            <v-col sm="10">
              <g-link to="/"
                ><v-img src="/altro-garden3.png" max-width="220" contain></v-img
              ></g-link>
            </v-col>
            <!-- <v-col sm="2" align-self="end">
              <v-text-field
                v-model="searchText"
                @click:clear="searchText = ''"
                placeholder="Search"
                class="secondary"
                style="max-width: 300px"
                prepend-inner-icon="mdi-magnify"
                clearable
                outlined
                dense
                hide-details
              />
            </v-col> -->
            <template v-slot:extension>
              <v-tabs color="white" show-arrows right>
                <v-tab to="/">Home</v-tab>
                <v-tab to="/products">Our Plants</v-tab>
                <v-tab to="/contact">Contact</v-tab>
              </v-tabs>
            </template>
          </v-app-bar>
          <v-main>
            <v-carousel
              cycle
              height="300"
              hide-delimiter-background
              show-arrows-on-hover
            >
              <v-carousel-item v-for="(slideTitle, i) in slideTitles" :key="i">
                <v-img :src="images[i]" height="100%">
                  <v-row class="fill-height" align="center" justify="end">
                    <div class="entry-container">
                      <h3>
                        <span>{{ slideTitle }}</span>
                      </h3>
                      <p>
                        {{ slideDescriptions[i] }}
                      </p>
                    </div>
                  </v-row>
                </v-img>
              </v-carousel-item>
            </v-carousel>
            <v-container>
              <v-row>
                <v-col>
                  <slot />
                  <!-- <slot :searchText="searchText" /> -->
                </v-col>
              </v-row>
            </v-container>
          </v-main>
          <v-footer absolute app flat class="primary">
            <v-spacer></v-spacer>
            <div>
              <small class="white--text"
                >Copyright &copy; {{ new Date().getFullYear() }} Altro
                Garden</small
              >
            </div>
          </v-footer>
        </v-card>
      </v-row>
    </v-container>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      //searchText: "",
      images: ["/slide2.jpg", "/slide3.jpg", "/slide4.jpg", "/slide1.jpg"],
      slideTitles: [
        "Cold Hardy Fruiting Plants",
        "Self Sustainable Living",
        "Rare Exotics",
        "Unique Fig Varieties",
      ],
      slideDescriptions: [
        "Many of our unique fruiting plants can be grown on your yard and survive the Canadian climate. Just make sure to conform to your plant hardiness zone when checking our selection.",
        "Our permaculture inspired selection of plants yearly produce food with little to no effort when adhered to permaculture standards.",
        "We sell a variety of exotic fruiting plants that are very difficult to find in Canada. For niche plants check out our exotics section.",
        "Finding a large selection of fig plants can be difficult, especially in Ontario. You may not be able to plant most of these fig varities outside, but they can still be grown successfuly indoors.",
      ],
    };
  },
};
</script>

<style scoped>
.v-toolbar__title a {
  text-decoration: none;
  color: #000;
}

.entry-container {
  padding: 20px;
  margin-right: 80px;
  width: 500px;
  background: rgba(67, 160, 71, 0.8);
}

.theme--light.v-application {
  background-image: linear-gradient(white, green);
}

/* fixes overflow bug on small screens */
.v-carousel .v-window-item {
  position: absolute;
  top: 0;
  width: 100%;
}

/* fixes overflow bug on small screens */
.v-carousel-item {
  height: auto;
}
</style>



