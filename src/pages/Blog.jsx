import SectionContainer from "../ui/SectionContainer";
import BlogHeader from "../features/blogs/BlogHeader";
import BlogContent from "../features/blogs/BlogContent";
import MoreBlogs from "../features/blogs/MoreBlogs";

function Blog() {
  return (
    <SectionContainer className={`mb-20 mt-4`}>
      <BlogHeader />
      <BlogContent />
      <MoreBlogs title={"You might also like"} />
    </SectionContainer>
  );
}

export default Blog;
