// eslint-disable-next-line react/prop-types
function Service({ title, paragraph, img, className }) {
  return (
    <>
      <div className={`bg-white-shade-2 ${className}`}>
        <img src={`/${img}`} className="mb-4 h-12 w-12" />
        <div className="space-y-2">
          <p className="max-lg:text-md font-inter text-[20px] font-medium text-black-shade-1 max-md:text-sm max-sm:font-semibold">
            {title}
          </p>
          <p className="max-sm:w-22 font-inter text-sm text-black-shade-4">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
}

export default Service;
