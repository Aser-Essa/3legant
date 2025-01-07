import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import { useSignUp } from "../authentication/useSignUp";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";

function SignUpForm() {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const { SignUp } = useSignUp();

  function onSubmit(data) {
    const { email, password, username, firstName, lastName } = data;
    SignUp({ email, password, username, firstName, lastName });
  }

  return (
    <>
      <Form
        className="mt-8 flex flex-col gap-2.5"
        register={register}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Input
          type="text"
          id="firstName"
          placeholder="First Name"
          className="mb-2 h-10 w-full border-b border-white-shade-1 pb-2 text-black-shade-4 placeholder:font-inter placeholder:text-black-shade-4 focus:outline-none"
        />
        <Form.Input
          type="text"
          id="lastName"
          placeholder="Last Name"
          className="mb-2 h-10 w-full border-b border-white-shade-1 pb-2 text-black-shade-4 placeholder:font-inter placeholder:text-black-shade-4 focus:outline-none"
        />
        <Form.Input
          type="text"
          id="username"
          placeholder="Username"
          className="mb-2 h-10 w-full border-b border-white-shade-1 pb-2 text-black-shade-4 placeholder:font-inter placeholder:text-black-shade-4 focus:outline-none"
        />
        <Form.Input
          type="email"
          id="email"
          placeholder="Email address"
          className="mb-2 h-10 w-full border-b border-white-shade-1 pb-2 text-black-shade-4 placeholder:font-inter placeholder:text-black-shade-4 focus:outline-none"
          additional={{
            pattern: {
              value: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
              message: "Invalid Email",
            },
          }}
        />
        <Form.Input
          type="password"
          id="password"
          placeholder="Password"
          className="mb-2 h-10 w-full border-b border-white-shade-1 pb-2 text-black-shade-4 placeholder:font-inter placeholder:text-black-shade-4 focus:outline-none"
          additional={{
            minLength: {
              value: 8,
              message: "Enter 8 Character At Least",
            },
          }}
        />

        <Form.Check id="terms&privacy" isRequired={true}>
          <p className="text-xs">
            I agree with{" "}
            <Link className="font-semibold text-black">Privacy Policy</Link> and{" "}
            <Link className="font-semibold text-black">Terms of Use</Link>
          </p>
        </Form.Check>

        <Button>{"Sign Up"}</Button>
      </Form>
    </>
  );
}

export default SignUpForm;
