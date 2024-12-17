// eslint-disable-next-line react/prop-types
function CheckBox({ register, id, isRequired }) {
  const requirements = {
    validate: (value) =>
      value === true || "You Must Agree Privacy Policy and Terms of Use",
  };
  return (
    <div className="flex items-center justify-center gap-2">
      <input
        type="checkbox"
        id={id}
        className="peer relative mt-1 h-6 w-6 shrink-0 cursor-pointer appearance-none rounded-[4px] border-2 border-black-shade-4 bg-white checked:border-0 checked:bg-black-shade-1"
        {...register("terms&privacy", isRequired ? requirements : {})}
      />
      <svg
        className="pointer-events-none absolute mt-1 hidden h-4 w-4 peer-checked:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
}

export default CheckBox;
