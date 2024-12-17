import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <ul className="flex items-center gap-10 font-medium text-black-shade-4">
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/shop"}>Shop</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={"/contact-us"}>Contact Us</NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
