import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const CardMyProject = ({
  imgProject,
  toApp,
  titleProject,
  descProject,
  techData,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.a
      href={toApp}
      className=" cursor-pointer"
      target="_blank"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div
        className="flex flex-col h-full border-2 border-[#1A1A1A] rounded-xl p-6 gap-4
      max-[350px]:p-4"
      >
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={`/optimized/${imgProject}-large.webp`}
          />
          <source
            media="(min-width: 640px)"
            srcSet={`/optimized/${imgProject}-medium.webp`}
          />
          <img
            className="aspect-16/9 bg-amber-400 rounded-xl"
            src={`/optimized/${imgProject}-small.webp`}
            alt={titleProject}
          />
        </picture>

        <div className="flex flex-col justify-between gap-6 h-full">
          <div className="flex flex-col jura-regular gap-4">
            <p
              className=" m-auto text-xl font-bold text-center
            xl:text-3xl"
            >
              {titleProject}
            </p>
            <p
              className=" font-bold text-md
            max-[430px]:text-sm
            max-[430px]:text-justify
            xl:text-xl"
            >
              {descProject}
            </p>
          </div>
          <div
            className="grid grid-cols-5 gap-7 w-[70%]
          max-[320px]:w-[85%]
          lg:gap-5
          xl:gap-3"
          >
            {techData.map((a) => a)}
          </div>
        </div>
      </div>
    </motion.a>
  );
};
