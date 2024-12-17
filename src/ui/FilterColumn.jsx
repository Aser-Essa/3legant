import { BiFilterAlt } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";
import CategryItemList from "./CategryItemList";
import PriceItemList from "./PriceItemList";

function FilterColumn() {
  const [searchParams] = useSearchParams("");
  const gridType = searchParams.get("grid");

  return (
    <>
      {(gridType == 3 || gridType == 1) && (
        <div className="flex min-w-[262px] flex-col gap-8 font-inter max-xl:min-w-[175px] max-[895px]:hidden">
          <div className="flex items-center gap-2">
            <BiFilterAlt className="h-6 w-6" />
            <p className="text-xl font-semibold">Filter</p>
          </div>
          <div>
            <p className="mb-4 font-semibold">PRICE</p>
            <ul className="category-scroll h-[226px] space-y-3 overflow-y-scroll">
              <CategryItemList value="All_Rooms" defaultValue={true}>
                All Rooms
              </CategryItemList>
              <CategryItemList value="Living_Room">Living Room</CategryItemList>
              <CategryItemList value="Bedroom">Bedroom</CategryItemList>
              <CategryItemList value="Kitchen">Kitchen</CategryItemList>
              <CategryItemList value="Bathroom">Bathroom</CategryItemList>
              <CategryItemList value="Dining">Dining</CategryItemList>
              <CategryItemList value="Outdoor">Outdoor</CategryItemList>
              <CategryItemList value="Electronics">Electronics</CategryItemList>
              <CategryItemList value="Chairs">Chairs</CategryItemList>
            </ul>
          </div>
          <div>
            <p className="mb-4 font-semibold">CATEGORIES</p>
            <ul className="space-y-3 overflow-y-hidden">
              <PriceItemList value="All_Prices">All Prices</PriceItemList>
              <PriceItemList value="0-100">0-100</PriceItemList>
              <PriceItemList value="100-200">100-200</PriceItemList>
              <PriceItemList value="200-300">200-300</PriceItemList>
              <PriceItemList value="300-400">300-400</PriceItemList>
              <PriceItemList value="400-500">400-500</PriceItemList>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default FilterColumn;
