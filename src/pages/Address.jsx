import BilingAddressForm from "../features/account/BilingAddressForm";
import ShippingAddressForm from "../features/account/ShippingAddressForm";

function Address() {
  return (
    <div className="w-full px-[72px] max-lg:px-[32px] max-md:px-0 max-sm:px-0 max-sm:pt-10">
      <p className="font-inter text-xl font-semibold">Address</p>
      <div className="mt-5 flex h-[140px] items-center gap-6 font-inter max-2xl:flex-wrap max-lg:h-fit">
        <BilingAddressForm />
        <ShippingAddressForm />
      </div>
    </div>
  );
}

export default Address;
