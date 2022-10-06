
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/alec/Projects/Yater-Actives/web/.cache/dev-404-page.js")),
  "component---src-pages-about-inga-js": preferDefault(require("/home/alec/Projects/Yater-Actives/web/src/pages/aboutInga.js")),
  "component---src-pages-aboutya-js": preferDefault(require("/home/alec/Projects/Yater-Actives/web/src/pages/aboutya.js")),
  "component---src-pages-contactya-js": preferDefault(require("/home/alec/Projects/Yater-Actives/web/src/pages/contactya.js")),
  "component---src-pages-index-js": preferDefault(require("/home/alec/Projects/Yater-Actives/web/src/pages/index.js")),
  "component---src-pages-products-js": preferDefault(require("/home/alec/Projects/Yater-Actives/web/src/pages/products.js")),
  "component---src-templates-product-js": preferDefault(require("/home/alec/Projects/Yater-Actives/web/src/templates/Product.js"))
}

