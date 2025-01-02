import ArrowLink from "./ArrowLink";
import ProductCards from "../features/Shop/ProductCards";
import SectionContainer from "./SectionContainer";
import SlideInFromLeftAnimation from "./SlideInFromLeftAnimation";

function NewArrival() {
  return (
    <>
      <SectionContainer className="mt-8 overflow-hidden">
        <div className="mb-12 flex items-center justify-between max-sm:mb-10">
          <SlideInFromLeftAnimation duration={0.6} delay={0.1}>
            <p className="font-poppins text-[40px] font-medium leading-[44px] tracking-[-0.4px] max-sm:text-[34px]">
              New
              <br /> Arrival
            </p>
          </SlideInFromLeftAnimation>
          <span className="max-sm:hidden">
            <ArrowLink>More Products</ArrowLink>
          </span>
        </div>
        <ProductCards />
      </SectionContainer>
    </>
  );
}
export default NewArrival;
