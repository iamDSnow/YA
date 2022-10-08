exports.handler = async function (event, context) {
  // Retrieve payment information (depends on how your application is made)
  const requestBody = JSON.parse(event.body);

  console.log(requestBody);

  return {
    statusCode: 200,
  };
};
