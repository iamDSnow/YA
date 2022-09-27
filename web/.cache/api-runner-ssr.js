var plugins = [{
      name: 'gatsby-source-sanity',
      plugin: require('/Users/Supra/Documents/GitHub/YA/web/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"cutpypb3","dataset":"production","token":"","graphqlTag":"default"},
    },{
      name: 'gatsby-plugin-snipcart-advanced',
      plugin: require('/Users/Supra/Documents/GitHub/YA/web/node_modules/gatsby-plugin-snipcart-advanced/gatsby-ssr'),
      options: {"plugins":[],"version":"3.0.29","publicApiKey":"MmQyYWY5YjctZTZhNy00OTY5LWE3N2QtMmViYTUzNDVkNTcxNjM3OTk4MzMxNzQxMTk2NDA4\n        "},
    },{
      name: 'gatsby-plugin-image',
      plugin: require('/Users/Supra/Documents/GitHub/YA/web/node_modules/gatsby-plugin-image/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-fontawesome-css',
      plugin: require('/Users/Supra/Documents/GitHub/YA/web/node_modules/gatsby-plugin-fontawesome-css/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-styled-components',
      plugin: require('/Users/Supra/Documents/GitHub/YA/web/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"topLevelImportPaths":[],"pure":false},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/Users/Supra/Documents/GitHub/YA/web/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"yateractives","short_name":"stg","start_url":"/","background_color":"bg","theme_color":"darkBlue","display":"minimal-ui","icon":"src/assets/gatsby-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"68aa167d785ea46095075c03564f4a85"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    try {
      const result = plugin.plugin[api](args, plugin.options)
      if (result && argTransform) {
        args = argTransform({ args, result })
      }
      return result
    } catch (e) {
      if (plugin.name !== `default-site-plugin`) {
        // default-site-plugin is user code and will print proper stack trace,
        // so no point in annotating error message pointing out which plugin is root of the problem
        e.message += ` (from plugin: ${plugin.name})`
      }

      throw e
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
