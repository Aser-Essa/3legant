import SortBy from "../../ui/SortBy";
import List from "../../ui/List";
import ListItem from "../../ui/ListItem";
import Grid from "../../ui/Grid";
import { NavLink, useSearchParams } from "react-router-dom";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import Grid1Icon from "../../ui/Grid1Icon";
import Grid2Icon from "../../ui/Grid2Icon";

function FilterSortGridBlog() {
  const [searchParams] = useSearchParams();
  const display = searchParams?.get("display");

  const activeStyle = {
    borderBottom: "1px #141718 solid",
    fontWeight: "600",
  };

  const notActive = {
    borderBottom: "none",
    fontWeight: "600",
    color: "#807E7E",
  };

  return (
    <div className="mt-6 flex items-center justify-between max-sm:flex-col max-sm:gap-4">
      <div className="flex items-center gap-10 text-sm font-semibold text-[#807E7E] max-sm:hidden">
        <NavLink
          className="blog"
          to={"/blog?display=all"}
          style={display !== "featured" ? activeStyle : notActive}
        >
          All Blog
        </NavLink>
        <NavLink
          className="blog"
          to={"/blog?display=featured"}
          style={display == "featured" ? activeStyle : notActive}
        >
          Featured
        </NavLink>
      </div>
      <div className="relative flex gap-8 max-sm:w-full max-sm:justify-between max-sm:border-y max-sm:border-white-shade-1 max-sm:py-2">
        <SortBy>
          <List param={"sortby"} width={110}>
            <ListItem value="title">Title</ListItem>
            <ListItem value="title_desc">Title_desc</ListItem>
          </List>
        </SortBy>
        <Grid param={"grid"}>
          <ListItem
            value="4"
            styleType="card"
            defaultValue={true}
            className={"max-sm:hidden"}
          >
            <BsFillGrid3X3GapFill className="h-[21px] w-[21px]" />
          </ListItem>
          <ListItem value="2" styleType="card">
            <Grid2Icon />
          </ListItem>
          <ListItem value="1" styleType="card" className="hidden max-sm:flex">
            <Grid1Icon />
          </ListItem>
        </Grid>
      </div>
    </div>
  );
}

export default FilterSortGridBlog;
