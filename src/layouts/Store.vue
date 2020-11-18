<template>
  <v-app>
    <v-container>
      <v-row align="center">
        <v-card width="100%" class="mt-5 ma-2 pa-8">
          <v-app-bar absolute app flat class="primary" height="120">
            <v-col sm="10">
              <g-link to="/"
                ><v-img src="/altro-garden3.png" max-width="220" contain></v-img
              ></g-link>
            </v-col>
            <v-col sm="2" align-self="end">
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
            </v-col>
            <template v-slot:extension>
              <v-tabs color="white" show-arrows right>
                <v-tab to="/">Home</v-tab>
                <v-tab to="/products">Our Plants</v-tab>
                <v-tab to="/contact">Contact</v-tab>
              </v-tabs>
            </template>
          </v-app-bar>
          <v-main>
            <v-container>
              <v-row>
                <v-col>
                  <slot :searchText="searchText" />
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
      searchText: "",
    };
  },
};
</script>

<style scoped>
.v-toolbar__title a {
  text-decoration: none;
  color: #000;
}

.theme--light.v-application {
  background-image: linear-gradient(white, green);
}
</style>

