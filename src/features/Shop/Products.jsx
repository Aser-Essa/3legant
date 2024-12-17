import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import DetaildProductCard from "./DetaildProductCard";
import GridPage from "../../ui/GridPage";
import Spinner from "../../ui/Spinner";
import useProducts from "./useProducts";

function Products() {
  const [searchParams] = useSearchParams();
  const gridType = searchParams.get("grid") || 4;
  let { data: products, isLoading } = useProducts();

  if (isLoading) return <Spinner />;

  return (
    <>
      <GridPage
        data={products}
        render={(el, idx) => {
          if (gridType == 3 || gridType == 4 || window.innerWidth < 638) {
            return <ProductCard key={`${el} ${idx}`} product={el} />;
          } else {
            return (
              <DetaildProductCard
                key={`${el} ${idx}`}
                product={el}
                gridType={gridType}
              />
            );
          }
        }}
      />
    </>
  );
}

export default Products;
