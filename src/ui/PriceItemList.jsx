import RadioBox from "./RadioBox";

// eslint-disable-next-line react/prop-types
function PriceItemList({ children }) {
  return (
    <div className="flex w-full items-center justify-between">
      <label
        htmlFor={children}
        className="h-[22px] font-inter text-sm font-semibold text-black-shade-4"
      >
        {children}
      </label>
      <RadioBox id={children} />
    </div>
  );
}

export default PriceItemList;
