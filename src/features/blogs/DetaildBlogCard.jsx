/* eslint-disable react/prop-types */
import Stars from "../../ui/Stars";
import { NavLink } from "react-router-dom";

function DetaildBlogCard({ article, gridType }) {
  return (
    <>
      <NavLink
        to={`/blogs/${article?.id}`}
        className={`mt-3 flex h-[345px] min-w-[calc(25%-18px)] overflow-hidden max-sm:h-fit max-sm:min-w-full`}
      >
        <img
          src={article?.images?.at(1)}
          className={`mt-3 h-[349px] w-[420px] min-w-[300px] max-sm:mt-0 max-sm:w-[177px]`}
          style={{ mixBlendMode: "multiply" }}
        />
        <div
          className={`w-fit p-6 py-0 font-inter font-semibold max-xl:w-full max-sm:py-0`}
        >
          <Stars rate={article?.Rate} />
          <div className="mb-4 mt-2 w-fit">
            <p>{article?.title}</p>
          </div>
          <div
            className={`h-[240px] overflow-hidden text-ellipsis font-inter text-sm font-normal text-black-shade-4 ${gridType == 1 && "w-[650px]"}`}
          >
            {article?.article_paragraphs?.join(" ")}
          </div>
        </div>
      </NavLink>
    </>
  );
}

export default DetaildBlogCard;
