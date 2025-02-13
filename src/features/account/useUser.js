import { useQuery } from "@tanstack/react-query";
import { getCurrent } from "../../services/apiAuth";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrent,
  });

  const isAuthenticated = user?.role === "authenticated";

  return { user, isLoading, isAuthenticated };
}
