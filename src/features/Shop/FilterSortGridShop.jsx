import FilterBy from "../../ui/FilterBy";
import Grid from "../../ui/Grid";
import Grid2Icon from "../../ui/Grid2Icon";
import List from "../../ui/List";
import ListItem from "../../ui/ListItem";
import SortBy from "../../ui/SortBy";
import { BsGridFill } from "react-icons/bs";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import Grid1Icon from "../../ui/Grid1Icon";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Filter() {
  const [searchParams] = useSearchParams("");
  const [width, setWidth] = useState(window.innerWidth);

  const value = searchParams.get("category")?.replace("_", " ");
  const gridType = searchParams.get("grid");

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return window.removeEventListener("resize", () =>
      setWidth(window.innerWidth),
    );
  }, []);

  return (
    <div
      className={`mb-10 ml-auto flex gap-3 max-sm:flex-col ${
        gridType == 3 || gridType == 1
          ? "w-[calc(100%-282px)] max-xl:w-[calc(100%-195px)] max-[895px]:w-full"
          : "w-full"
      } items-end justify-between pt-[60px]`}
    >
      <div className="flex items-center gap-6 max-sm:w-full max-sm:flex-col">
        {(gridType == 3 || gridType == 1) && (
          <p className="font-inter text-xl font-semibold max-[895px]:hidden">
            {value || "All Rooms"}
          </p>
        )}
        <FilterBy
          title={"CATEGORIES"}
          param={"category"}
          defaultValue={"All Room"}
        >
          <List param={"category"} width={262}>
            <ListItem value="All_Rooms" defaultValue={true}>
              All Rooms
            </ListItem>
            <ListItem value="Living_Room">Living Room</ListItem>
            <ListItem value="Bedroom">Bedroom</ListItem>
            <ListItem value="Bathroom">Bathroom</ListItem>
            <ListItem value="Dining">Dining</ListItem>
            <ListItem value="Outdoor">Outdoor</ListItem>
            <ListItem value="Kitchen">Kitchen</ListItem>
          </List>
        </FilterBy>

        <FilterBy title={"PRICE"} param={"price"} defaultValue={"All Price"}>
          <List param={"price"} width={262}>
            <ListItem value="All_Prices" defaultValue={true}>
              All Prices
            </ListItem>
            <ListItem value="0-100">0-100</ListItem>
            <ListItem value="100-200">100-200</ListItem>
            <ListItem value="200-300">200-300</ListItem>
            <ListItem value="300-400">300-400</ListItem>
            <ListItem value="400-500">400-500</ListItem>
          </List>
        </FilterBy>
      </div>
      <div className="relative flex gap-8 max-sm:w-full max-sm:justify-between max-sm:border-y max-sm:border-white-shade-1 max-sm:py-2">
        <SortBy>
          <List param={"sortby"} width={110}>
            <ListItem value="Rate">Rate</ListItem>
            <ListItem value="Rate_desc">Rate_desc</ListItem>
            <ListItem value="Price">Price</ListItem>
            <ListItem value="Price_desc">Price_desc</ListItem>
            <ListItem value="Date">Date</ListItem>
            <ListItem value="Date_desc">Date_desc</ListItem>
          </List>
        </SortBy>
        <Grid param={"grid"}>
          <ListItem
            value="4"
            styleType="card"
            defaultValue={window.innerWidth > 680}
            className={"max-sm:hidden"}
          >
            <BsFillGrid3X3GapFill className="h-[21px] w-[21px]" />
          </ListItem>
          <ListItem value="3" styleType="card" className={"max-sm:hidden"}>
            <BsGridFill className="h-[18px] w-[18px]" />
          </ListItem>
          <ListItem value="2" styleType="card">
            <Grid2Icon />
          </ListItem>
          <ListItem value="1" styleType="card" defaultValue={width <= 680}>
            <Grid1Icon defaultValue={width <= 680} />
          </ListItem>
        </Grid>
      </div>
    </div>
  );
}

export default Filter;
