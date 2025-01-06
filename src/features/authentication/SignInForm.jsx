import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import { useSignIn } from "../authentication/useSignIn";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";

function SignInForm() {
  const { SignIn } = useSignIn();
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    const { email, password } = data;
    SignIn({ email, password });
  }

  return (
    <>
      <Form
        className="mt-8 flex flex-col gap-6"
        register={register}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
      >
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

        <Form.Check id="rememberMe" isRequired={false}>
          <span className="flex w-full items-center justify-between">
            <p>Remember me</p>
            <Link className="font-semibold text-black max-sm:text-xs">
              Forgot password?
            </Link>
          </span>
        </Form.Check>

        <Button>{"Sign In"}</Button>
      </Form>
    </>
  );
}

export default SignInForm;
