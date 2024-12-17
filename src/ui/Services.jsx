import Service from "./Service";

// eslint-disable-next-line react/prop-types
function Services({ className }) {
  return (
    <div
      className={`grid grid-cols-4 py-12 max-sm:grid-cols-2 max-sm:gap-2 ${className}`}
    >
      <Service
        title="Free Shipping"
        paragraph="Order above $200"
        img="fast delivery.png"
        className="px-8 py-12 max-sm:px-4 max-sm:py-8"
      />

      <Service
        title="Money-back"
        paragraph="30 days guarantee"
        img="money.png"
        className="px-8 py-12 max-sm:px-4 max-sm:py-8"
      />

      <Service
        title="Secure Payments"
        paragraph="Secured by Stripe"
        img="lock 01.png"
        className="px-8 py-12 max-sm:px-4 max-sm:py-8"
      />

      <Service
        title="24/7 Support"
        paragraph="Phone and Email support"
        img="call.png"
        className="px-8 py-12 max-sm:px-4 max-sm:py-8"
      />
    </div>
  );
}

export default Services;
