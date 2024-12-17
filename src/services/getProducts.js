import { supabase } from "../Supabase";

export async function getProducts({ category, min, max, sortBy }) {
  const [sort, order] = sortBy?.split("_") || [];
  let query = supabase.from("products").select("*");
  if (category !== "All Rooms") {
    query = query.ilike("categoriesText", `%${category}%`);
  }
  if (min !== "All Prices" && max) {
    query = query.gte("Price", +min);
    query = query.lte("Price", +max);
  }
  if (sortBy) {
    query = query.order(sort, { ascending: order == "desc" ? false : true });
  }
  let { data: products } = await query;
  // products = products.filter(
  //   (el) => el?.availability !== "" && el?.description !== "",
  // );
  return products;
}

export async function getProduct({ id }) {
  let { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("id", id);
  product = product[0];
  return product;
}

export async function addReview({ reviewsArr, id }) {
  const { data } = await supabase
    .from("products")
    .update({ reviews: reviewsArr })
    .eq("id", id)
    .select("*");

  return data;
}
