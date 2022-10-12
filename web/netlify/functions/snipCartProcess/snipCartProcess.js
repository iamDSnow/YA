const { PriceChange } = require("@mui/icons-material");
const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: `cutpypb3`,
  dataset: `production`,
  apiVersion: "2021-10-11", // use current UTC date - see "specifying API version"!
  token: "", // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});

// const query = `*[_type == "product"]{_id,slug{current},variants[0]{price}}`;
exports.handler = async function (event, context) {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query).then((results) => {
    const allProducts = results.map((product) => {
      let productDef = {
        name: product.slug.current,
        id: product.slug.current,
        url: `https://www.yateractives.com/.netlify/functions/snipCartProcess`,
        variants: product.variants.map((vari) => {
          let variantsObj = {
            variation: { price: vari.price, name: vari.title },
          };
          return variantsObj;
        }),
      };
      return productDef;
    });
    console.log(allProducts);
    return allProducts;
  });
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(products),
  };
};
