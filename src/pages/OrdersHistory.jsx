import Orders from "../features/account/Orders";

function OrdersHistory() {
  return (
    <div className="w-full px-[72px] font-inter max-lg:px-[24px] max-lg:pt-10 max-md:px-0 max-sm:px-0">
      <p className="text-xl font-semibold">Orders History</p>
      <Orders />
    </div>
  );
}

export default OrdersHistory;
