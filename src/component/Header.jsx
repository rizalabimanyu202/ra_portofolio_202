import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgCloseR } from "react-icons/cg";

const Header = () => {
  const [opacity, setOpacity] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isClose, setIsClose] = useState(false);

  const handleClose = (e) => {
    e.preventDefault();
    setIsClose((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["myskill", "education"]; // Tambahkan semua ID yang ingin diperiksa
      let isSectionActive = false;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            isSectionActive = true;
          }
        }
      });

      setIsActive(isSectionActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight; // Tinggi layar
      const newOpacity = Math.min(scrollY / (viewportHeight * 0.1), 1); // Naik 10% setiap 1vh
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 118,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div
        className={`${
          isClose ? "flex" : "hidden"
        } fixed  size-full z-500 bg-amber-300/0`}
      >
        <div
          onClick={handleClose}
          className="w-[35%] bg-[#1A1A1A]/50
          max-[430px]:w-[30%]"
        ></div>
        <div
          className="w-[65%] bg-[#1A1A1A] border-s-2 border-white
        max-[430px]:w-[70%]"
        >
          <ul
            className="flex flex-col text-white size-full p-10 text-2xl jura-regular gap-15 items-start font-bold
          max-[430px]:text-lg md:text-4xl max-[430px]:gap-8"
          >
            <div className="flex w-full items-center justify-between">
              <CgCloseR
                className="opacity-0 text-6xl text-red-600
                max-[430px]:text-5xl"
                disabled
              />
              <CgCloseR
                onClick={handleClose}
                className="text-6xl text-red-600
                max-[430px]:text-5xl"
              />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("aboutme");
                handleClose(e);
              }}
              className="inline text-start cursor-pointer"
            >
              TENTANG AKU
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("education");
                handleClose(e);
              }}
              className="inline text-start cursor-pointer"
            >
              PENDIDIKAN
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("experience");
                handleClose(e);
              }}
              className="inline text-start cursor-pointer"
            >
              PENGALAMAN
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("myskill");
                handleClose(e);
              }}
              className="inline text-start cursor-pointer"
            >
              KEMAMPUAN
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("project");
                handleClose(e);
              }}
              className="inline text-start cursor-pointer"
            >
              PROYEK
            </button>
          </ul>
        </div>
      </div>
      <header
        className={`flex px-12 h-[120px] justify-between fixed w-full z-150 ${
          isActive ? "border-b-2 border-white" : ""
        }
       md:px-20 py-5 md:py-5`}
        style={{
          backgroundColor: `rgba(26, 26, 26, ${opacity})`,
        }}
      >
        <a href="/" className=" hover:animate-spin flex">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={`/optimized/logo-large.webp`}
            />
            <source
              media="(min-width: 640px)"
              srcSet={`/optimized/logo-medium.webp`}
            />
            <img
              src="/optimized/logo-small.webp"
              className=" size-15 cursor-pointer my-auto
          md:size-20"
              alt="logo app"
            />
          </picture>
        </a>
        <nav
          className="hidden 
      lg:flex"
        >
          <ul className="text-white text-md jura-regular flex gap-12 items-center font-bold">
            <button
              onClick={() => scrollToSection("aboutme")}
              className="inline cursor-pointer"
            >
              TENTANG AKU
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="inline cursor-pointer"
            >
              PENDIDIKAN
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="inline cursor-pointer"
            >
              PENGALAMAN
            </button>
            <button
              onClick={() => scrollToSection("myskill")}
              className="inline cursor-pointer"
            >
              KEMAMPUAN
            </button>
            <button
              onClick={() => scrollToSection("project")}
              className="inline cursor-pointer"
            >
              PROYEK
            </button>
          </ul>
        </nav>
        <GiHamburgerMenu
          onClick={handleClose}
          className=" block text-white size-12 my-auto
        lg:hidden
        max-[430px]:size-9"
        />
      </header>
    </>
  );
};

export default Header;
