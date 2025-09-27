import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

// Load Stripe outside of a component to avoid recreating the instance
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = ({ amount, onSuccess, onError }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const cardElement = elements.getElement(CardElement);

    try {
      // For testing purposes, we'll just create a payment method
      // In production, you'd send this to your backend
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: {
          name: "Test Customer",
        },
      });

      if (error) {
        // console.error("Error creating payment method:", error);
        onError(error);
        setIsProcessing(false);
        return;
      }

      // For testing - simulate successful payment
      // console.log("Payment Method Created:", paymentMethod);
      
      // Simulate a successful payment response
      const mockPaymentResult = {
        id: paymentMethod.id,
        amount: amount * 100,
        status: "succeeded",
        payment_method: paymentMethod,
        created: new Date().toISOString(),
      };

      // Call onSuccess with mock data
      onSuccess(mockPaymentResult);

    } catch (err) {
      console.error("Payment error:", err);
      onError(err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="p-4 border border-gray-300 rounded bg-white">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                fontFamily: "Arial, sans-serif",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
            hidePostalCode: false,
          }}
        />
      </div>
      
      <div className="text-xs text-gray-600 bg-yellow-50 p-3 rounded border border-yellow-200">
        <strong>Test Mode:</strong> Use card number 4242424242424242 with any future expiry date and any 3-digit CVC.
      </div>
      
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-black text-white py-3 rounded transition-colors duration-200 hover:bg-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed uppercase tracking-widest text-sm"
      >
        {isProcessing ? "Processing..." : `Pay $${amount}`}
      </button>
    </form>
  );
};

const StripeButton = ({ amount, onSuccess, onError }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm amount={amount} onSuccess={onSuccess} onError={onError} />
    </Elements>
  );
};

export default StripeButton;