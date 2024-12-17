import SectionContainer from "./SectionContainer";

function Solgan() {
  return (
    <>
      <SectionContainer className="mb-10 mt-8 flex items-center justify-between max-sm:flex-col max-sm:items-start">
        <p className="text-[72px] font-medium leading-[76px] tracking-[-2px] max-lg:text-4xl max-md:text-3xl max-sm:mb-4 max-sm:text-[40px] max-sm:leading-[44px] max-sm:tracking-[-.4px]">
          Simply Unique<span className="text-black-shade-4">/</span>
          <br />
          Simply Better<span className="text-black-shade-4">.</span>
        </p>
        <p className="mr-[30px] text-black-shade-4 max-sm:text-sm max-sm:leading-[22px] max-sm:tracking-[0px]">
          <span className="font-medium text-black-shade-3">3legant</span> is a
          gift & decorations store based in HCMC,
          <br className="max-sm:hidden" /> Vietnam. Est since 2019.
        </p>
      </SectionContainer>
    </>
  );
}

export default Solgan;
