import { IoCardOutline } from "react-icons/io5";
import Form from "../../ui/Form";
import { useState } from "react";

function PaymentMethodForm() {
  const [dateValue, setDateValue] = useState("");
  const [cardNumberValue, setCardNumberValue] = useState("");

  function handleChangeDate(e) {
    let input = e.target.value;
    input = input.replace(/\D/g, "");
    if (input.length >= 2) {
      let month = input.slice(0, 2) <= 31 ? input.slice(0, 2) : 31;
      let day = input.slice(2, 4) <= 31 ? input.slice(2, 4) : 31;
      input = `${month}/${day}`;
    }
    setDateValue(input);
  }

  function handleChangeCardNumber(e) {
    let input = e.target.value;
    input = input.replace(/\D/g, "");
    if (input.length > 4) {
      input = `${input.slice(0, 4)} ${input.slice(4, 8)} ${input.slice(8, 12)}`;
    }
    setCardNumberValue(input);
  }

  return (
    <div className="flex flex-col gap-6 rounded-[4px] border border-black-shade-4 px-6 py-10">
      <p className="text-xl font-medium">Payment method</p>
      <div className="flex flex-col gap-6 pb-4">
        <div className="flex flex-col gap-6 border-b border-black-shade-4 pb-8">
          <label className="flex h-[52px] cursor-pointer items-center gap-3 rounded-md border border-black-shade-4 px-4 py-[13px] font-inter">
            <Form.Radio
              defaultChecked={true}
              value={"Card Credit"}
              name={"payment"}
            />
            <p>Pay by Card Credit</p>
            <IoCardOutline className="ml-auto h-6 w-6" />
          </label>
          <label className="flex h-[52px] cursor-pointer items-center gap-3 rounded-md border border-black-shade-4 px-4 py-[13px] font-inter">
            <Form.Radio value={"Paypal"} name={"payment"} />
            <p>Paypal</p>
          </label>
        </div>
        <Form.Label id="cardNumber">
          <p className="font-inter text-xs font-bold">Card Number</p>
          <Form.Input
            type="text"
            id="cardNumber"
            placeholder="1234 1234 1234"
            className={
              "h-10 w-full rounded-md border border-[#CBCBCB] px-4 placeholder:text-black-shade-4 focus:outline-none"
            }
            maxLength={14}
            value={cardNumberValue}
            onChange={handleChangeCardNumber}
          />
        </Form.Label>
        <div className="flex items-center gap-6">
          <Form.Label id="expirationDate">
            <p className="font-inter text-xs font-bold">Expiration date</p>
            <Form.Input
              type="text"
              id="expirationDate"
              placeholder="MM/YY"
              maxLength={5}
              className={
                "h-10 w-full rounded-md border border-[#CBCBCB] px-4 placeholder:text-black-shade-4 focus:outline-none"
              }
              value={dateValue}
              onChange={handleChangeDate}
            />
          </Form.Label>
          <Form.Label id="CVCcode">
            <p className="font-inter text-xs font-bold">CVC</p>
            <Form.Input
              type="number"
              id="CVCcode"
              placeholder="CVC code"
              className={
                "h-10 w-full rounded-md border border-[#CBCBCB] px-4 placeholder:text-black-shade-4 focus:outline-none"
              }
              additional={{
                minLength: {
                  value: 3,
                  message: "Invalid Value You Must Enter 3 Numbers ",
                },
                maxLength: {
                  value: 3,
                  message: "Invalid Value You Must Enter 3 Numbers ",
                },
              }}
            />
          </Form.Label>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethodForm;
