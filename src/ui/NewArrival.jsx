import ArrowLink from "./ArrowLink";
import ProductCards from "../features/Shop/ProductCards";
import SectionContainer from "./SectionContainer";

function NewArrival() {
  return (
    <>
      <SectionContainer className="overflow-hidden pt-12">
        <div className="mb-12 flex items-center justify-between max-sm:mb-10">
          <p className="text-[40px] font-medium leading-[44px] tracking-[-0.4px] max-sm:text-[34px]">
            New
            <br /> Arrival
          </p>
          <span className="max-sm:hidden">
            <ArrowLink>More Products</ArrowLink>
          </span>
        </div>
        <ProductCards />
      </SectionContainer>
    </>
  );
}
// w-[90%] overflow-hidden text-ellipsis text-nowrap
export default NewArrival;
