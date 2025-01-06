import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import useProducts from "../features/Shop/useProducts";
import useOutSideClick from "../hooks/useOutSideClick";

function Search() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const { data } = useProducts();
  const { ref, open, setOpen } = useOutSideClick();

  function changeHandler(e) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    setProducts(
      data?.filter((el) =>
        el?.title?.toLowerCase()?.startsWith(search?.toLowerCase()),
      ),
    );
  }, [search]);

  return (
    <>
      <motion.img
        src="/search 02.png"
        className="h-6 w-6 cursor-pointer text-white max-sm:hidden"
        onClick={() => setOpen((open) => !open)}
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        animate={{ opacity: 1, scale: [0, 1.2, 1], rotate: [0, -60, 0] }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
      {createPortal(
        open && (
          <div
            className="absolute right-40 top-[100px] z-50 max-lg:right-20 max-md:right-10 max-sm:hidden"
            ref={ref}
          >
            <input
              type="text"
              value={search}
              onChange={changeHandler}
              placeholder="Search"
              className={
                "h-10 w-[280px] rounded-md border border-[#CBCBCB] px-4 placeholder:text-black-shade-4 focus:outline-none"
              }
            />
            {search.length > 0 && (
              <div
                className="mt-1 flex w-[280px] flex-col divide-y-[1px] rounded-lg border border-[#CBCBCB] bg-white p-3"
                style={{ boxShadow: "0px 5px 15px 1px #0000001f" }}
              >
                {products?.length > 0 ? (
                  products?.slice(0, 6)?.map((el, idx) => (
                    <Link
                      to={`/products/${el.id}`}
                      key={`${el.id}${idx}`}
                      className="flex w-full cursor-pointer items-center gap-3 overflow-hidden rounded-md p-2 hover:bg-white-shade-2 hover:text-black-shade-1"
                      onClick={() => {
                        setOpen(false);
                        setSearch("");
                      }}
                    >
                      <img
                        src={el?.primary_image}
                        className="h-[50px] w-[80px] rounded-sm"
                      />
                      <p className="overflow-hidden text-ellipsis text-nowrap font-semibold">
                        {el?.title}
                      </p>
                    </Link>
                  ))
                ) : (
                  <p className="text-black-shade-4">
                    This Product Is Not Exist
                  </p>
                )}
              </div>
            )}
          </div>
        ),
        document.body,
      )}
    </>
  );
}

export default Search;
