import SlideInFromLeftAnimation from "../../ui/SlideInFromLeftAnimation";
import TextRevealAnimation from "../../ui/TextRevealAnimation";
import Form from "../../ui/Form";

function AccountDetailsInputs() {
  return (
    <div className="flex w-full flex-col gap-6">
      <TextRevealAnimation duration={0.6} delay={0.2}>
        <p className="font-inter text-xl font-semibold">Account Details</p>
      </TextRevealAnimation>
      <Form.Label id="firstName">
        <SlideInFromLeftAnimation duration={0.5}>
          <p className="font-inter text-xs font-bold">FIRST NAME *</p>
        </SlideInFromLeftAnimation>
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
        <SlideInFromLeftAnimation duration={0.5}>
          <p className="font-inter text-xs font-bold">LAST NAME *</p>
        </SlideInFromLeftAnimation>
        <Form.Input
          type="text"
          id="lastName"
          placeholder="Last name"
          className={
            "h-10 w-full rounded-md border border-[#CBCBCB] px-4 placeholder:text-black-shade-4 focus:outline-none"
          }
        />
      </Form.Label>

      <Form.Label id="lastName">
        <SlideInFromLeftAnimation duration={0.5}>
          <p className="font-inter text-xs font-bold">Display name *</p>
        </SlideInFromLeftAnimation>
        <Form.Input
          type="text"
          id="username"
          placeholder="Display name"
          className={
            "h-10 w-full rounded-md border border-[#CBCBCB] px-4 placeholder:text-black-shade-4 focus:outline-none"
          }
        />
        <p className="font-inter text-xs italic">
          This will be how your name will be displayed in the account section
          and in reviews
        </p>
      </Form.Label>

      <Form.Label id="email">
        <SlideInFromLeftAnimation duration={0.5}>
          <p className="font-inter text-xs font-bold">EMAIL *</p>
        </SlideInFromLeftAnimation>
        <Form.Input
          type="email"
          id="email"
          placeholder="Email"
          disabled={true}
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

export default AccountDetailsInputs;
