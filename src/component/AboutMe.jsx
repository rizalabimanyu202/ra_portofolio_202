import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });

  return (
    <div className="bg-white" id="aboutme">
      <motion.div
        className="flex flex-col px-12 p-14 gap-14 
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
          TENTANG AKU
        </p>
        <div
          className="flex flex-col bg-cover gap-10
      max-[430px]:gap-6
      lg:flex-row
      lg:gap-5
      xl:gap-20"
        >
          <motion.div
            className="flex bg-green-300/0 w-[100%] justify-center
        lg:w-[40%]
        xl:w-[30%]"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={`/optimized/profile-jumbotron-2-large.webp`}
              />
              <source
                media="(min-width: 640px)"
                srcSet={`/optimized/profile-jumbotron-2-medium.webp`}
              />
              <img
                className="  size-70 rounded-full border-8 border-[#14ADFF] m-auto
            max-[320px]:size-40
            max-[430px]:size-50
            xl:size-80"
                src="/optimized/profile-jumbotron-2-small.webp"
                alt="profile-jumbotron-2"
              />
            </picture>
          </motion.div>
          <motion.div
            className="bg-blue-300/0 w-[100%] flex m-auto justify-center
        lg:w-[60%]
        xl:w-[70%]"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p
              className=" text-xl/10 jura-regular font-bold text-[#1A1A1A]
          max-[430px]:text-[13px]/6
          max-[430px]:text-justify
          xl:text-2xl/12"
            >
              Saya adalah lulusan baru jurusan Teknik Informatika di Universitas
              YARSI. Saya fokus pada Front-End Development terutama pada
              Platform Web. Saya sering berlatih dan membuat proyek menggunakan
              MERN (MongoDB, Express.js, React.js, Node.js) dan tampilannya
              dibantu oleh Tailwind CSS. Saya memiliki keinginan yang kuat untuk
              mempelajari apa saja seperti Framework dan Library tentang
              Software Engineering, asalkan saya dapat memenuhi kebutuhan
              perusahaan dan kinerja aplikasi dapat berjalan sesuai keinginan
              perusahaan.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
