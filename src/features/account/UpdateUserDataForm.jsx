import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { useUser } from "../../hooks/useUser";
import useUpdateUser from "./useUpdateUser";

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
        <p className="font-inter text-xl font-semibold">Account Details</p>
        <Form.Label id="firstName">
          <p className="font-inter text-xs font-bold">FIRST NAME *</p>
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
          <p className="font-inter text-xs font-bold">LAST NAME *</p>
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
          <p className="font-inter text-xs font-bold">Display name *</p>
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
          <p className="font-inter text-xs font-bold">EMAIL *</p>
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
        <p className="font-inter text-xl font-semibold">Password</p>

        <Form.Label id="oldpassword">
          <p className="font-inter text-xs font-bold">Old password</p>
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
          <p className="font-inter text-xs font-bold">new password</p>
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
          <p className="font-inter text-xs font-bold">REPEAT NEW PASSWORD</p>
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
      <Button className="h-[52px] w-[183px] text-nowrap font-inter">
        Save changes
      </Button>
    </Form>
  );
}

export default UpdateUserDataForm;
