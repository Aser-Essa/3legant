import Form from "../../ui/Form";

function ContactInfomationForm() {
  return (
    <div className="flex flex-col gap-6 rounded-[4px] border border-black-shade-4 px-6 py-10">
      <p className="text-xl font-medium">Contact Infomation</p>
      <div className="flex gap-6">
        <Form.Label id="firstName">
          <p className="font-inter text-xs font-bold">FIRST NAME</p>
          <Form.Input
            type="text"
            id="firstName"
            placeholder="First name"
            className={
              "h-10 w-full rounded-md border border-[#CBCBCB] px-4 placeholder:text-black-shade-4 focus:outline-none"
            }
          />
        </Form.Label>
        <Form.Label id="lastName">
          <p className="font-inter text-xs font-bold">LAST NAME</p>
          <Form.Input
            type="text"
            id="lastName"
            placeholder="Last name"
            className={
              "h-10 w-full rounded-md border border-[#CBCBCB] px-4 placeholder:text-black-shade-4 focus:outline-none"
            }
          />
        </Form.Label>
      </div>
      <Form.Label id="phoneNumber">
        <p className="font-inter text-xs font-bold">PHONE NUMBER</p>
        <Form.Input
          type="number"
          id="phoneNumber"
          placeholder="Phone number"
          className={
            "h-10 w-full rounded-md border border-[#CBCBCB] px-4 placeholder:text-black-shade-4 focus:outline-none"
          }
          additional={{
            minLength: {
              value: 11,
              message: "Enter 11 Number At Least",
            },
            pattern: {
              value: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{4}[\s.-]?\d{4}$/,
              message: "Unvalid Value You Must Enter Number",
            },
          }}
        />
      </Form.Label>
      <Form.Label id="email">
        <p className="font-inter text-xs font-bold">EMAIL ADDRESS</p>
        <Form.Input
          type="email"
          id="email"
          placeholder="Your Email"
          className={
            "h-10 w-full rounded-md border border-[#CBCBCB] px-4 placeholder:text-black-shade-4 focus:outline-none"
          }
          additional={{
            pattern: {
              value: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
              message: "Invalid Email",
            },
          }}
        />
      </Form.Label>
    </div>
  );
}

export default ContactInfomationForm;
