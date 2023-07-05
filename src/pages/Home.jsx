import { useState } from "react";
import About from "../components/About";
import Carousel from "../components/Carousel";
import Projects from "../components/Projects";
import Contacto from "../components/Contacto";

import { Tooltip,Switch } from "@material-tailwind/react";

export default function Home() {

  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

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

      <div className= {`font-montserrat ${darkMode ? 'bg-black ' : 'bg-gray-400'} `}>

        <div className="z-10 fixed top-5 ml-1">
          <div className={` ${darkMode ? ' text-white bg-gray-700/20 border-[1px] border-violet-950' : ' text-black bg-white/70 '} z-50  mt-4 text-5xl flex flex-col gap-3 rounded-2xl w-10 p-1 `} >
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

                <div className={`pt-2 w-[100%] ${darkMode ? 'bg-black/80 border-[1px] border-violet-950 ' : ' bg-white/50'} flex flex-col items-center rounded-lg shadow-lg `}>

                  <p className={` ${darkMode ? ' text-violet-700' : ''} z-50  mt-4 text-5xl  text-black`}>
                    Full Stack Developer
                  </p>
                  <h1 className={`${darkMode ? ' text-violet-700' : ''} mob:text-lg mob:ml-3 tracking-[20px] text-black font-bold text-5xl shadow-lg `}>
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

        <section className="relative w-full min-h-[100%] pt-5  pb-10 mt-[-5%] mob:flex mob:flex-col mob:items-center">
 <div className="w-full h-[10vh] pb-4  flex justify-center items-center ">
  <div className={`flex justify-center gap-2 items-center rounded-lg p-2 ${darkMode ? 'bg-gray-700/20 border-[1px] border-violet-950 text-violet-800' : 'bg-white'}`}>
  Modo Dark 
 <button
      className={`flex items-center justify-between w-16 h-8 rounded-full p-1 transition-colors ${
        darkMode ? 'bg-violet-800' : 'bg-gray-300'
      }`}
      onClick={toggleDarkMode}
    >
      <span
        className={`inline-block w-6 h-6 rounded-full transition-transform transform ${
          darkMode ? 'translate-x-8' : 'translate-x-1'
        } bg-white`}
      ></span>
    </button>
    </div>
        </div>
          <About dark={darkMode} />
          <Carousel dark={darkMode} />
          <div className="gap-2 mt-5 flex justify-center w-full">

            <Projects dark={darkMode} />
           
          </div>

        </section>



        <div className={`flex justify-center ${darkMode ? 'bg-black' : 'bg-gray-400'}  pt-[10vh]`}>


          <Contacto dark={darkMode} />

        </div>

      </div>
     

    </>
  );
}

