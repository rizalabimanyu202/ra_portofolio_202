import { CardSubExperience } from "./CardSubExperience";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const CardExperience = ({ year, dataExperience }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      className="flex flex-col border-2 border-[#1A1A1A] rounded-xl jura-regular"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h1 className="text-center text-2xl p-1 font-mono border-b-2 border-[#1A1A1A]">
        {year}
      </h1>
      <div className="flex flex-col max-[430px]:px-4 px-5 sm:px-7">
        {dataExperience.map((a) => (
          <CardSubExperience
            key={`${a.placeExperience} - ${a.dateExperience}`}
            placeExperience={a.placeExperience}
            descExperience={a.descExperience}
            dateExperience={a.dateExperience}
          />
        ))}
      </div>
    </motion.div>
  );
};
