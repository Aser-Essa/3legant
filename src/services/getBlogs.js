import { supabase } from "../Supabase";

export async function getBlogs({ sortBy }) {
  const [sort, order] = sortBy?.split("_") || [];
  let query = supabase.from("new articles").select("*");
  if (sortBy) {
    query = query.order(sort, { ascending: order == "desc" ? false : true });
  }
  let { data: articles } = await query;

  return articles;
}

export async function getBlog({ id }) {
  let { data: article } = await supabase
    .from("new articles")
    .select("*")
    .eq("id", id);
  article = article[0];
  return article;
}
