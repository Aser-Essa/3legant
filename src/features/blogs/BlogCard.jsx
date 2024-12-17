import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
function BlogCard({ article }) {
  return (
    <NavLink
      to={`/blogs/${article?.id}`}
      className="flex h-full w-full flex-col"
    >
      <div className="h-full w-full space-y-6 overflow-hidden">
        <img
          src={article?.images?.at(1)}
          className="h-[325px] w-full scale-y-150"
        />
      </div>
      <p className="mb-2 mt-6 max-h-[56px] min-h-[56px] overflow-hidden text-xl font-medium leading-[28px] max-lg:text-start max-lg:text-sm">
        {article?.title}
      </p>
      <p className="font-inter text-xs text-black-shade-4">{article?.date}</p>
    </NavLink>
  );
}

export default BlogCard;
