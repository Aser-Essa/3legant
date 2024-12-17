function ContactUsDetails() {
  return (
    <div>
      <p className="text-center text-[40px] font-medium">Contact Us</p>
      <div className="my-10 grid grid-cols-3 gap-6 max-sm:grid-cols-1 max-sm:gap-4">
        <div
          className={`flex h-[156px] flex-col items-center justify-center bg-white-shade-2 text-center max-sm:px-8`}
        >
          <img src={`/store 01.png`} className="mb-4 h-8 w-8" />
          <div className="space-y-2 max-sm:h-[76px]">
            <p className="mx-auto w-fit font-inter font-bold text-black-shade-4 max-sm:text-sm max-sm:font-semibold">
              ADDRESS
            </p>
            <p className="font-inter font-semibold text-black-shade-1">
              234 Hai Trieu, Ho Chi Minh City, Viet Nam
            </p>
          </div>
        </div>
        <div
          className={`flex h-[156px] flex-col items-center justify-center bg-white-shade-2`}
        >
          <img src={`/call.png`} className="mb-4 h-8 w-8" />
          <div className="space-y-2 max-sm:h-[76px]">
            <p className="mx-auto w-fit font-inter font-bold text-black-shade-4 max-sm:text-sm max-sm:font-semibold">
              CONTACT US
            </p>
            <p className="font-inter font-semibold text-black-shade-1">
              +84 234 567 890
            </p>
          </div>
        </div>
        <div
          className={`flex h-[156px] flex-col items-center justify-center bg-white-shade-2`}
        >
          <img src={`/mail.png`} className="mb-4 h-8 w-8" />
          <div className="space-y-2 max-sm:h-[76px]">
            <p className="mx-auto w-fit font-inter font-bold text-black-shade-4 max-sm:text-sm max-sm:font-semibold">
              EMAIL
            </p>
            <p className="font-inter font-semibold text-black-shade-1">
              hello@3legant.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsDetails;
