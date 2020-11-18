// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

export default function (Vue, { appOptions, head }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  });

  const opts = {
    theme: {
      themes: {
        light: {
          primary: '#388E3C',
          secondary: '#C8E6C9',
          brownText: '#19411B'
        }
      },
    },
  } //opts includes, vuetify themes, icons, etc.

  Vue.use(Vuetify)

  Vue.use(VueGoogleMaps, {
    load: {
      key: process.env.GRIDSOME_GMAPI_KEY
    },
    installComponents: false
  });

  Vue.component('google-map', VueGoogleMaps.Map);
  Vue.component('google-marker', VueGoogleMaps.Marker);

  appOptions.vuetify = new Vuetify(opts);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.filter('toCurrency', function (value) {
    if (typeof value !== "number") {
      return value;
    }
    var formatter = new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 2
    });
    return formatter.format(value);
  });

}


