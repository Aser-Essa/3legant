import { NavLink } from "react-router-dom";
import PageNavigation from "../../ui/PageNavigation";
import PageNavigationLink from "../../ui/PageNavigationLink";
import useBlog from "./useBlog";
import Spinner from "../../ui/Spinner";

function BlogHeader() {
  const { data: article, isLoading } = useBlog();
  const images = article?.images?.slice(1);

  if (isLoading) return <Spinner />;

  return (
    <>
      <PageNavigation>
        <PageNavigationLink title={"Blog"} link={"/blog"} />
        <NavLink
          to={`/blogs/${article?.id}`}
          className="truncate font-inter text-sm font-medium"
        >
          <p className="truncate">{article?.title}</p>
        </NavLink>
      </PageNavigation>
      <div className="mt-[56px] space-y-4 font-inter">
        <p className="font-inter text-xs font-bold">ARTICLE</p>
        <p className="text-[54px] font-medium leading-[58px] tracking-[-1px]">
          {article?.title}
        </p>
        <p className="text-black-shade-4">{article?.date}</p>
      </div>
      <div className="my-10 h-[647px] w-full overflow-hidden">
        <img
          src={images?.at(0)}
          className="h-full w-full scale-y-150 opacity-[.8px] blur-[1px]"
        />
      </div>
    </>
  );
}

export default BlogHeader;
