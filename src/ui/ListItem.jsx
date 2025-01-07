/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";

function ListItem({
  children,
  param,
  value,
  defaultValue,
  className,
  styleType,
  setIsOpen = () => {},
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  let style =
    styleType === "card"
      ? {
          alignItems: "center",
          justifyContent: "center",
          width: "46px",
          height: "40px",
          borderRadius: 0,
        }
      : {};

  const isActive = searchParams.get(param)
    ? searchParams.get(param) == value
    : defaultValue;

  return (
    <li
      onClick={() => {
        searchParams.set(param, value);
        setSearchParams(searchParams);
        setIsOpen(false);
      }}
      className={`ml-[-1px] flex cursor-pointer p-2 transition-all hover:rounded-lg hover:bg-white-shade-2 hover:text-black-shade-1 ${isActive ? "rounded-lg bg-white-shade-2 font-semibold text-black-shade-1" : ""} ${className} `}
      style={style}
    >
      {children}
    </li>
  );
}

export default ListItem;
