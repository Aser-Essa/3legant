import useBlog from "./useBlog";
import { motion } from "motion/react";

function BlogContent() {
  const { data: article } = useBlog();
  const paragraphsNumber = Math.min(
    article?.article_paragraphs?.length - 1,
    article?.images?.length,
  );
  return (
    <>
      <div>
        <p>{article?.article_paragraphs[0]}</p>
        <div className="my-10 flex items-center gap-6 max-md:flex-col">
          {article?.images?.slice(1, 3)?.map((el, idx) => (
            <motion.img
              src={el}
              key={el}
              className="h-[600px] w-[50%] max-md:w-full max-sm:h-[320px]"
              initial={{
                opacity: 0,
                translateX: idx == 1 ? "100%" : "-50%",
              }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
        <div className="mb-10">
          <p className="mb-2">{article?.article_paragraphs[1]}</p>
          <p>{article?.article_paragraphs[2]}</p>
        </div>
        <div className="mb-10 flex h-[595px] gap-6 overflow-hidden max-sm:mb-1 max-sm:h-full max-sm:flex-col">
          <motion.img
            src={article?.images[4]}
            className={`h-[600px] max-sm:h-[320px] max-sm:min-w-full ${paragraphsNumber > 7 ? "min-w-[50%]" : "min-w-full"} `}
            initial={{
              opacity: 0,
              translateX: "-100%",
            }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          />
          <motion.div
            initial={{
              opacity: 0,
              translateX: "50%",
            }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
            className={` ${paragraphsNumber > 7 && "w-[50%]"} max-sm:min-w-full`}
          >
            {paragraphsNumber > 7 &&
              article?.article_paragraphs?.slice(3, 7)?.map((el) => (
                <p key={el} className="mb-2">
                  {el}
                </p>
              ))}
          </motion.div>
        </div>
        <div>
          {paragraphsNumber > 7 &&
            article?.article_paragraphs
              ?.slice(7, paragraphsNumber)
              ?.map((el) => (
                <p key={el} className="mb-2">
                  {el}
                </p>
              ))}
        </div>
      </div>
      {/* <div>
        <div>
          <p>{firstParagraph}</p>
          <div className="my-10 flex items-center gap-6 max-md:flex-col">
            {images?.slice(0, 2)?.map((el, idx) => (
              <motion.img
                src={el}
                key={el}
                className="h-[729px] w-[50%] max-md:w-full max-sm:h-[500px]"
                initial={{
                  opacity: 0,
                  translateX: idx == 0 ? "-100%" : "50%",
                }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
          <p>{secoundParagraph}</p>
        </div>
      </div> */}
    </>
  );
}

export default BlogContent;
