import { useSearchParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function CategryItemList({ value, defaultValue, children }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const isActive = searchParams.get("category")
    ? searchParams.get("category") == value
    : defaultValue;

  return (
    <>
      <li
        onClick={() => {
          searchParams.set("category", value);
          setSearchParams(searchParams);
        }}
        className={`h-[22px] w-fit cursor-pointer font-inter text-sm font-semibold transition-all hover:text-black-shade-1 ${isActive ? "border-b-2 border-b-black-shade-1 font-semibold text-black-shade-1" : "text-black-shade-4"}`}
      >
        {children}
      </li>
    </>
  );
}

export default CategryItemList;
