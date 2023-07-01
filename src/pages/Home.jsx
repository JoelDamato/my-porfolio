import { useState } from "react";
import About from "../components/About";
import Carousel from "../components/Carousel";
import Projects from "../components/Projects";
import Contacto from "../components/Contacto";

import { Tooltip } from "@material-tailwind/react";

export default function Home() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleSeeMore = () => {
    const newScrollPosition = window.innerHeight;
    window.scrollTo({
      top: newScrollPosition,
      behavior: "smooth",
    });
    setScrollPosition(newScrollPosition);
  };
  return (
    <>

      <div className="font-montserrat bg-black">

        <div className="z-10 fixed top-5 ml-1">
          <div className=" flex flex-col gap-3 rounded-2xl w-10 p-1 bg-white/70" >
            <Tooltip content="WHATSAPP" placement="right">
              <a aria-label="Chat on WhatsApp" href="https://wa.me/1553743607"><img alt="Chat on WhatsApp" src="https://www.pngplay.com/wp-content/uploads/8/Whatsapp-No-Background.png" className='w-[5vh]' />   </a>
            </Tooltip>
            <Tooltip content="LINKEDIN" placement="right">
              <a aria-label="Linkedin" href="https://www.linkedin.com/in/joel-damato-79a93026a/"><img alt="linkedin" src="https://cdn-icons-png.flaticon.com/256/174/174857.png" className='w-[5vh]' />
              </a>
            </Tooltip>
            <Tooltip content="GITHUB" placement="right">
              <a aria-label="Github" href="https://github.com/JoelDamato"><img alt="github" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" className='w-[5vh]' />
              </a>
            </Tooltip>

          </div>

        </div>

        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "120vh"
          }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('https://i.ibb.co/GtRb0hx/fondo.png')"
            }}>

          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">


              <div className="flex flex-col items-center  w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <img className=" w-[50%] mt-[-10%]" src="https://i.ibb.co/tYyMHkc/J.png" alt="" />

                <div className="pt-2 w-[100%]  bg-white/50 flex flex-col items-center rounded-lg shadow-lg">

                  <p className="z-50  mt-4 text-5xl text-black">
                    Full Stack Developer
                  </p>
                  <h1 className="mob:text-lg mob:ml-3 tracking-[20px] text-black font-bold text-5xl shadow-lg ">
                    DAMATO JOEL
                  </h1>
                  <img className="mob:hidden absolute right-[6vw]  lg:right-[21vw] w-[7%] 2xl:right-[14vw] " src="https://images.credly.com/images/9ab2bbf5-a5cd-4c36-9c5a-1ce7e0e0cd32/Insignia_MERN-20.png" alt="" />

                  <button
                    onClick={handleSeeMore}
                    className=" animate-bounce bg-white rounded-full mt-5 p-1 mb-[-2%]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>

                </div>
              </div>

            </div>
          </div>
        </div>

        <section className="relative w-full min-h-[100%] pt-5  pb-10 mt-[-5%] bg-white/20 mob:flex mob:flex-col mob:items-center">

          <About />
          <Carousel />
          <div className="gap-2 mt-5 flex justify-center w-full">

            <Projects />

          </div>

        </section>



        <div className="flex justify-center bg-white/50 pt-[10vh]">


          <Contacto />

        </div>

      </div>
     

    </>
  );
}

