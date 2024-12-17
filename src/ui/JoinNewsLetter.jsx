import { MdOutlineMailOutline } from "react-icons/md";

function JoinNewsLetter() {
  return (
    <>
      <div className="relative mt-20 h-[360px] overflow-hidden bg-[#F2F4F6]">
        <img
          src="/category3.png"
          className="absolute left-[-140px] top-[-18px] h-[490px] w-[480px] mix-blend-darken max-lg:w-[380px] max-md:hidden"
        />
        <img
          src="/chair.png"
          className="absolute bottom-[-180px] right-[-210px] h-[500px] w-[640px] mix-blend-darken max-lg:w-[460px] max-md:hidden"
        />
        <div className="mx-auto flex h-full w-fit flex-col justify-center text-center text-black-shade-1 max-sm:w-full">
          <p className="mb-2 text-[40px] font-medium leading-[44px] tracking-[-0.4px] max-sm:text-[34px]">
            Join Our Newsletter
          </p>
          <p className="font-inter text-lg max-sm:text-sm">
            Sign up for deals, new products and
            <br className="hidden max-sm:block" /> promotions
          </p>
          <div className="mt-8 flex w-[488px] items-center border-b-[.5px] border-[#6c727580] py-3 font-inter font-medium text-black-shade-4 max-lg:w-[400px] max-sm:mx-auto max-sm:w-[311px]">
            <MdOutlineMailOutline className="mr-2 h-6 w-6 text-black" />
            <input
              type="text"
              className="w-full bg-transparent text-black-shade-4 placeholder:font-inter placeholder:font-medium placeholder:text-black-shade-4 focus:outline-none"
              placeholder="Email address"
            />
            <button className="ml-auto h-fit">Signup</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinNewsLetter;
