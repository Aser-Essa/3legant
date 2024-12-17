import ArrowLink from "./ArrowLink";
import SectionContainer from "./SectionContainer";

function Categories() {
  return (
    <SectionContainer className="grid h-[664px] grid-cols-2 grid-rows-2 gap-6 max-lg:h-auto max-lg:grid-cols-1 max-lg:grid-rows-[auto]">
      <div className="relative row-span-2 h-[664px] bg-[#F3F5F7] max-lg:h-[377px] max-sm:row-span-1">
        <img
          src="/category1.png"
          className="max-lg:mt-[65px] max-lg:h-[300px]"
        />
        <div className="absolute left-12 top-12 font-medium text-black-shade-1">
          <p className="text-[34px]">Living Room</p>
          <ArrowLink to={`/shop?category=Living_Room`}>Shop Now</ArrowLink>
        </div>
      </div>
      <div className="relative bg-[#F3F5F7] max-lg:h-[180px]">
        <img
          src="/category3.png"
          className="absolute right-10 top-[55%] h-[280px] translate-y-[-50%] mix-blend-darken max-lg:h-[140px] max-md:right-4"
        />
        <div className="absolute bottom-8 left-8 font-medium text-black-shade-1">
          <p className="text-[34px] max-sm:text-[28px]">Bedroom</p>
          <ArrowLink to={`/shop?category=Bedroom`}>Shop Now</ArrowLink>
        </div>
      </div>
      <div className="relative bg-[#F3F5F7] max-lg:h-[180px]">
        <img
          src="/category2.png"
          className="absolute right-10 top-[55%] translate-y-[-50%] mix-blend-darken max-lg:h-[115px] max-md:right-4"
        />
        <div className="absolute bottom-8 left-8 font-medium text-black-shade-1">
          <p className="text-[34px] max-sm:text-[28px]">Kitchen</p>
          <ArrowLink to={`/shop?category=Kitchen`}>Shop Now</ArrowLink>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Categories;
