/* eslint-disable react/prop-types */
import { MdOutlineStarBorder } from "react-icons/md";
import Stars from "./Stars";

function FiveStarRate({ product }) {
  const emptyStars = Array.from({ length: 5 - product?.Rate }, (num) => num++);

  return (
    <div className="flex items-center">
      <Stars rate={product?.Rate}></Stars>
      <div className="flex items-center gap-0.5 text-black-shade-3">
        {emptyStars.map((el) => (
          <MdOutlineStarBorder key={el} className="text-black-shade-4" />
        ))}
      </div>
    </div>
  );
}

export default FiveStarRate;
