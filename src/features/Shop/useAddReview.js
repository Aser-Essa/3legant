import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addReview } from "../../services/getProducts";

function useAddReview() {
  const queryClient = useQueryClient();
  const { mutate: AddReview } = useMutation({
    mutationFn: ({ reviewsArr, id }) => addReview({ reviewsArr, id }),
    onSuccess: () => {
      queryClient.invalidateQueries(["product"]);
    },
  });

  return { AddReview };
}

export default useAddReview;
