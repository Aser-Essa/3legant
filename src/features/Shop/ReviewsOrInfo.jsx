import { useSearchParams } from "react-router-dom";
import Reviews from "./Reviews";
import ProductInfo from "./ProductInfo";

function ReviewsOrInfo() {
  const [searchParams] = useSearchParams();
  const display = searchParams.get("display");

  return (
    <>
      {display === "reviews" || display === null ? (
        <Reviews />
      ) : (
        <ProductInfo />
      )}
    </>
  );
}

export default ReviewsOrInfo;
