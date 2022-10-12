const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: `cutpypb3`,
  dataset: `production`,
  apiVersion: "2021-10-11", // use current UTC date - see "specifying API version"!
  token: "", // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});

exports.handler = async function (event, context) {
  const query = `*[_type == "product"]{_id,slug{current},variants[0]{price}}`;
  const products = await client.fetch(query).then((results) => {
    console.log(results);
    const productJson = [];
    const allProducts = results.map((product) => {
      let productDef = {
        id: product.slug.current,
        url: `/.netlify/functions/snipCartProcess`,
        price: product.variants.price,
      };
      productJson.push(productDef);
    });
    console.log(productJson);
    return allProducts;
  });
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productJson),
  };
};
