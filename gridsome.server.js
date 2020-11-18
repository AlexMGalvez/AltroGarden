// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios');

module.exports = function (api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        // gives an error when activating build gridsome
        // nodeExternals({
        //   allowlist: [/^vuetify/]
        // })
      ])
    }
  })

  api.loadSource(async actions => {
    //const { data } = await axios.get('http://localhost:1337/products')
    const { data } = await axios.get('https://altrogarden.herokuapp.com/products')

    const collection = actions.addCollection({
      typeName: 'Product',
      path: '/products/:id'
    })

    for (const product of data) {
      collection.addNode({
        id: product.id,
        path: '/products/' + product.id,
        name: product.name,
        thumbnail: product.thumbnail.url,
        price: product.price,
        description: product.desc,
        category: product.category.id,
        inStock: product.inStock,
        zone: product.zone
      })
    }
  })
}