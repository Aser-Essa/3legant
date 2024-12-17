import Form from "../../ui/Form";

function ShippingAddressForm() {
  return (
    <div className="flex flex-col gap-6 rounded-[4px] border border-black-shade-4 px-6 py-10">
      <p className="text-xl font-medium">Shipping Address</p>
      <Form.Label id="streetAddress">
        <p className="font-inter text-xs font-bold">Street Address *</p>
        <Form.Input
          type="text"
          id="streetAddress"
          placeholder="Street Address"
          className={
            "h-10 w-full rounded-md border border-[#CBCBCB] px-4 placeholder:text-black-shade-4 focus:outline-none"
          }
        />
      </Form.Label>
      <Form.Label id="country">
        <p className="font-inter text-xs font-bold">Country *</p>
        <Form.Input
          type="text"
          id="country"
          placeholder="Country"
          className={
            "h-10 w-full rounded-md border border-[#CBCBCB] px-4 placeholder:text-black-shade-4 focus:outline-none"
          }
        />
      </Form.Label>
      <Form.Label id="Town/City">
        <p className="font-inter text-xs font-bold">Town / City *</p>
        <Form.Input
          type="text"
          id="Town/City"
          placeholder="Town / City"
          className={
            "h-10 w-full rounded-md border border-[#CBCBCB] px-4 placeholder:text-black-shade-4 focus:outline-none"
          }
        />
      </Form.Label>
      <div className="flex gap-6">
        <Form.Label id="state">
          <p className="font-inter text-xs font-bold">State</p>
          <Form.Input
            type="text"
            id="state"
            placeholder="State"
            className={
              "h-10 w-full rounded-md border border-[#CBCBCB] px-4 placeholder:text-black-shade-4 focus:outline-none"
            }
          />
        </Form.Label>
        <Form.Label id="zipCode">
          <p className="font-inter text-xs font-bold">Zip Code</p>
          <Form.Input
            type="text"
            id="zipCode"
            placeholder="Zip Code"
            className={
              "h-10 w-full rounded-md border border-[#CBCBCB] px-4 placeholder:text-black-shade-4 focus:outline-none"
            }
            additional={{
              pattern: {
                value: /^\d{5}(?:[-\s]\d{4})?$/,
                message: "Invalid Zip Code",
              },
            }}
          />
        </Form.Label>
      </div>
      <Form.Check id="terms&privacy" isRequired={false}>
        <p className="text-black-shade-4">
          Use a different billing address (optional)
        </p>
      </Form.Check>
    </div>
  );
}

export default ShippingAddressForm;
