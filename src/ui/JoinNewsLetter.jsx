import { MdOutlineMailOutline } from "react-icons/md";
import { AnimatePresence, motion } from "motion/react";
import TextRevealAnimation from "./TextRevealAnimation";

function JoinNewsLetter() {
  return (
    <AnimatePresence initial={!(window.innerWidth >= 680)}>
      <div className="relative mt-20 h-[360px] overflow-hidden bg-[#F2F4F6] max-sm:mt-10">
        <motion.img
          src="/category3.png"
          className="absolute left-[-140px] top-[-18px] h-[490px] w-[480px] mix-blend-darken max-lg:w-[380px] max-md:hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        />
        <motion.img
          src="/chair.png"
          className="absolute bottom-[-180px] right-[-210px] h-[500px] w-[640px] mix-blend-darken max-lg:w-[460px] max-md:hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        />
        <div className="mx-auto flex h-full w-fit flex-col justify-center text-center text-black-shade-1 max-sm:w-full">
          <div className="mx-auto mb-2 text-[40px] font-medium leading-[44px] tracking-[-0.4px] max-sm:text-[34px]">
            <TextRevealAnimation color={"#F2F4F6"}>
              <p className="text-nowrap">Join Our Newsletter</p>
            </TextRevealAnimation>
          </div>
          <div className="mx-auto font-inter text-lg max-sm:text-sm">
            <TextRevealAnimation color={"#F2F4F6"}>
              <p className="text-nowrap">
                Sign up for deals, new products and promotions
              </p>
            </TextRevealAnimation>
          </div>
          <motion.div
            className="mt-8 flex h-[48.8px] w-[488px] items-center overflow-hidden border-b-[.5px] border-[#6c727580] font-inter font-medium text-black-shade-4 max-lg:w-[400px] max-sm:mx-auto max-sm:w-[311px]"
            initial={{ height: 0 }}
            whileInView={{ height: "48.8px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <MdOutlineMailOutline className="mr-2 h-6 w-6 text-black" />
            <input
              type="text"
              className="w-full bg-transparent text-black-shade-4 placeholder:font-inter placeholder:font-medium placeholder:text-black-shade-4 focus:outline-none"
              placeholder="Email address"
            />
            <button className="ml-auto h-fit">Signup</button>
          </motion.div>
        </div>
      </div>
    </Anim>
  );
}

export default JoinNewsLetter;
