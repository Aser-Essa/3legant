import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBlog } from "../../services/getBlogs";

function useBlog() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["article", id],
    queryFn: () => getBlog({ id }),
  });

  return { data, isLoading };
}

export default useBlog;
