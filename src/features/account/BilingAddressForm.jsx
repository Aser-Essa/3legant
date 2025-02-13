import { useEffect, useRef, useState } from "react";
import { LuPencilLine } from "react-icons/lu";
import useUpdateAdress from "./useUpdateAdress";
import { useUser } from "../account/useUser";
import SlideInFromLeftAnimation from "../../ui/SlideInFromLeftAnimation";

function BilingAddressForm() {
  const { user } = useUser();
  const adressInfo = user?.user_metadata?.billing_address;
  const { updateAdress } = useUpdateAdress();
  const ref = useRef(null);
  const [edit, setEdit] = useState(false);
  const [state, setState] = useState(adressInfo?.state);
  const [number, setNumber] = useState(adressInfo?.number);
  const [street, setStreet] = useState(adressInfo?.street);

  function handleClick() {
    setEdit((edit) => !edit);
    if (edit) {
      let billing_address = { state, number, street };
      updateAdress({ billing_address });
    }
  }

  const handleClickOutside = (event) => {
    const domNode = ref.current;
    if ((!domNode || !domNode.contains(event.target)) && edit) {
      setEdit(false);
      let billing_address = { state, number, street };
      updateAdress({ billing_address });
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [edit, state, number, street]);

  return (
    <SlideInFromLeftAnimation className={"w-full"} duration={0.4} delay={0.12}>
      <div
        className="h-full w-full rounded-lg border border-black-shade-4 p-4"
        ref={ref}
      >
        <div className="mb-2 flex items-center justify-between font-semibold">
          <p>Billing Address</p>
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
            value={state?.length >= 0 ? state : "Sofia Havertz"}
            id={"state"}
            disabled={!edit}
            onChange={(e) => setState(e.target.value)}
          />
          <input
            className="bg-transparent focus:outline-none"
            value={number?.length >= 0 ? number : "(+1) 234 567 890"}
            id={"number"}
            disabled={!edit}
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            className="bg-transparent focus:outline-none"
            value={
              street?.length >= 0
                ? street
                : "345 Long Island, NewYork, United States"
            }
            id={"street"}
            disabled={!edit}
            onChange={(e) => setStreet(e.target.value)}
          />
        </form>
      </div>
    </SlideInFromLeftAnimation>
  );
}

export default BilingAddressForm;
