import SectionContainer from "../ui/SectionContainer";
import ContactUsDescription from "../features/contact us/ContactUsDescription";
import AboutUs from "../ui/AboutUs";
import ContactUsDetails from "../features/contact us/ContactUsDetails";
import ContactUsFormAndMap from "../features/contact us/ContactUsFormAndMap";
import Services from "../ui/Services";
import { NavLink } from "react-router-dom";
import PageNavigation from "../ui/PageNavigation";
import { motion } from "motion/react";

function ContactUs() {
  return (
    <>
      <SectionContainer className={"mb-20 max-sm:mb-10"}>
        <PageNavigation className={"mt-4"}>
          <motion.div
            initial={{ opacity: 0, translateX: 0 }}
            animate={{ opacity: 1, translateX: [-100, 5, 0] }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <NavLink to={"/contact-us"} className="flex items-center gap-1">
              <p>Contact Us</p>
            </NavLink>
          </motion.div>
        </PageNavigation>

        <ContactUsDescription />
        <AboutUs />
        <ContactUsDetails />
        <ContactUsFormAndMap />
      </SectionContainer>
      <Services className="mx-0 bg-white-shade-2 px-[160px] py-0 max-lg:px-20 max-md:px-10 max-sm:mx-0 max-sm:px-8" />
    </>
  );
}

export default ContactUs;
