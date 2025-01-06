import SlideInFromLeftAnimation from "../../ui/SlideInFromLeftAnimation";
import TextRevealAnimation from "../../ui/TextRevealAnimation";
import Form from "../../ui/Form";

// eslint-disable-next-line react/prop-types
function AccountPasswordInputs({ getValues }) {
  return (
    <div className="flex w-full flex-col gap-6">
      <TextRevealAnimation duration={0.6} delay={0.2}>
        <p className="font-inter text-xl font-semibold">Password</p>
      </TextRevealAnimation>

      <Form.Label id="oldpassword">
        <SlideInFromLeftAnimation duration={0.5}>
          <p className="font-inter text-xs font-bold">Old password</p>
        </SlideInFromLeftAnimation>

        <Form.Input
          type="password"
          id="oldpassword"
          placeholder="Old password"
          className="h-10 w-full rounded-md border border-[#CBCBCB] px-4 placeholder:text-black-shade-4 focus:outline-none"
          additional={{
            minLength: {
              value: 8,
              message: "Enter 8 Character At Least",
            },
            required: false,
          }}
        />
      </Form.Label>

      <Form.Label id="oldpassword">
        <SlideInFromLeftAnimation duration={0.5}>
          <p className="font-inter text-xs font-bold">new password</p>
        </SlideInFromLeftAnimation>

        <Form.Input
          type="password"
          id="newpassword"
          placeholder="New password"
          className="h-10 w-full rounded-md border border-[#CBCBCB] px-4 placeholder:text-black-shade-4 focus:outline-none"
          additional={{
            minLength: {
              value: 8,
              message: "Enter 8 Character At Least",
            },
            required: false,
          }}
        />
      </Form.Label>

      <Form.Label id="repeatnewpassword">
        <SlideInFromLeftAnimation duration={0.5}>
          <p className="font-inter text-xs font-bold">REPEAT NEW PASSWORD</p>
        </SlideInFromLeftAnimation>

        <Form.Input
          type="password"
          id="repeatnewpassword"
          placeholder="Repeat new password"
          className="h-10 w-full rounded-md border border-[#CBCBCB] px-4 placeholder:text-black-shade-4 focus:outline-none"
          additional={{
            minLength: {
              value: 8,
              message: "Enter 8 Character At Least",
            },
            validate: (value) =>
              value === getValues().newpassword ||
              "It Does Not Match New Password",
            required: false,
          }}
        />
      </Form.Label>
    </div>
  );
}

export default AccountPasswordInputs;
