import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { useUser } from "../../hooks/useUser";
import useUpdateUser from "./useUpdateUser";
import SlideInFromLeftAnimation from "../../ui/SlideInFromLeftAnimation";
import TextRevealAnimation from "../../ui/TextRevealAnimation";
import { motion } from "motion/react";

function UpdateUserDataForm() {
  const { user } = useUser();
  const { updateUser } = useUpdateUser();

  const { register, formState, handleSubmit, getValues } = useForm({
    defaultValues: { ...user?.user_metadata, email: user?.email },
  });
  const { errors } = formState;

  function onSubmit(data) {
    updateUser({ ...data, id: user?.id });
  }

  return (
    <Form
      register={register}
      errors={errors}
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-10"
    >
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
      <motion.div
        initial={{ opacity: 0.5, scale: 0 }}
        whileInView={{ opacity: 1, scale: [0, 1.05, 1] }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Button className="h-[52px] w-[183px] text-nowrap font-inter">
          Save changes
        </Button>
      </motion.div>
    </Form>
  );
}

export default UpdateUserDataForm;
