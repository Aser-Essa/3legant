import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/formatCurrency";
import SlideInFromLeftAnimation from "../../ui/SlideInFromLeftAnimation";

function Orders() {
  const { order } = useSelector((store) => store.order);

  return (
    <>
      <div className="mt-10 w-full">
        <div className="hidden max-sm:block">
          {order.map((el) => {
            return (
              <div
                key={el}
                className="flex justify-between border-b border-white-shade-1 py-4 text-sm"
              >
                <div className="space-y-4 text-black-shade-4">
                  <p>Number ID</p>
                  <p>Dates</p>
                  <p>Status</p>
                  <p>Price</p>
                </div>
                <div className="space-y-4">
                  <p>#{el.order_id}</p>
                  <p>{el.date}</p>
                  <p>Delivered</p>
                  <p>{formatCurrency(el.totalPrice)}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="max-sm:hidden">
          <div className="grid h-[30px] w-full grid-cols-[160px_120px_120px_137px] justify-between border-b border-white-shade-1 text-sm text-black-shade-4">
            <p>Number ID</p>
            <p>Dates</p>
            <p>Status</p>
            <p>Price</p>
          </div>
          {order.map((el, idx) => {
            return (
              <SlideInFromLeftAnimation key={el} delay={`0.${idx + 1}`}>
                <div className="grid h-[70px] w-full grid-cols-[160px_120px_120px_137px] justify-between border-b border-white-shade-1 text-sm text-black-shade-1">
                  <p className="flex items-center py-6">#{el.order_id}</p>
                  <p className="flex items-center py-6">{el.date}</p>
                  <p className="flex items-center py-6">Delivered</p>
                  <p className="flex items-center py-6">
                    {formatCurrency(el.totalPrice)}
                  </p>
                </div>
              </SlideInFromLeftAnimation>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Orders;
