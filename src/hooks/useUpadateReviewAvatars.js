import { useMutation } from "@tanstack/react-query";
import { updateReviews } from "../services/apiUpdateReviews";

export function useUpadateReviewAvatars() {
  const { mutate: upadateReviewAvatars } = useMutation({
    mutationFn: ({ avatar, userId }) => updateReviews({ avatar, userId }),
  });

  return { upadateReviewAvatars };
}
