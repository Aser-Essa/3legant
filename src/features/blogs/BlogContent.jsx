import useBlog from "./useBlog";
import { motion } from "motion/react";

function BlogContent() {
  const { data: article } = useBlog();
  const wordsLength = article?.articles?.at(0)?.value?.split(" ")?.length;

  const firstParagraph = article?.articles
    ?.at(0)
    ?.value.split(" ")
    ?.slice(0, Math.round(wordsLength / 2))
    ?.join(" ");

  const secoundParagraph = article?.articles
    ?.at(0)
    ?.value.split(" ")
    ?.slice(Math.round(wordsLength / 2))
    ?.join(" ");

  const images = article?.images?.slice(1);

  return (
    <>
      <div>
        {article?.articles?.length > 1 ? (
          <div>
            {article?.articles?.map((el, idx) => {
              return (
                <div key={el?.value}>
                  <div className="mt-4 flex flex-col">
                    {idx == 3 && (
                      <div className="my-10 flex h-[729px] items-center gap-6 overflow-hidden">
                        {images?.slice(0, 2)?.map((el, idx) => (
                          <motion.img
                            src={el}
                            key={el}
                            className="h-full w-[50%] scale-y-150 max-sm:h-[500px]"
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
                    )}
                    {el?.key !== "firstP" && (
                      <p className="text-[28px] font-medium">{el?.key}</p>
                    )}
                    <p>{el?.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
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
        )}
      </div>
    </>
  );
}

export default BlogContent;
