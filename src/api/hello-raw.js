// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// If you are testing your webhook locally with the Stripe CLI you
// can find the endpoint's secret by running `stripe listen`
// Otherwise, find your endpoint's secret in your webhook settings in the Developer Dashboard
const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET;

export default function handler(req, res) {
  try {
    const sig = req.headers["stripe-signature"];
    const event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);

    // Handle the event
    switch (event.type) {
      // Most common event to use for fulfillment
      case "checkout.session.completed":
        console.log("CheckoutSession completed, fulfill the order!");
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.status(200);
  } catch (err) {
    console.warn(err.message);
    res.status(400);
  }
}

export const config = {
  bodyParser: {
    raw: {
      type: `*/*`,
    },
  },
};
