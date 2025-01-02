import SlideInFromLeftAnimation from "../../ui/SlideInFromLeftAnimation";
import TextAnimation from "../../ui/TextAnimation";
import TextRevealAnimation from "../../ui/TextRevealAnimation";
import useProduct from "./useProduct";

function ProductInfo() {
  const { data: product } = useProduct();

  return (
    <>
      <div className="mb-7 font-inter text-[28px] font-medium">
        <TextAnimation text={"Additional Info"} />
      </div>
      <div className="mb-7">
        <TextRevealAnimation>
          <p className="mb-3 text-[20px] font-medium text-black-shade-4">
            Details
          </p>
        </TextRevealAnimation>
        <SlideInFromLeftAnimation duration={0.6} delay={0.4}>
          <div className="flex flex-col gap-1.5 text-base font-medium">
            <p>{product?.about_item}</p>
          </div>
        </SlideInFromLeftAnimation>
      </div>
      <div>
        <TextRevealAnimation delay={0.6}>
          <p className="my-3 text-[20px] font-medium text-black-shade-4">
            Packaging
          </p>
        </TextRevealAnimation>
        <SlideInFromLeftAnimation duration={0.8} delay={0.2}>
          <p className="font-medium">{product?.package_dimensions}</p>
        </SlideInFromLeftAnimation>
      </div>
    </>
  );
}

export default ProductInfo;
