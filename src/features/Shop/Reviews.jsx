import { useState } from "react";
import { useUser } from "../account/useUser";
import FiveStarRate from "../../ui/FiveStarRate";
import { IoIosArrowRoundForward, IoIosStar } from "react-icons/io";
import Review from "./Review";
import useProduct from "./useProduct";
import useAddReview from "./useAddReview";
import List from "../../ui/List";
import ListItem from "../../ui/ListItem";
import FilterBy from "../../ui/FilterBy";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";
import toast from "react-hot-toast";
import TextAnimation from "../../ui/TextAnimation";
import { motion } from "motion/react";

function Reviews() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { AddReview } = useAddReview();
  const { data: product } = useProduct();
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(1);
  const { user } = useUser();
  const displayReviews = searchParams.get("displayReviews");

  const fullStars = Array.from({ length: stars }, (num) => num++);
  const outLineStars = Array.from({ length: 5 - stars }, (num) => num++);

  function handleClickStar(rate) {
    setStars(rate);
  }

  function handleClick() {
    if (user) {
      const {
        user_metadata: { firstName, username },
      } = user;

      const review = {
        name: firstName,
        avatar: user?.user_metadata?.avatar,
        comments: comment,
        userName: username,
        id: `${user?.id}`,
        rate: stars,
        createdAt: new Date().toISOString(),
      };

      const allReviews = [review, ...product.reviews];

      if (comment?.length > 0) {
        AddReview({ reviewsArr: allReviews, id: product.id });
      }

      setComment("");
      setStars(1);
    } else {
      navigate("/signup");
      toast.error("You should sign up ");
    }
  }

  function handleChange(e) {
    setComment(e.target.value);
  }

  let reviews = product?.reviews || [];

  if (displayReviews === "Newest") {
    const reviewsLen = Math.floor(reviews?.length / 2);
    reviews = reviews?.slice(0, reviewsLen);
  }

  return (
    <>
      <div className="mb-16 flex flex-col gap-6 max-sm:mb-8">
        <div className="text-[28px] font-medium max-sm:text-xl">
          <TextAnimation text={"Customer Reviews"} />
        </div>
        <div className="flex items-center gap-2">
          <FiveStarRate product={product} />
          <div className="font-inter text-xs">
            <TextAnimation text={`${reviews?.length} Reviews`} />
          </div>
        </div>
      </div>
      <motion.div
        className="flex h-[72px] items-center overflow-hidden rounded-2xl border-2 border-white-shade-1 pr-4 max-sm:h-16"
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          value={comment}
          onChange={handleChange}
          placeholder="Share your review"
          className="h-full w-full p-4 pl-6 placeholder:text-sm placeholder:text-black-shade-4 focus:outline-none"
        />
        <div className="ml-4 mr-6 flex items-center gap-0.5 text-black-shade-3">
          {fullStars.map((star, idx) => (
            <>
              <IoIosStar
                key={`${star} ${idx}`}
                onClick={() => handleClickStar(idx + 1)}
                className="min-h-5 min-w-5 cursor-pointer"
              />
            </>
          ))}
          {outLineStars.map((star, idx) => (
            <>
              <IoIosStarOutline
                key={`${star} ${idx}`}
                onClick={() => handleClickStar(idx + 1 + stars)}
                className="h-5 min-w-5 cursor-pointer"
              />
            </>
          ))}
        </div>

        <button
          className="h-10 min-w-[176px] rounded-[80px] bg-black px-10 py-1.5 font-inter font-medium tracking-[-.4px] text-white max-sm:hidden"
          onClick={handleClick}
        >
          Write Review
        </button>
        <button
          className="flex h-8 min-w-8 items-center justify-center rounded-[100px] bg-black p-0 font-inter font-medium tracking-[-.4px] text-white sm:hidden"
          onClick={handleClick}
        >
          <IoIosArrowRoundForward className="h-6 w-6 font-semibold" />
        </button>
      </motion.div>
      <div className="my-10 flex justify-between gap-6 max-sm:flex-col">
        <p className="text-[28px] font-medium">{reviews?.length} Reviews</p>
        <FilterBy param={"displayReviews"} defaultValue="All Reviews">
          <List param={"displayReviews"} width={262}>
            <ListItem value={"All_Reviews"}>All Reviews</ListItem>
            <ListItem value={"Newest"}>Newest</ListItem>
          </List>
        </FilterBy>
      </div>
      <div className="flex flex-col gap-6">
        {reviews.map((user, idx) => {
          return <Review user={user} key={`${user.id} ${idx}`} />;
        })}
      </div>
    </>
  );
}

export default Reviews;
