import SectionContainer from "../../ui/SectionContainer";
import ProductImages from "./ProductImages";
import PageNavigation from "../../ui/PageNavigation";
import PageNavigationLink from "../../ui/PageNavigationLink";
import ProductDescription from "./ProductDescription";
import { useSearchParams } from "react-router-dom";
import useProduct from "./useProduct";

function ProductDetails() {
  const [searchParams] = useSearchParams();

  const category =
    searchParams?.get("category")?.replace("_", " ") || "All Rooms";

  const { data: product } = useProduct();

  return (
    <SectionContainer>
      <PageNavigation className={"py-4"}>
        <PageNavigationLink
          title={"Shop"}
          link={"/shop"}
          className="flex-shrink-0 overflow-hidden"
          delay={0.4}
        />
        <PageNavigationLink
          title={category}
          link={`/shop?category=${category?.replace(" ", "_")}`}
          className="flex-shrink-0 overflow-hidden"
          delay={0.5}
        />
        <PageNavigationLink
          title={product?.title?.split(" ")?.slice(0, 8)}
          link={`/shop?category=${category?.replace(" ", "_")}`}
          className="flex items-center gap-1 truncate font-inter text-sm font-medium text-black"
          delay={0.6}
        />
      </PageNavigation>

      <div className="flex gap-[63px] max-xl:flex-col max-xl:flex-wrap max-xl:gap-8">
        <ProductImages product={product} />
        <ProductDescription product={product} />
      </div>
    </SectionContainer>
  );
}

export default ProductDetails;
