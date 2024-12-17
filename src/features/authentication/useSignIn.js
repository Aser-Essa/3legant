import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SignIn as SignInApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignIn() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate: SignIn, isLoading } = useMutation({
    mutationFn: ({ email, password }) => SignInApi({ email, password }),
    onSuccess: (user) => {
      toast.success("Successfully Signed In");
      queryClient.setQueryData(["user"], user.user);
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { SignIn, isLoading };
}
