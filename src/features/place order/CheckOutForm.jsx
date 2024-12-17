import { useForm } from "react-hook-form";
import { addToOrder } from "../../Redux/orderSlice";
import { clearCart } from "../../Redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTotalPrice } from "../../hooks/useTotalPrice";

import Form from "../../ui/Form";
import Button from "../../ui/Button";
import ContactInfomationForm from "./ContactInfomationForm";
import CheckOutOrderSummary from "./CheckOutOrderSummary";
import ShippingAddressForm from "./ShippingAddressForm";
import PaymentMethodForm from "./PaymentMethodForm";
import { useEffect } from "react";

function CheckOutForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [subtotalPrice, totalPrice] = useTotalPrice();
  let { cart } = useSelector((store) => store.cart);
  const { register, formState, handleSubmit, watch } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    let order_id = `${Math.floor(Math.random() * 1000) + 1000}_${Math.floor(Math.random() * 1000) + 1000}`;
    let date = new Date().toUTCString().split(" ").slice(1, 4).join(" ");
    let orderData = {
      ...data,
      cart,
      subtotalPrice,
      totalPrice,
      date,
      order_id,
    };
    dispatch(addToOrder(orderData));
    dispatch(clearCart());
    navigate(`/order-complete?orderId=${order_id}`);
  }

  useEffect(() => {
    if (cart?.length <= 0) navigate("/cart");
  }, [cart?.length, navigate]);

  return (
    <>
      <Form
        register={register}
        errors={errors}
        watch={watch}
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-6"
      >
        <ContactInfomationForm />
        <ShippingAddressForm />
        <PaymentMethodForm />
        <div className="hidden max-lg:block">
          <CheckOutOrderSummary cart={cart} totalPrice={subtotalPrice} />
        </div>
        <Button>Place Order</Button>
      </Form>
    </>
  );
}

export default CheckOutForm;
