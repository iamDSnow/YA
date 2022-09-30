// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-about-inga-js": () => import("./../../../src/pages/aboutInga.js" /* webpackChunkName: "component---src-pages-about-inga-js" */),
  "component---src-pages-aboutya-js": () => import("./../../../src/pages/aboutya.js" /* webpackChunkName: "component---src-pages-aboutya-js" */),
  "component---src-pages-contactya-js": () => import("./../../../src/pages/contactya.js" /* webpackChunkName: "component---src-pages-contactya-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-products-js": () => import("./../../../src/pages/products.js" /* webpackChunkName: "component---src-pages-products-js" */),
  "component---src-templates-product-js": () => import("./../../../src/templates/Product.js" /* webpackChunkName: "component---src-templates-product-js" */)
}

