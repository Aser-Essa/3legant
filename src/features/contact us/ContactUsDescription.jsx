import TextRevealAnimation from "../../ui/TextRevealAnimation";
import { motion } from "motion/react";

function ContactUsDescription() {
  return (
    <div>
      <div className="mt-10 space-y-6">
        <TextRevealAnimation>
          <p className="text-[54px] font-medium leading-[58px] tracking-[-1px] max-sm:text-[28px] max-sm:leading-[34px]">
            We believe in <br className="hidden max-sm:block" /> sustainable{" "}
            <br className="max-sm:hidden" /> decor.
            <br className="hidden max-sm:block" /> We’re passionate{" "}
            <br className="hidden max-sm:block" /> about{" "}
            <br className="max-sm:hidden" /> life at home.
          </p>
        </TextRevealAnimation>

        <motion.div
          initial={{ opacity: 0, translateY: 40 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="font-inter leading-[26px]">
            Our features timeless furniture, with natural fabrics, curved lines,
            plenty of mirrors and classic design, which{" "}
            <br className="max-sm:hidden" /> can be incorporated into any decor
            project. The pieces enchant for their sobriety, to last for
            generations,
            <br className="max-sm:hidden" /> faithful to the shapes of each
            period, with a touch of the present
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactUsDescription;
