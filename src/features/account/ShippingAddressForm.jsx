import { useEffect, useRef, useState } from "react";
import { LuPencilLine } from "react-icons/lu";
import useUpdateAdress from "./useUpdateAdress";
import { useUser } from "../../hooks/useUser";
import SlideInFromRightAnimation from "../../ui/SlideInFromRightAnimation";

function ShippingAddressForm() {
  const { user } = useUser();
  const { updateAdress } = useUpdateAdress();
  const adressInfo = user?.user_metadata?.shipping_address;
  const ref = useRef(null);
  const [edit, setEdit] = useState(false);
  const [state, setState] = useState(adressInfo?.state);
  const [number, setNumber] = useState(adressInfo?.number);
  const [street, setStreet] = useState(adressInfo?.street);

  function handleClick() {
    setEdit((edit) => !edit);
    if (edit) {
      let shipping_address = { state, number, street };
      updateAdress({ shipping_address });
    }
  }

  const handleClickOutside = (event) => {
    const domNode = ref.current;
    if ((!domNode || !domNode.contains(event.target)) && edit) {
      setEdit(false);
      let shipping_address = { state, number, street };
      updateAdress({ shipping_address });
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [edit, state, number, street]);

  return (
    <SlideInFromRightAnimation className={"w-full"} duration={0.4} delay={0.12}>
      <div
        className="h-full w-full rounded-lg border border-black-shade-4 p-4"
        ref={ref}
      >
        <div className="mb-2 flex items-center justify-between font-semibold">
          <p>Shipping Address</p>
          <div
            className={`flex cursor-pointer items-center gap-1 ${edit ? "text-black-shade-1" : "text-black-shade-4"} `}
            onClick={handleClick}
          >
            <LuPencilLine />
            <p>Edit</p>
          </div>
        </div>
        <form className="flex flex-col gap-1 text-sm leading-[22px]">
          <input
            className="bg-transparent focus:outline-none"
            value={state || "Sofia Havertz"}
            id={"state"}
            disabled={!edit}
            onChange={(e) => setState(e.target.value)}
          />
          <input
            className="bg-transparent focus:outline-none"
            value={number || "(+1) 234 567 890"}
            id={"number"}
            disabled={!edit}
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            className="bg-transparent focus:outline-none"
            value={street || "345 Long Island, NewYork, United States"}
            id={"street"}
            disabled={!edit}
            onChange={(e) => setStreet(e.target.value)}
          />
        </form>
      </div>
    </SlideInFromRightAnimation>
  );
}

export default ShippingAddressForm;
