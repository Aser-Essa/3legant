import { NavLink } from "react-router-dom";
import SlideInFromLeftAnimation from "./SlideInFromLeftAnimation";

function NavLinks() {
  return (
    <ul className="flex items-center gap-10 font-medium text-black-shade-4 max-sm:hidden">
      <SlideInFromLeftAnimation duration={0.5} delay={0.1}>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
      </SlideInFromLeftAnimation>
      <SlideInFromLeftAnimation duration={0.5} delay={0.2}>
        <li>
          <NavLink to={"/shop"}>Shop</NavLink>
        </li>
      </SlideInFromLeftAnimation>
      <SlideInFromLeftAnimation duration={0.5} delay={0.3}>
        <li>
          <NavLink to={"/blog"}>Blog</NavLink>
        </li>
      </SlideInFromLeftAnimation>
      <SlideInFromLeftAnimation duration={0.5} delay={0.4}>
        <li>
          <NavLink to={"/contact-us"}>Contact Us</NavLink>
        </li>
      </SlideInFromLeftAnimation>
    </ul>
  );
}

export default NavLinks;
