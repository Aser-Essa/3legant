import { useForm } from "react-hook-form";
import { useUser } from "../account/useUser";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import AccountDetailsInputs from "./AccountDetailsInputs";
import AccountPasswordInputs from "./AccountPasswordInputs";
import useUpdateUser from "./useUpdateUser";
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
    <div className="w-full px-[72px] max-lg:px-[32px] max-md:px-0 max-md:pt-10">
      <Form
        register={register}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-10"
      >
        <AccountDetailsInputs />
        <AccountPasswordInputs getValues={getValues} />
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
    </div>
  );
}

export default UpdateUserDataForm;
