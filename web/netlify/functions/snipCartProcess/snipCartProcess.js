
exports.handler = async function (event, context, callback) {
  // Retrieve payment information (depends on how your application is made)
  const requestBody = JSON.parse(event.body);
  const paymentId = uuid();

  // // Process the payment with the gateway of your choice here

  // // Confirm payment with the /payment endpoint
  // const response = await fetch(
  //   'https://payment.snipcart.com/api/private/custom-payment-gateway/payment', {
  //   method: 'POST',
  //   headers: {
  //     Authorization: process.env.STRIPE_KEY,
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     paymentSessionId: requestBody.paymentSessionId,
  //     state: requestBody.state,
  //     error: requestBody.error,
  //     transactionId: paymentId,
  //     instructions: 'Your payment will appear on your statement in the coming days',
  //     links: { refunds: `<YOUR_REFUND_URL>?transactionId=${paymentId}` },
  //   }),
  // });


  console.log(requestBody)


  if (response.ok) {
    const body = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, returnUrl: body.returnUrl })
    };
  }
}