/* eslint-disable react/prop-types */
import Stars from "../../ui/Stars";
import { NavLink } from "react-router-dom";

function DetaildBlogCard({ article }) {
  let discription = article?.articles?.at(0)?.value;
  return (
    <>
      <NavLink
        to={`/blogs/${article?.id}`}
        className={`mt-3 flex h-[349px] min-w-[calc(25%-18px)] overflow-hidden max-sm:h-fit max-sm:min-w-full`}
      >
        <img
          src={article?.images?.at(1)}
          className={`mt-[15px] h-[349px] w-[100%] min-w-[265.88px] scale-y-150 max-sm:mt-0 max-sm:w-[177px]`}
          style={{ mixBlendMode: "multiply" }}
        />
        <div
          className={`p-6 py-0 font-inter font-semibold max-xl:w-full max-sm:py-0`}
        >
          <Stars rate={article?.Rate} />
          <div className="mb-4 mt-2">
            <p>{article?.title}</p>
          </div>
          <div
            className={`h-[240px] w-[230px] overflow-hidden text-ellipsis font-inter text-sm font-normal text-black-shade-4`}
          >
            {discription ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eius tenetur illo magnam accusamus sint. Doloribus enim eligendi debitis exercitationem! Consequuntur omnis praesentium officia alias nemo adipisci, fugiat itaque suscipit!"}
          </div>
        </div>
      </NavLink>
    </>
  );
}

export default DetaildBlogCard;
