import { useSelector } from "react-redux";
import OrderNavLink from "./OrderNavLink";

// eslint-disable-next-line react/prop-types
function OrderStages({ title }) {
  const type = window.location.href.split("/")[3];
  const { cart } = useSelector((store) => store.cart);

  return (
    <>
      <div className="flex w-full flex-col items-center gap-10 text-center max-sm:items-stretch">
        <p className="text-[54px] font-medium">{title}</p>
        <div className="flex w-full items-center justify-center gap-8 font-inter font-semibold max-sm:w-[256px]">
          <OrderNavLink
            title={"Shopping cart"}
            number={1}
            link={"/cart"}
            isActive={type?.includes("cart")}
            isComplete={
              type?.includes("check-out") || type?.includes("order-complete")
            }
          />

          <OrderNavLink
            title={"Checkout details"}
            number={2}
            link={cart?.length > 0 && "/check-out"}
            isActive={type?.includes("check-out")}
            isComplete={type?.includes("order-complete")}
          />

          <OrderNavLink
            title={"Order complete"}
            number={3}
            isActive={type?.includes("order-complete")}
          />
        </div>
      </div>
    </>
  );
}

export default OrderStages;
