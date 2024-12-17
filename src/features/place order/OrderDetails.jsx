import { formatCurrency } from "../../utils/formatCurrency";

/* eslint-disable react/prop-types */
function OrderDetails({ order }) {
  return (
    <div className="flex flex-col gap-5 max-sm:w-full max-sm:gap-4">
      <div className="flex items-center gap-8 font-inter text-sm font-semibold max-sm:flex-col max-sm:items-stretch max-sm:gap-2 max-sm:border-b max-sm:border-white-shade-1 max-sm:pb-4">
        <p className="min-w-[120px] text-black-shade-4">Order code:</p>
        <p>#{order?.order_id}</p>
      </div>
      <div className="flex items-center gap-8 font-inter text-sm font-semibold max-sm:flex-col max-sm:items-stretch max-sm:gap-2 max-sm:border-b max-sm:border-white-shade-1 max-sm:pb-4">
        <p className="min-w-[120px] text-black-shade-4">Date:</p>
        <p>{order?.date}</p>
      </div>
      <div className="flex items-center gap-8 font-inter text-sm font-semibold max-sm:flex-col max-sm:items-stretch max-sm:gap-2 max-sm:border-b max-sm:border-white-shade-1 max-sm:pb-4">
        <p className="min-w-[120px] text-black-shade-4">Total:</p>
        <p>{formatCurrency(order?.totalPrice)}</p>
      </div>
      <div className="flex items-center gap-8 font-inter text-sm font-semibold max-sm:flex-col max-sm:items-stretch max-sm:gap-2 max-sm:border-b max-sm:border-white-shade-1 max-sm:pb-4">
        <p className="min-w-[120px] text-black-shade-4">Payment method:</p>
        <p>{order?.payment}</p>
      </div>
    </div>
  );
}

export default OrderDetails;
