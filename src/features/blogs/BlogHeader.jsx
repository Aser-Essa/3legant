import { NavLink } from "react-router-dom";
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
  const images = article?.images?.slice(1);

  if (isLoading) return <Spinner />;

  return (
    <>
      <PageNavigation>
        <PageNavigationLink title={"Blog"} link={"/blog"} />
        <motion.div
          initial={{ opacity: 0, translateX: 0 }}
          animate={{ opacity: 1, translateX: [-100, 5, 0] }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <NavLink
            to={`/blogs/${article?.id}`}
            className="truncate font-inter text-sm font-medium"
          >
            <p className="truncate">{article?.title}</p>
          </NavLink>
        </motion.div>
      </PageNavigation>
      <div className="mt-[56px] space-y-4 font-inter">
        <TextRevealAnimation delay={0.1}>
          <p className="font-inter text-xs font-bold">ARTICLE</p>
        </TextRevealAnimation>
        <SlideInFromLeftAnimation delay={0.4} duration={0.6}>
          <p className="text-[54px] font-medium leading-[58px] tracking-[-1px]">
            {article?.title}
          </p>
        </SlideInFromLeftAnimation>
        <div className="text-black-shade-4">
          <TextAnimation text={article?.date} delay={0.6} />
        </div>
      </div>
      <div className="my-10 h-[647px] w-full overflow-hidden">
        <motion.img
          src={images?.at(0)}
          className="h-full w-full scale-y-150 opacity-[.8px] blur-[1px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.85 }}
          viewport={{ once: true }}
        />
      </div>
    </>
  );
}

export default BlogHeader;
