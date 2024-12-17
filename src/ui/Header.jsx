import FlyMenu from "./FlyMenu";
import Icons from "./Icons";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

function Header() {
  return (
    <div className="flex h-[60px] items-center justify-between px-[160px] max-lg:px-20 max-md:px-10 max-sm:px-8">
      <div className="flex items-center gap-1">
        <FlyMenu />
        <h1>
          <Logo className={"max-sm:text-base"} />
        </h1>
      </div>
      <span className="max-sm:hidden">
        <NavLinks />
      </span>
      <Icons />
    </div>
  );
}

export default Header;
