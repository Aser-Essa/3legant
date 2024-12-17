// eslint-disable-next-line react/prop-types
function Button({ onClick, className, children }) {
  return (
    <button
      className={`${className} h-12 w-full rounded-lg bg-black-shade-1 px-10 py-2.5 font-medium tracking-[-.04px] text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
