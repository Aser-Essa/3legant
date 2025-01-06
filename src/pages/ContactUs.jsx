import SectionContainer from "../ui/SectionContainer";
import ContactUsDescription from "../features/contact us/ContactUsDescription";
import AboutUs from "../ui/AboutUs";
import ContactUsDetails from "../features/contact us/ContactUsDetails";
import ContactUsFormAndMap from "../features/contact us/ContactUsFormAndMap";
import Services from "../ui/Services";
import PageNavigation from "../ui/PageNavigation";
import PageNavigationLink from "../ui/PageNavigationLink";

function ContactUs() {
  return (
    <>
      <SectionContainer className={"mb-20 max-sm:mb-10"}>
        <PageNavigation className={"mt-4"}>
          <PageNavigationLink
            title={"Contact Us"}
            link={"/contact-us"}
            className="flex-shrink-0 overflow-hidden"
            delay={0.4}
          />
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
