import Orders from "../features/account/Orders";
import TextRevealAnimation from "../ui/TextRevealAnimation";

function OrdersHistory() {
  return (
    <div className="w-full px-[72px] font-inter max-lg:px-[24px] max-lg:pt-10 max-md:px-0 max-sm:px-0">
      <TextRevealAnimation delay={0}>
        <p className="text-xl font-semibold">Orders History</p>
      </TextRevealAnimation>
      <Orders />
    </div>
  );
}

export default OrdersHistory;
