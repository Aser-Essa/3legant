import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateAddress as updateAddressApi } from "../../services/apiAuth";

function useUpdateAdress() {
  const queryClient = useQueryClient();
  const { mutate: updateAdress } = useMutation({
    mutationFn: (data) => updateAddressApi(data),
    onSuccess: ({ user }) => {
      toast.success("User Address SuccessFully Updated");
      queryClient.setQueryData("user", user);
      queryClient.invalidateQueries(["user"]);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateAdress };
}

export default useUpdateAdress;
