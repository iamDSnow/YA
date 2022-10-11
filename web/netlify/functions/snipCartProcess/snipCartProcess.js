import fetch from "node-fetch";
import sanityClient from "@sanity/client";
const client = sanityClient({
  projectId: `cutpypb3`,
  dataset: `production`,
  apiVersion: "2021-10-11", // use current UTC date - see "specifying API version"!
  token: "", // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});
const query = `*[_type == "product"]{_id,slug{current},variants[0]{price}}`;

exports.handler = async function (event, context) {
  const body = JSON.parse(event);
  console.log(body);
  const json = [];
  const sanityData = await client.fetch(query).then((result) => {
    result.forEach((element) => {
      let productDef = {
        id: element._id,
        url: `https://www.yateractives.com/products/${element.slug.current}`,
        price: element.variants.price,
      };
      json.push(productDef);
    });
  });
  return {
    isBase64Encoded: true | false,
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: json,
  };
};
