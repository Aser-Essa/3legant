import PageNavigation from "../../ui/PageNavigation";
import PageNavigationLink from "../../ui/PageNavigationLink";
import useBlog from "./useBlog";
import Spinner from "../../ui/Spinner";
import SlideInFromLeftAnimation from "../../ui/SlideInFromLeftAnimation";
import TextRevealAnimation from "../../ui/TextRevealAnimation";
import { motion } from "motion/react";
import TextAnimation from "../../ui/TextAnimation";

function BlogHeader() {
  const { data: article, isLoading } = useBlog();

  if (isLoading) return <Spinner />;

  return (
    <>
      <PageNavigation>
        <PageNavigationLink
          title={"Blog"}
          link={"/blog"}
          className="flex-shrink-0 overflow-hidden"
          delay={0.4}
        />
        <PageNavigationLink
          title={article?.title}
          link={`/blogs/${article?.id}`}
          className="truncate font-inter text-sm font-medium"
          delay={0.5}
        />
      </PageNavigation>
      <div className="mt-[56px] space-y-4 font-inter">
        <TextRevealAnimation delay={0.1}>
          <p className="font-inter text-xs font-bold">ARTICLE</p>
        </TextRevealAnimation>
        <SlideInFromLeftAnimation delay={0.4} duration={0.4}>
          <p className="text-[54px] font-medium leading-[58px] tracking-[-1px] max-sm:text-[26px] max-sm:leading-[34px]">
            {article?.title}
          </p>
        </SlideInFromLeftAnimation>
        <div className="flex items-center gap-12 text-black-shade-4 max-sm:justify-between max-sm:gap-0">
          <div className="flex items-center gap-1">
            <motion.img
              src="/Vector.png"
              className="h-5 w-5"
              initial={{ opacity: 0, translateX: "-25%" }}
              whileInView={{ opacity: 1, translateX: "0" }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            />
            <TextAnimation text={article?.author} delay={0.4} />
          </div>
          <div className="flex items-center gap-1">
            <motion.img
              src="/calendar.png"
              className="h-5 w-5"
              initial={{ opacity: 0, translateX: "-25%" }}
              whileInView={{ opacity: 1, translateX: "0" }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            />
            <TextAnimation text={article?.date?.slice(0, -5)} delay={0.4} />
          </div>
        </div>
      </div>
      <div className="my-10 h-[647px] w-full overflow-hidden max-sm:h-[320px]">
        <motion.img
          className="w-full max-sm:h-[320px]"
          src={article?.images?.at(0)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
    </>
  );
}

export default BlogHeader;
