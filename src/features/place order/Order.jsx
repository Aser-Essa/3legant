import { useSelector } from "react-redux";
import OrderDetails from "./OrderDetails";
import Button from "../../ui/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import OrderProducts from "./OrderProducts";
import { useEffect } from "react";
import { motion } from "motion/react";

function Order() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");

  let { order } = useSelector((store) => store.order);
  order = order?.filter((el) => el?.order_id == orderId)[0];

  function handleClick() {
    navigate("/orders");
  }

  useEffect(() => {
    if (!orderId) navigate("/check-out");
  }, [navigate, orderId]);

  return (
    <>
      <div className="my-20">
        <div
          className="mx-auto flex min-h-[730px] w-[738px] flex-col items-center gap-10 p-20 max-lg:w-auto max-sm:w-auto max-sm:rounded max-sm:border max-sm:border-white-shade-1 max-sm:p-4"
          style={{
            boxShadow: "0 32px 48px 0px hsl(0deg 0% 7% / 10%)",
          }}
        >
          <motion.div
            className="text-center max-sm:text-start"
            initial={{ scale: 0 }}
            whileInView={{ scale: [0, 1.05, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-[28px] font-medium text-black-shade-4">
              Thank you! 🎉
            </p>
            <p className="mt-4 text-wrap text-[40px] font-medium leading-[44px] tracking-[-.04px]">
              Your order has been received
            </p>
          </motion.div>
          <OrderProducts cart={order?.cart} />
          <OrderDetails order={order} />
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: [0, 1.05, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Button
              className={
                "h-[52px] w-[203px] text-nowrap rounded-full font-inter"
              }
              onClick={handleClick}
            >
              Purchase history
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Order;
