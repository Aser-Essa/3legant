import { useSearchParams } from "react-router-dom";
import GridPage from "../../ui/GridPage";
import DetaildBlogCard from "./DetaildBlogCard";
import BlogCard from "./BlogCard";
import useBlogs from "./useBlogs";
import Spinner from "../../ui/Spinner";

function BlogsCards() {
  const [searchParams] = useSearchParams();
  const gridType = searchParams.get("grid") || 4;
  let { data: articles, isLoading } = useBlogs();
  articles = articles?.filter((el) => el?.images?.length > 1);

  if (isLoading) return <Spinner />;

  return (
    <>
      <GridPage
        data={articles}
        render={(el, idx) => {
          if (gridType == 3 || gridType == 4 || window.innerWidth < 638) {
            return <BlogCard article={el} key={`${el} ${idx}`} />;
          } else {
            return <DetaildBlogCard article={el} key={`${el} ${idx}`} />;
          }
        }}
      />
    </>
  );
}

export default BlogsCards;
