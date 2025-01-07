import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Logout as LogoutApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useLogout() {
  const queryClient = useQueryClient();

  const { mutate: Logout } = useMutation({
    mutationFn: () => LogoutApi(),
    onSuccess: () => {
      toast.success("User Successfully Logout");
      queryClient.removeQueries();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { Logout };
}

export default useLogout;
