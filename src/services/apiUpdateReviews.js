import { supabase } from "../Supabase";

export async function updateReviews({ avatar, userId }) {
  const { data, error } = await supabase
    .from("products")
    .select("id , reviews");

  if (error) {
    console.error("Error fetching data:", error);
  } else {
    const filteredData = data.filter((item) =>
      item.reviews.some((el) => el.id == userId),
    );

    function upadateAvatar(el) {
      return {
        ...el,
        avatar,
      };
    }

    let withOutUser = filteredData.map((el) =>
      el.reviews.filter((el) => el.id !== userId),
    );

    let withUser = filteredData.map((el) =>
      el.reviews.filter((el) => el.id === userId),
    );

    const updatedObj = withUser.map((el) =>
      el.map((obj) => upadateAvatar(obj)),
    );

    let updateReviewsArr = filteredData.map(
      (el, idx) =>
        el.reviews.map((el) => {
          if (el.id === userId) {
            return [...updatedObj[idx], ...withOutUser[idx]];
          }
        })[0],
    );

    const updatedData = filteredData?.forEach(async (el, idx) => {
      const { data } = await supabase
        .from("products")
        .update({ reviews: updateReviewsArr[idx] })
        .eq("id", el.id)
        .select("*");
      return data;
    });

    return updatedData;
  }
}
