import { IoCheckmarkOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function OrderNavLink({ isActive, isComplete, title, number, link }) {
  let color = isComplete ? "#45B26B" : (isActive && "#141718") || "#B1B5C3";
  return (
    <NavLink
      className={`flex h-[68px] w-full max-w-[256px] items-center gap-[17px] border-b-2 pb-[26px] max-md:gap-2 ${isActive ? "max-sm:flex" : "max-sm:hidden"}`}
      style={{
        borderColor: color == "#B1B5C3" ? "transparent" : color,
      }}
      to={link}
    >
      <p
        className={`flex h-[42px] w-[42px] items-center justify-center rounded-[40px] border-b-2 text-[#FCFCFD]`}
        style={{
          borderColor: color,
          backgroundColor: color,
        }}
      >
        {isComplete ? (
          <IoCheckmarkOutline className="h-6 w-6" />
        ) : (
          <p
            className={`flex h-[42px] w-[42px] items-center justify-center rounded-[40px] text-[#FCFCFD]`}
          >
            {number}
          </p>
        )}
      </p>
      <p
        className="text-nowrap"
        style={{
          color: color,
        }}
      >
        {title}
      </p>
    </NavLink>
  );
}

export default OrderNavLink;
