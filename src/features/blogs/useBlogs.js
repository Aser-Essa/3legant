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

  // el.date?.split(" ").slice(0, 2)?.join(" "),
  // el.date?.split(" ")[el.date?.split(" ").length - 1]?.slice(0, 4),

  function isNew(el) {
    const date = new Date(
      `${el.date?.split(" ").slice(0, 2)?.join(" ")?.slice(0, -1)}${el.date?.split(" ")[el.date?.split(" ").length - 1]?.slice(0, 4)}`,
    );

    const isNewBlog = date?.getTime() > new Date("2024-6-01");
    return isNewBlog;
  }

  data = data?.filter((el) => el?.images?.length > 1);

  if (display === "featured") {
    data = data?.filter((el) => isNew(el));
  }

  return { data, isLoading };
}

export default useBlogs;
