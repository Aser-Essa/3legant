import ArrowLink from "../../ui/ArrowLink";
import TextAnimation from "../../ui/TextAnimation";
import BlogCard from "./BlogCard";
import useBlogs from "./useBlogs";

// eslint-disable-next-line react/prop-types
function MoreBlogs({ title }) {
  const sliceNumber = Math.floor(Math.random() * 100);
  let { data: articles } = useBlogs();
  articles = articles?.slice(sliceNumber, sliceNumber + 3);

  return (
    <>
      <div className="mt-[80px] max-sm:mt-8">
        <div className="mb-10 flex items-center justify-between max-sm:mb-8">
          <div className="text-[28px] font-medium">
            <TextAnimation text={title} />
          </div>
          <ArrowLink to="/blog">More Articles</ArrowLink>
        </div>
        <div className="grid h-[443.8px] grid-cols-[repeat(auto-fill,minmax(300px,_1fr))] items-center gap-6 overflow-hidden">
          {articles?.slice(0, 3)?.map((el, idx) => (
            <BlogCard
              article={el}
              key={`${el} ${idx}`}
              delay={idx}
              ArrowOrDate={"arrow"}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MoreBlogs;
