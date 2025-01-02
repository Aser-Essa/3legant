import Service from "./Service";

// eslint-disable-next-line react/prop-types
function Services({ className }) {
  return (
    <>
      <div
        className={`grid grid-cols-4 py-4 max-sm:grid-cols-2 max-sm:gap-2 ${className}`}
      >
        <Service
          title="Free Shipping"
          paragraph="Order above $200"
          img="fast delivery.png"
          className="flex h-[220px] flex-col justify-center px-8 max-sm:px-4 max-sm:py-8"
          delay={0.3}
          direction={"left"}
        />

        <Service
          title="Money-back"
          paragraph="30 days guarantee"
          img="money.png"
          className="flex h-[220px] flex-col justify-center px-8 max-sm:px-4 max-sm:py-8"
          delay={0.6}
          direction={"left"}
        />

        <Service
          title="Secure Payments"
          paragraph="Secured by Stripe"
          img="lock 01.png"
          className="flex h-[220px] flex-col justify-center px-8 max-sm:px-4 max-sm:py-8"
          delay={0.6}
          direction={"right"}
        />

        <Service
          title="24/7 Support"
          paragraph="Phone and Email support"
          img="call.png"
          className="flex h-[220px] flex-col justify-center px-8 max-sm:px-4 max-sm:py-8"
          delay={0.3}
          direction={"right"}
        />
      </div>
    </>
  );
}

export default Services;
