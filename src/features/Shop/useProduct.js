import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/getProducts";

function useProduct() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct({ id }),
  });

  return { data, isLoading };
}

export default useProduct;
