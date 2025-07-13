import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const CardMySkill = ({ imgLogoMySkill, textMySkill }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      className="flex flex-col items-center gap-5"
      key={textMySkill}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className=" bg-white rounded-2xl size-25 md:size-30 lg:size-35 xl:size-48 flex">
        {imgLogoMySkill}
      </div>
      <p className=" text-white jura-regular max-[550px]:text-[13px] size-xs md:size-md lg:text-lg xl:text-2xl font-bold">
        {textMySkill}
      </p>
    </motion.div>
  );
};
