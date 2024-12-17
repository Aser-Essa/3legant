import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../services/getBlogs";
import { useSearchParams } from "react-router-dom";

function useBlogs() {
  const [searchParams] = useSearchParams();

  const sortBy = searchParams.get("sortby") || "";

  const display = searchParams.get("display") || "";

  let { data, isLoading } = useQuery({
    queryKey: ["articles", sortBy],
    queryFn: () => getBlogs({ sortBy }),
  });

  function isNew(el) {
    const isNewBlog = new Date(el?.date)?.getTime() > new Date("2024-6-01");
    return isNewBlog;
  }

  data = data?.filter((el) => el?.images?.length > 1);

  if (display === "featured") {
    data = data?.filter((el) => isNew(el));
  }

  return { data, isLoading };
}

export default useBlogs;
