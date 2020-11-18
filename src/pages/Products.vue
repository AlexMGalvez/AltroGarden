<template>
  <Layout v-slot="{ searchText }">
    <v-row style="margin-bottom: 20px;">
      <v-col sm="8" offset-sm="2">
        <!-- for mobile screens -->
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary hidden-md-and-up" v-bind="attrs" v-on="on">
              CATEGORIES
            </v-btn>
          </template>
          <v-list v-model="list">
            <v-list-item @click="showAllProducts()">
              <v-list-item-title>All Plants</v-list-item-title>
            </v-list-item>
            <v-list-item @click="showProductsByType(1)">
              <v-list-item-title>Exotics</v-list-item-title>
            </v-list-item>
            <v-list-item @click="showProductsByType(2)">
              <v-list-item-title>Permaculture</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- for large screens -->
        <v-tabs v-model="tab" class="hidden-sm-and-down" show-arrows grow>
          <v-tab>All Plants</v-tab>
          <v-tab>Exotics</v-tab>
          <v-tab>Permaculture</v-tab>
        </v-tabs>

        <v-tabs-items class="hidden-sm-and-down" v-model="tab">
          <v-tab-item>
            <v-card flat>
              <v-card-text class="brownText--text"
                >Everything that our store has to offer.</v-card-text
              >
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text class="brownText--text"
                >Rare and exotic plants from around the world. Most of these
                plants should be grown indoors.</v-card-text
              >
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text class="brownText--text"
                >Permaculture inspired plants that can be grown outside
                depending on your plant hardiness zone.</v-card-text
              >
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>

    <v-row justify="center">
      <div
        v-for="edge in getProducts(searchText)"
        :key="edge.node.id"
        @click="$router.push(`/products/${edge.node.id}`)"
      >
        <v-hover v-slot:default="{ hover }">
          <div>
            <v-card width="240" height="340" class="ma-2 secondary row-pointer">
              <v-img
                height="200px"
                :src="`${edge.node.thumbnail}`"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out green darken-2 v-card--reveal display-1 white--text"
                    style="height: 100%"
                  >
                    <h3 v-if="edge.node.inStock">
                      {{ edge.node.price | toCurrency }}
                    </h3>
                    <h3 v-else>SOLD OUT</h3>
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text class="pa-2 d-flex flex-column">
                <v-card-title class="text-center d-inline-block">{{
                  edge.node.name
                }}</v-card-title>
              </v-card-text>
            </v-card>
          </div>
        </v-hover>
      </div>
    </v-row>
  </Layout>
</template>

<page-query>
query {
  products: allProduct {
    edges {
      node {
        id
        name
      	description
        thumbnail
        price
        category
        inStock
      }
    }
  }
}
</page-query>

<script>
import Layout from "~/layouts/Store.vue";

export default {
  components: {
    Layout,
  },
  metaInfo: {
    title: "Our Plants",
  },
  data() {
    return {
      tab: 0,
      tabs: [
        { id: 1, category: "5fb307fceca71d326c29d63e" },
        { id: 2, category: "5fb3081feca71d326c29d63f" },
      ],
      products: [],
    };
  },
  mounted() {
    this.products = this.$page.products.edges;
  },
  watch: {
    tab(val) {
      if (this.tab === 0) {
        this.showAllProducts();
      } else {
        this.showProductsByType(val);
      }
    }
  },
  methods: {
    showAllProducts() {
      this.products = this.$page.products.edges;
    },
    showProductsByType(val) {
      this.products = this.$page.products.edges.filter((edge) => {
        return (
          edge.node.category === this.tabs.find((x) => x.id === val).category
        );
      });
    },
    getProducts(searchText) {
      return this.products.filter((edge) => {
        return edge.node.name.toLowerCase().includes(searchText.toLowerCase());
      });
    },
  },
};
</script>

<style scoped>
.home-links a {
  margin-right: 1rem;
}

/* fixes word breaks from word wrapping  */
.v-card__text,
.v-card__title {
  word-break: normal;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.75;
  position: absolute;
  width: 100%;
}

.row-pointer :hover {
  cursor: pointer;
}
</style>
