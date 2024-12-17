import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserData } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser } = useMutation({
    mutationFn: (data) => updateUserData(data),
    onSuccess: ({ user }) => {
      toast.success("User Data Successfully Updated");
      queryClient.setQueryData("user", user);
      queryClient.invalidateQueries(["user"]);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateUser };
}

export default useUpdateUser;
