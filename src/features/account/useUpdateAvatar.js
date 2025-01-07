import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAvatar as updateAvatarApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useUpadateReviewAvatars } from "../../hooks/useUpadateReviewAvatars";

function useUpdateAvatar() {
  const { upadateReviewAvatars } = useUpadateReviewAvatars();
  const queryClient = useQueryClient();
  const { mutate: updateAvatar } = useMutation({
    mutationFn: (data) => updateAvatarApi(data),
    onSuccess: ({ user }) => {
      upadateReviewAvatars({
        avatar: user.user_metadata.avatar,
        userId: user?.id,
      });
      toast.success("User Data Successfully Updated");
      queryClient.setQueryData(["user"], user);
      queryClient.invalidateQueries(["user"]);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateAvatar };
}

export default useUpdateAvatar;
