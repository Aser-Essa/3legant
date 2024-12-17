import SectionContainer from "../ui/SectionContainer";
import HeroSection from "../ui/HeroSection";

import FilterSortGridBlog from "../features/blogs/FilterSortGridBlog";
import JoinNewsLetter from "../ui/JoinNewsLetter";
import BlogsCards from "../features/blogs/BlogsCards";

function Blog() {
  return (
    <>
      <SectionContainer>
        <HeroSection
          title="Our Blog"
          paragraph="Home ideas and design inspiration"
          img="/ourBlogPage.png"
        />
        <FilterSortGridBlog />
        <div className="mb-20 mt-10 flex w-full gap-5">
          <BlogsCards />
        </div>
      </SectionContainer>
      <JoinNewsLetter />
    </>
  );
}

export default Blog;
