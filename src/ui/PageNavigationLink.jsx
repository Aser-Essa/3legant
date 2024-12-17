import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

// eslint-disable-next-line react/prop-types
function PageNavigationLink({ title, link }) {
  return (
    <Link to={link} className="flex items-center gap-1">
      <p className="text-nowrap font-inter text-sm font-medium">{title}</p>
      <IoIosArrowForward />
    </Link>
  );
}

export default PageNavigationLink;
