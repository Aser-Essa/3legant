// eslint-disable-next-line react/prop-types
function SectionContainer({ className, children }) {
  return (
    <div
      className={`mx-[160px] max-lg:mx-20 max-md:mx-10 max-sm:mx-8 ${className} max-xl:mx-20`}
    >
      {children}
    </div>
  );
}

export default SectionContainer;
