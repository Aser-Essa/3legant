import ArrowLink from "./ArrowLink";

function AboutUs() {
  return (
    <div className="flex min-h-[413px] w-full items-center py-12 max-sm:h-auto max-sm:flex-col">
      <img
        src="/Living-Room4.jpg"
        className="max-h-[413px] min-h-[413px] w-[50%] flex-1 max-sm:min-h-[367px] max-sm:w-full"
      />
      <div className="flex max-h-[413px] min-h-[413px] w-full flex-1 flex-col justify-center space-y-4 bg-white-shade-2 px-[72px] text-black-shade-1 max-md:px-10 max-md:py-20 max-sm:min-h-[auto] max-sm:px-4 max-sm:py-[58.5px]">
        <p className="text-[40px] font-medium leading-[44px] max-sm:text-[20px] max-sm:leading-[38px]">
          About Us
        </p>
        <p className="font-inter text-sm leading-[26px]">
          3legant is a gift & decorations store
          <br className="hidden max-sm:block" /> based in HCMC, Vietnam. Est
          since 2019. <br /> Our customer service is always prepared
          <br className="hidden max-sm:block" /> to support you
          <br className="max-sm:hidden" /> 24/7
        </p>
        <ArrowLink className="font-medium">Shop Now</ArrowLink>
      </div>
    </div>
  );
}

export default AboutUs;
