import ProductCard from "./ProductCard";
import useProducts from "./useProducts";

function ProductCards() {
  let { data } = useProducts();

  function isNewProduct(el) {
    const isNew = new Date(el?.Date)?.getTime() > new Date("2024-6-01");
    return isNew;
  }
  data = data?.filter((el) => el?.discount && isNewProduct(el))?.slice(0, 30);

  return (
    <div className="cards-container flex gap-6 overflow-y-hidden overflow-x-scroll pb-12 max-sm:pb-10">
      {data?.map((product, idx) => {
        return <ProductCard key={`${product} ${idx}`} product={product} />;
      })}
    </div>
  );
}

export default ProductCards;
