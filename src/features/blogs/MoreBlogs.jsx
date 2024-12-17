import ArrowLink from "../../ui/ArrowLink";
import BlogCard from "./BlogCard";
import useBlogs from "./useBlogs";

// eslint-disable-next-line react/prop-types
function MoreBlogs({ title }) {
  const sliceNumber = Math.floor(Math.random() * 100);
  let { data: articles } = useBlogs();
  articles = articles?.slice(sliceNumber, sliceNumber + 3);

  return (
    <>
      <div className="mt-[160px]">
        <div className="mb-12 flex items-center justify-between">
          <p className="text-[28px] font-medium">{title}</p>
          <ArrowLink to="/blog">More Articles</ArrowLink>
        </div>
        <div className="grid h-[433px] grid-cols-[repeat(auto-fill,minmax(300px,_1fr))] items-center gap-6 overflow-hidden">
          {articles?.slice(0, 3)?.map((el, idx) => (
            <BlogCard article={el} key={`${el} ${idx}`} />
          ))}
        </div>
      </div>
    </>
  );
}

export default MoreBlogs;
