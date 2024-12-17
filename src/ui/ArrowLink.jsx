import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function ArrowLink({ to, className, children }) {
  return (
    <Link
      to={to}
      className={`flex w-fit items-center gap-1 border-b border-black-shade-1 font-inter font-medium leading-[28px] max-sm:text-sm max-sm:leading-6 ${className}`}
    >
      {children}
      <IoArrowForward />
    </Link>
  );
}

export default ArrowLink;
