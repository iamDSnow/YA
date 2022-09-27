
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/Supra/Documents/GitHub/YA/web/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Supra/Documents/GitHub/YA/web/src/pages/index.js")),
  "component---src-pages-products-js": preferDefault(require("/Users/Supra/Documents/GitHub/YA/web/src/pages/products.js")),
  "component---src-templates-product-js": preferDefault(require("/Users/Supra/Documents/GitHub/YA/web/src/templates/Product.js"))
}

