import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import SlideInFromLeftAnimation from "../../ui/SlideInFromLeftAnimation";

function ContactUsFormAndMap() {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  function onSubmit() {}

  return (
    <div>
      <div className="flex gap-[28px] max-2xl:flex-wrap max-sm:flex-col-reverse max-sm:gap-6">
        <Form
          className="flex w-full min-w-[544px] flex-col gap-6 max-sm:min-w-[auto]"
          register={register}
          errors={errors}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Form.Label id="firstName">
            <div className="min-h-fit overflow-hidden">
              <SlideInFromLeftAnimation duration={0.4}>
                <p className="h-3 font-inter text-xs font-bold">FIRST NAME</p>
              </SlideInFromLeftAnimation>
            </div>
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
            <SlideInFromLeftAnimation duration={0.4}>
              <p className="h-3 font-inter text-xs font-bold">LAST NAME</p>
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
            <SlideInFromLeftAnimation duration={0.4}>
              <p className="h-3 font-inter text-xs font-bold">MESSAGE</p>
            </SlideInFromLeftAnimation>
            <Form.TextArea
              type="text"
              id="lastName"
              placeholder="Your message"
              className={
                "h-[140px] w-full resize-none rounded-md border border-[#CBCBCB] p-4 px-4 placeholder:text-black-shade-4 focus:outline-none"
              }
            />
          </Form.Label>
          <motion.div
            initial={{ opacity: 0.5, scale: 0 }}
            whileInView={{ opacity: 1, scale: [0, 1.08, 1] }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Button
              className={
                "max-h-10 w-[189px] text-nowrap px-0 py-0 max-sm:mx-auto max-sm:mt-[-8px]"
              }
            >
              Send Message
            </Button>
          </motion.div>
        </Form>
        <motion.div
          className="relative min-w-[548px] max-2xl:w-full max-sm:min-w-[auto]"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/map.png"
            className="max-h-[422.4px] min-h-[422.4px] w-[548px] max-2xl:w-full max-sm:h-[326.5px]"
          />
          <img
            src="location.png"
            className="absolute left-[50%] top-[50%] h-16 w-16 translate-x-[-50%] translate-y-[-50%]"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default ContactUsFormAndMap;
