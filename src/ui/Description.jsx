/* eslint-disable react/prop-types */
import { formatCurrency } from "../utils/formatCurrency";
import FiveStarRate from "./FiveStarRate";
import SlideInFromLeftAnimation from "./SlideInFromLeftAnimation";
import TextAnimation from "./TextAnimation";
import TextRevealAnimation from "./TextRevealAnimation";

function Description({ product }) {
  const discount = (+product?.discount / 100) * product?.Price || 0;

  return (
    <>
      <div className="flex flex-col gap-4 pb-6">
        <div className="flex items-center gap-2.5">
          <FiveStarRate product={product} />
          <div className="font-inter text-xs">
            <TextAnimation text={`${product?.Rate} Reviews`} />
          </div>
        </div>
        <TextRevealAnimation>
          <p className="text-[40px] font-medium">
            {product?.title?.split(" ").slice(0, 3)?.join(" ")}
          </p>
        </TextRevealAnimation>
        <SlideInFromLeftAnimation delay={0.4}>
          <p className="max-h-[78px] w-full overflow-hidden text-ellipsis text-wrap font-inter leading-[26px] text-black-shade-4">
            {product?.description || product?.about_item}
          </p>
        </SlideInFromLeftAnimation>
        <div className="flex items-center gap-3 font-medium">
          <TextRevealAnimation delay={0.7}>
            <div className="flex items-center gap-3">
              <p className="text-[28px]">
                {formatCurrency(Math.round(product?.Price - discount))}
              </p>
              <p className="text-xl text-black-shade-4 line-through">
                {formatCurrency(product?.Price)}
              </p>
            </div>
          </TextRevealAnimation>
        </div>
      </div>
    </>
  );
}

export default Description;
