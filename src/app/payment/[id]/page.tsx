import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY == undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY Not Found");
}
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const page = (params: { id: string }) => {

  const options = {
    clientSecret = params.id;
  };

  return (
    <div>
      <Elements options={options} stripe={stripePromise}>

      </Elements>
    </div>
  );
};

export default page;
