import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../../services/getProducts";

function useProducts() {
  const [searchParams] = useSearchParams();

  const category =
    searchParams?.get("category")?.replace("_", " ") || "All Rooms";
  const price = searchParams.get("price") || "All Prices";
  const [min, max] = price.split("-");
  const sortBy = searchParams.get("sortby") || "";

  const { data, isLoading } = useQuery({
    queryKey: ["products", category, min, max, sortBy],
    queryFn: () => getProducts({ category, min, max, sortBy }),
  });

  return { data, isLoading };
}

export default useProducts;
