// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// If you are testing your webhook locally with the Stripe CLI you
// can find the endpoint's secret by running `stripe listen`
// Otherwise, find your endpoint's secret in your webhook settings in the Developer Dashboard
const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET;

export default function handler(req, res) {
  const sig = req.headers["stripe-signature"];

  try {
    const event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    console.log(event.type);
    res.status(200).send("Hello raw");
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
}

export const config = {
  bodyParser: {
    raw: {
      type: `*/*`,
    },
  },
};
