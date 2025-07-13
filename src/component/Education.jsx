import { CardEducation } from "./CardEducation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="bg-[#1A1A1A]" id="education">
      <motion.div
        className="flex flex-col p-14 gap-14
      max-[430px]:px-8
      max-[430px]:py-10
      max-[430px]:gap-10
      md:px-20"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p
          className=" text-4xl  jura-regular font-bold text-center text-[#14ADFF]
      max-[320px]:text-2xl 
      max-[430px]:text-3xl
      lg:text-5xl
      xl:text-6xl"
        >
          PENDIDIKAN
        </p>
        <div className="flex flex-col gap-10 items-center justify-center">
          <CardEducation
            key={"universitas_yarsi"}
            logoEducation={"1_logo-yarsi"}
            nameEducation={"UNIVERISTAS YARSI"}
            degreeEducation={"Gelar Sarjana"}
            majorEducation={"Teknik Informatika"}
            dateEduction={"September 2020 - Juli 2024"}
            gradeEducation={"IPK: 3.74/4.00"}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
