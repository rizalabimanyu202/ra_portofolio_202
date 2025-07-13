import { CardExperience } from "./CardExperience";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });

  return (
    <div className="bg-white" id="experience">
      <motion.div
        className="flex h-full w-full flex-col p-14 gap-14 
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
          className=" text-4xl  jura-regular font-bold text-center text-black
      max-[320px]:text-2xl 
      max-[430px]:text-3xl
      lg:text-5xl
      xl:text-6xl"
        >
          PENGALAMAN
        </p>
        <div className="flex flex-col gap-7">
          <CardExperience
            year={2021}
            dataExperience={[
              {
                placeExperience: "UNIVERSITAS YARSI",
                descExperience: `Organisasi "HIMFO YARSI sebagai Divisi Pendidikan"`,
                dateExperience: "Juni 2021 - Januari 2022",
              },
              {
                placeExperience: "UNIVERSITAS YARSI",
                descExperience: `Kakak Asuh "Dasar-Dasar Pemrograman"`,
                dateExperience: "September 2021 - Januari 2022",
              },
            ]}
          />
          <CardExperience
            year={2022}
            dataExperience={[
              {
                placeExperience: "IDCamp X DICODING",
                descExperience: `IDCamp 2022 (Front-End Developer) - Peserta`,
                dateExperience: "Mei 2022 - September 2022",
              },
            ]}
          />
          <CardExperience
            year={2023}
            dataExperience={[
              {
                placeExperience: "SIB X DICODING",
                descExperience: `Pengembang Front-End Web Dan Back-End - Peserta`,
                dateExperience: "Mei 2022 - September 2022",
              },
              {
                placeExperience: "DICODING",
                descExperience: `DICODING for University Batch 1 - Peserta`,
                dateExperience: "Juli 2023 - Oktober 2023",
              },
              {
                placeExperience: "SIB X BANGKIT",
                descExperience: `Mobile Development - Peserta`,
                dateExperience: "Agustus 2023 - Januari 2024",
              },
              {
                placeExperience: "GDSC from Google",
                descExperience: `Juara Android Season 3 - Peserta`,
                dateExperience: "Oktober 2023 - November 2023",
              },
            ]}
          />
          <CardExperience
            year={2024}
            dataExperience={[
              {
                placeExperience: "DBS X DICODING",
                descExperience: `DBS Foundation Coding Camp 2024 - Peserta`,
                dateExperience: "Januari 2024 - Juli 2024",
              },
              {
                placeExperience: "AWS X DICODING",
                descExperience: `AWS Back-End Academy 2024 - Peserta`,
                dateExperience: "Mei 2024 - September 2024",
              },
              {
                placeExperience: "IDCamp X DICODING",
                descExperience: `IDCamp 2024 (React Developer) - Peserta`,
                dateExperience: "September 2024 - Januari 2025",
              },
            ]}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
