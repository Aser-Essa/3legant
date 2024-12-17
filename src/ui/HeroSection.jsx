import { NavLink } from "react-router-dom";
import PageNavigation from "./PageNavigation";

// eslint-disable-next-line react/prop-types
function HeroSection({ title, paragraph, img }) {
  return (
    <div className="relative">
      <img src={img} className="h-[392px] w-full" />
      <div className="absolute left-[50%] top-[50%] flex w-full translate-x-[-50%] translate-y-[-50%] flex-col items-center space-y-6 text-center text-black-shade-1 max-sm:space-y-4">
        <PageNavigation>
          <NavLink className="font-inter text-sm font-medium">Shop</NavLink>
        </PageNavigation>
        <p className="text-[54px] font-medium leading-[58px] max-sm:text-[40px]">
          {title}
        </p>
        <p className="font-inter text-lg leading-[30px] max-sm:text-base">
          {paragraph}
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
