import { useSearchParams } from "react-router-dom";

function DisplayController() {
  const [searchParams, setSearchParams] = useSearchParams();
  const display = searchParams.get("display");

  function handleClickInfo() {
    searchParams.set("display", "additional-info");
    setSearchParams(searchParams);
  }
  function handleClickReviews() {
    searchParams.set("display", "reviews");
    setSearchParams(searchParams);
  }

  return (
    <>
      <ul className="mb-10 flex items-center gap-20 border-b border-white-shade-1 font-inter text-lg font-medium text-[#807E7E]">
        <li
          className={`cursor-pointer ${display === "additional-info" ? "border-b border-[#121212] font-medium text-[#121212]" : ""}`}
          onClick={handleClickInfo}
        >
          Additional Info
        </li>
        <li
          className={`cursor-pointer ${display === "reviews" || display === null ? "border-b border-[#121212] font-medium text-[#121212]" : ""}`}
          onClick={handleClickReviews}
        >
          Reviews
        </li>
      </ul>
    </>
  );
}

export default DisplayController;
