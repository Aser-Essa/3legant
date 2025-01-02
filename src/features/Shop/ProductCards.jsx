import ProductCard from "./ProductCard";
import useProducts from "./useProducts";

// eslint-disable-next-line react/prop-types
function ProductCards() {
  let { data } = useProducts();

  function isNewProduct(el) {
    const isNew = new Date(el?.Date)?.getTime() > new Date("2024-6-01");
    return isNew;
  }
  data = data?.filter((el) => el?.discount && isNewProduct(el))?.slice(0, 30);

  return (
    <div className="cards-container flex h-[485px] gap-6 overflow-y-hidden overflow-x-scroll pb-12 max-sm:h-[420px] max-sm:pb-10">
      {data?.map((product, idx) => {
        return (
          <ProductCard
            key={`${product} ${idx}`}
            delay={idx}
            product={product}
          />
        );
      })}
    </div>
  );
}

export default ProductCards;
