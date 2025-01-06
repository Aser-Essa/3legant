import { useEffect, useRef, useState } from "react";

function useOutSideClick() {
  const ref = useRef();
  const [open, setOpen] = useState();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  return { ref, open, setOpen };
}

export default useOutSideClick;
