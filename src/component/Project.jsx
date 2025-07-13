import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiBootstrap } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
// import { SiMysql } from "react-icons/si";
// import { DiMongodb } from "react-icons/di";
import { CardMyProject } from "./CardMyProject";
import { CardTechProject } from "./CardTechProject";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Project = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });

  return (
    <div className="bg-white" id="project">
      <motion.div
        className="flex size-full flex-col p-14 gap-14
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
          PROYEK
        </p>
        <div
          className="grid grid-cols-1 gap-10 justify-center
      md:grid-cols-2
      lg:grid-cols-3"
        >
          <CardMyProject
            imgProject="1_tcj"
            toApp="https://tcj.vercel.app"
            titleProject="T.C.J."
            descProject="Website yang dibuat untuk menampilkan Biodata diri dan Membuat Form Pembelian Tiket Konser Jepang."
            techData={[
              <div key="logo-tech-eduklimair--tjc-FF7B00">
                <CardTechProject
                  imgTechProject={
                    <FaHtml5
                      className="size-8.5 text-[#FF7B00]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
              <div key="logo-tech-eduklimair--tjc-007bff">
                <CardTechProject
                  imgTechProject={
                    <FaCss3Alt
                      className="size-8.5 text-[#007bff]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
              <div key="logo-tech-tjc-ffcc00">
                <CardTechProject
                  imgTechProject={
                    <FaJs
                      className="size-8.5 text-[#ffcc00]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
            ]}
          />
          <CardMyProject
            imgProject="2_bookshelf-apps"
            toApp="https://bookshelf-apps-hazel.vercel.app"
            titleProject="BOOKSHELF APPS"
            descProject="Website yang dibuat untuk membuat rak buku yang dimana difilter mana rak buku yang telah dibaca dan mana yang telah selesai dibaca."
            techData={[
              <div key="logo-tech-bookshelf-apps-">
                <CardTechProject
                  imgTechProject={
                    <FaHtml5
                      className="size-8.5 text-[#FF7B00]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
              <div key="logo-tech-bookshelf-apps-007bff">
                <CardTechProject
                  imgTechProject={
                    <FaCss3Alt
                      className="size-8.5 text-[#007bff]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
              <div key="logo-tech-bookshelf-apps-ffcc00">
                <CardTechProject
                  imgTechProject={
                    <FaJs
                      className="size-8.5 text-[#ffcc00]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
            ]}
          />
          <CardMyProject
            imgProject="3_fragment-bz"
            toApp="https://fragment-bz.vercel.app"
            titleProject="FRAGMENT -B'z-"
            descProject="Website yang dibuat untuk menampilkan Discography album terbaik dari B'z menurut saya."
            techData={[
              <div key="logo-tech-fragment-bz-FF7B00">
                <CardTechProject
                  imgTechProject={
                    <FaHtml5
                      className="size-8.5 text-[#FF7B00]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
              <div key="logo-tech-fragment-bz-007bff">
                <CardTechProject
                  imgTechProject={
                    <FaCss3Alt
                      className="size-8.5 text-[#007bff]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
              <div key="logo-tech-fragment-bz-ffcc00">
                <CardTechProject
                  imgTechProject={
                    <FaJs
                      className="size-8.5 text-[#ffcc00]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
            ]}
          />
          <CardMyProject
            imgProject="4_bookshelf-apps"
            toApp="https://bookshelf-apps-pt2.vercel.app"
            titleProject="BOOKSHELF APPS"
            descProject="Website yang dibuat untuk membuat rak buku yang dimana difilter mana rak buku yang telah dibaca dan mana yang telah selesai dibaca."
            techData={[
              <div key="logo-tech-bookshelf-apps2-FF7B00">
                <CardTechProject
                  imgTechProject={
                    <FaHtml5
                      className="size-8.5 text-[#FF7B00]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
              <div key="logo-tech-bookshelf-apps2-007bff">
                <CardTechProject
                  imgTechProject={
                    <FaCss3Alt
                      className="size-8.5 text-[#007bff]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
              <div key="logo-tech-bookshelf-apps2-ffcc00">
                <CardTechProject
                  imgTechProject={
                    <FaJs
                      className="size-8.5 text-[#ffcc00]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
            ]}
          />
          <CardMyProject
            imgProject="5_this-is-baad"
            toApp="https://this-is-baad.vercel.app"
            titleProject="THIS IS BAAD"
            descProject="Website yang dibuat untuk menampilkan Discography album dari band BAAD."
            techData={[
              <div key="logo-tech-this-is-baad-FF7B00">
                <CardTechProject
                  imgTechProject={
                    <FaHtml5
                      className="size-8.5 text-[#FF7B00]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
              <div key="logo-tech-this-is-baad-007bff">
                <CardTechProject
                  imgTechProject={
                    <FaCss3Alt
                      className="size-8.5 text-[#007bff]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
              <div key="logo-tech-this-is-baad-ffcc00">
                <CardTechProject
                  imgTechProject={
                    <FaJs
                      className="size-8.5 text-[#ffcc00]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
            ]}
          />
          <CardMyProject
            imgProject="6_this-is-bookshelf"
            toApp="https://this-is-bookshelf.vercel.app"
            titleProject="THIS IS BOOKSHELF"
            descProject="Website yang dibuat untuk membuat rak buku yang dimana difilter mana rak buku yang telah dibaca dan mana yang telah selesai dibaca."
            techData={[
              <div key="logo-tech-this-is-bookshelf-">
                <CardTechProject
                  imgTechProject={
                    <FaHtml5
                      className="size-8.5 text-[#FF7B00]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
              <div key="logo-tech-this-is-bookshelf-007bff">
                <CardTechProject
                  imgTechProject={
                    <FaCss3Alt
                      className="size-8.5 text-[#007bff]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
              <div key="logo-tech-this-is-bookshelf-ffcc00">
                <CardTechProject
                  imgTechProject={
                    <FaJs
                      className="size-8.5 text-[#ffcc00]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
            ]}
          />
          <CardMyProject
            imgProject="7_boku-no-notes"
            toApp="https://boku-no-notes.vercel.app"
            titleProject="B.N.N."
            descProject="Website yang dibuat untuk membuat catatan yang dimana difilter mana catatan yang sedang aktif dibaca dan mana catatan yang telah duarsipkan."
            techData={[
              <div key="logo-tech-boku-no-notes-FF7B00">
                <CardTechProject
                  imgTechProject={
                    <FaHtml5
                      className="size-8.5 text-[#FF7B00]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
              <div key="logo-tech-boku-no-notes-007bff">
                <CardTechProject
                  imgTechProject={
                    <FaCss3Alt
                      className="size-8.5 text-[#007bff]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
              <div key="logo-tech-boku-no-notes-ffcc00">
                <CardTechProject
                  imgTechProject={
                    <FaJs
                      className="size-8.5 text-[#ffcc00]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
            ]}
          />
          <CardMyProject
            imgProject="8_qolami-web"
            toApp="https://qolami-web.vercel.app/"
            titleProject="QOLAMI WEB"
            descProject="Website yang dibuat untuk memudahkan pengguna dalam belajar bahasa arab"
            techData={[
              <div key="logo-tech-qolami-web-FF7B00">
                <CardTechProject
                  imgTechProject={
                    <FaHtml5
                      className="size-8.5 text-[#FF7B00]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
              <div key="logo-tech-qolami-web-007bff">
                <CardTechProject
                  imgTechProject={
                    <FaCss3Alt
                      className="size-8.5 text-[#007bff]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
              <div key="logo-tech-qolami-web-ffcc00">
                <CardTechProject
                  imgTechProject={
                    <FaJs
                      className="size-8.5 text-[#ffcc00]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
              <div key="logo-tech-qolami-web-0091ff">
                <CardTechProject
                  imgTechProject={
                    <FaReact
                      className="size-8.5 text-[#0091ff]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
              <div key="logo-tech-qolami-web-00c3ff">
                <CardTechProject
                  imgTechProject={
                    <RiTailwindCssFill
                      className="size-8.5 text-[#00c3ff]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
              <div key="logo-tech-qolami-web-9000b0">
                <CardTechProject
                  imgTechProject={
                    <DiBootstrap
                      className="size-8.5 text-[#9000b0]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
              <div key="logo-tech-qolami-web-77ff00">
                <CardTechProject
                  imgTechProject={
                    <FaNodeJs
                      className="size-8.5 text-[#77ff00]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
              <div key="logo-tech-qolami-web-">
                <CardTechProject
                  imgTechProject={
                    <SiExpress
                      className="size-8.5 p-1 text-[#1A1A1A]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
            ]}
          />
          <CardMyProject
            imgProject="9_eduklimair"
            toApp="https://eduklimair.netlify.app/"
            titleProject="EDUKLIMAIR"
            descProject="Website yang dibuat untuk mengedukasi pengguna bagaimana cara mengelola Air yang bersih, Sanitasi yang tidak layak dan Perubahan Iklim di Indonesia"
            techData={[
              <div key="logo-tech-eduklimair-FF7B00">
                <CardTechProject
                  imgTechProject={
                    <FaHtml5
                      className="size-8.5 text-[#FF7B00]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
              <div key="logo-tech-eduklimair-007bff">
                <CardTechProject
                  imgTechProject={
                    <FaCss3Alt
                      className="size-8.5 text-[#007bff]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
              <div key="logo-tech-eduklimair-ffcc00">
                <CardTechProject
                  imgTechProject={
                    <FaJs
                      className="size-8.5 text-[#ffcc00]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
              <div key="logo-tech-eduklimair-77ff00">
                <CardTechProject
                  imgTechProject={
                    <FaNodeJs
                      className="size-8.5 text-[#77ff00]
                  md:grid-cols-2
                  lg:grid-cols-3"
                    />
                  }
                />
              </div>,
            ]}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
