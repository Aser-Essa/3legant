import ArrowLink from "./ArrowLink";
import SlideInFromLeftAnimation from "./SlideInFromLeftAnimation";

function Offers() {
  return (
    <>
      <div className="mt-8 flex h-[532px] w-full items-center max-sm:h-auto max-sm:flex-col">
        <img
          src="/Living-Room4.jpg"
          className="h-full w-[50%] flex-1 max-sm:min-h-[367px] max-sm:w-full"
        />

        <div className="h-full w-full flex-1 space-y-4 bg-white-shade-2 px-[72px] py-[140px] text-black-shade-1 max-md:px-10 max-md:py-20 max-sm:px-8 max-sm:py-[58.5px]">
          <SlideInFromLeftAnimation duration={0.8}>
            <p className="font-inter font-bold text-blue-custom">
              SALE UP TO 35% OFF
            </p>
          </SlideInFromLeftAnimation>
          <SlideInFromLeftAnimation duration={0.8} delay={0.1}>
            <p className="text-[40px] font-medium leading-[44px] max-sm:text-[34px] max-sm:leading-[38px]">
              HUNDREDS of
              <br /> New lower prices!
            </p>
          </SlideInFromLeftAnimation>
          <SlideInFromLeftAnimation duration={0.8} delay={0.15}>
            <p className="font-inter text-[20px] leading-[32px]">
              It’s more affordable than ever
              <br /> to give every room in your home a stylish makeover
            </p>
          </SlideInFromLeftAnimation>
          <ArrowLink>Shop Now</ArrowLink>
        </div>
      </div>
    </>
  );
}

export default Offers;
