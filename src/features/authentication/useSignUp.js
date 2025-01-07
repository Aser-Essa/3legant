import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SignUp as SignUpApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignUp() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: SignUp, isLoading } = useMutation({
    mutationFn: ({ email, password, username, firstName, lastName }) =>
      SignUpApi({ email, password, username, firstName, lastName }),

    onSuccess: ({ user }) => {
      toast.success("Successfully Signed Up");
      queryClient.setQueryData(["user"], user);
      navigate("/");
    },

    onError: (error) => {
      toast.error(error.message);
      if (error.message === "User already registered") {
        navigate("/signin");
      }
    },
  });

  return { SignUp, isLoading };
}
