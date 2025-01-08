import FlyMenu from "./FlyMenu";
import Icons from "./Icons";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

function Header() {
  return (
    <div className="h-[60px]">
      <div className="fixed top-10 z-[100000] flex h-[60px] w-full items-center justify-between bg-white px-[160px] max-lg:px-20 max-md:px-10 max-sm:px-8">
        <div className="flex items-center gap-1">
          <FlyMenu />
          <Logo className={"max-sm:text-base"} />
        </div>
        <NavLinks />
        <Icons />
      </div>
    </div>
  );
}

export default Header;
