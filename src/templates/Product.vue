<template>
  <Layout>
    <v-row>
      <v-col sm="4">
        <v-img :src="`${$page.product.thumbnail}`" />
      </v-col>
      <v-col sm="8">
        <h1 class="brownText--text">{{ $page.product.name }}</h1>
        <p v-if="$page.product.zone >= 0" class="brownText--text"><strong>USDA Hardiness:  </strong>Zone {{ $page.product.zone }} <a href="/canada_zone_map.png">CHECK ZONE MAP</a></p> 
        <p v-else class="brownText--text"><strong>USDA Hardiness:  </strong>Zone not applicable. This plant is to be grown indoors.</p>

        <p class="brownText--text">{{ $page.product.description }}</p>

        <p v-if="$page.product.inStock" class="brownText--text">Price: {{
          $page.product.price | toCurrency
        }}<br><br>
        If interested please contact us by email or contact form through our <g-link to="/contact">contact page</g-link></p>
        <p v-else class="brownText--text">Sorry, sold out.</p>
      </v-col>
    </v-row>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  product(id: $id) {
    id
    name
    description
	  thumbnail
    price
    inStock
    zone
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.product.title,
    };
  },
};
</script>