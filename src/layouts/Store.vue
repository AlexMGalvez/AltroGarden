<template>
  <v-app>
    <v-container>
      <v-row align="center">
        <v-card width="100%" class="mt-5 ma-2 pa-8">
          <v-app-bar absolute app flat class="primary" height="120">
            <v-col cols="6">
              <g-link to="/"
                ><v-img src="/altro-garden3.png" max-width="220" contain></v-img
              ></g-link>
            </v-col>
            <v-col cols="6" class="text-right">
              <v-row align="center">
                <v-spacer></v-spacer>
                <p
                  class="snipcart-total-price brownText--text"
                  style="margin-bottom: 0px"
                >
                  {{ this.totalPrice | toCurrency }}
                </p>
                <g-link class="snipcart-checkout">
                  <v-btn icon>
                    <v-icon>mdi-cart</v-icon>
                  </v-btn>
                </g-link>

                <!-- for mobile screens -->
                <template>
                  <v-btn
                    class="hidden-md-and-up"
                    align-self="end"
                    icon
                    @click="dialog = !dialog"
                  >
                    <v-icon>mdi-magnify</v-icon>
                  </v-btn>
                </template>
                <v-dialog v-model="dialog" max-width="500px">
                  <v-card>
                    <v-card-text>
                      <v-text-field
                        placeholder="Search"
                        v-model="searchText"
                        @click:clear="searchText = ''"
                        @keyup.enter="dialog = false"
                      ></v-text-field>
                    </v-card-text>
                  </v-card>
                </v-dialog>

                <!-- for large screens -->
                <v-text-field
                  v-model="searchText"
                  @click:clear="searchText = ''"
                  placeholder="Search"
                  class="secondary hidden-sm-and-down"
                  style="max-width: 200px"
                  prepend-inner-icon="mdi-magnify"
                  clearable
                  outlined
                  dense
                  hide-details
                />
              </v-row>
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
      dialog: false,
      searchText: "",
      totalPrice: 0,
    };
  },
  methods: {
    getTotalPrice: function () {
      return Snipcart.store.getState().cart.total;
    },
  },
  mounted: function () {
    this.totalPrice = this.getTotalPrice();
  },
};
</script>

<style scoped>
/* .v-text-field {
  position: absolute;
  right: 20px;
} */

.v-toolbar__title a {
  text-decoration: none;
  color: #000;
}

.theme--light.v-application {
  background-image: linear-gradient(white, green);
}
</style>

