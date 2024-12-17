import { Link, NavLink } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { TbBrandYoutube } from "react-icons/tb";

function Footer() {
  return (
    <>
      <div className="h-[249px] bg-black-shade-1 px-[160px] py-20 pb-8 max-lg:px-10 max-md:h-auto max-sm:h-auto max-sm:px-8 max-sm:py-12">
        <div className="flex items-center justify-between max-sm:flex-col">
          <div className="flex items-center divide-x-[1px] divide-black-shade-4 max-sm:mb-10 max-sm:flex-col max-sm:divide-x-0 max-sm:divide-y-[1px]">
            <h1 className="pr-8 text-2xl font-medium leading-[24px] text-white max-sm:pb-4 max-sm:pr-0">
              3legant<span className="text-black-shade-4">.</span>
            </h1>
            <p className="pl-8 font-inter text-sm leading-[22px] text-white-shade-1 max-sm:pl-0 max-sm:pt-4 max-sm:font-normal">
              Gift & Decoration Store
            </p>
          </div>
          <ul className="flex items-center gap-10 text-nowrap font-inter text-sm font-medium text-[#fefefe] max-sm:flex-col max-sm:gap-8 max-sm:font-normal">
            <li>
              <NavLink to={"/"}>
                <p className="text-[#fefefe]">Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/shop"}>
                <p className="text-[#fefefe]">Shop</p>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}>
                <p className="text-[#fefefe]">Blog</p>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact-us"}>
                <p className="text-[#fefefe]">Contact Us</p>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="mt-[49px] flex items-center justify-between max-md:flex-col max-md:gap-4 max-sm:mt-10 max-sm:flex-col-reverse">
          <div className="flex items-center gap-7 text-nowrap py-4 text-xs leading-5 text-[#fefefe] max-sm:flex-col-reverse max-sm:pb-0 max-sm:pt-8">
            <p className="text-white-shade-1 max-sm:text-xs max-sm:font-normal">
              Copyright © 2023 3legant. All rights reserved
            </p>
            <div className="flex items-center gap-7">
              <p className="font-semibold">Privacy Policy</p>
              <p className="font-semibold">Terms of Use</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-[#fefefe]">
            <Link to={"https://www.instagram.com/asser_essa_/"} target="_blank">
              <FiInstagram className="h-6 w-6" />
            </Link>
            <Link
              to={"https://www.facebook.com/profile.php?id=100004553357437"}
              target="_blank"
            >
              <FiFacebook className="h-6 w-6" />
            </Link>
            <TbBrandYoutube className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
