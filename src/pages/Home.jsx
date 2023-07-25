import { useState, useEffect } from "react";
import About from "../components/About";
import Carousel from "../components/Carousel";
import Projects from "../components/Projects";
import Contacto from "../components/Contacto";
import MaquinaEscribir from '../components/MaquinaEscribir';
import { Tooltip} from "@material-tailwind/react";



export default function Home() {

  const [darkMode, setDarkMode] = useState(false)



  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const handleSeeMore = () => {
    const newScrollPosition = window.innerHeight;
    window.scrollTo({
      top: newScrollPosition,
      behavior: "smooth",
    });
    setScrollPosition(newScrollPosition);
  };
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Función para hacer scroll hasta el principio de la página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Agregar el event listener para manejar el scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const myRef = document.querySelector('.scrollable-div')
  const textoMaquina = " ¡Hola! Soy D'amato Joel";
  const intervaloEscritura = 150; 

  return (
    <>

      <div className= {`font-montserrat ${darkMode ? 'bg-gradient-to-r from-black via-violet-950 to-black ' : 'bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400'} `}>

        <div className="z-10 fixed top-5 ml-1">
          <div className={` ${darkMode ? ' text-white bg-black/60 border-[1px] border-violet-950' : ' text-black bg-white/70 '} z-50  mt-4 text-5xl flex flex-col gap-3 rounded-lg w-10 p-1 `} >
            <Tooltip content="WHATSAPP" placement="right">
              <a aria-label="Chat on WhatsApp" target="_blank" href="https://wa.me/+5491153743607"><img alt="Chat on WhatsApp" src="https://www.pngplay.com/wp-content/uploads/8/Whatsapp-No-Background.png" className='w-[5vh]' />   </a>
            </Tooltip>
            <Tooltip content="LINKEDIN" placement="right">
              <a aria-label="Linkedin" target="_blank" href="https://www.linkedin.com/in/joel-damato-79a93026a/"><img alt="linkedin" src="https://cdn-icons-png.flaticon.com/256/174/174857.png" className='w-[5vh]' />
              </a>
            </Tooltip>
            <Tooltip content="GITHUB" placement="right">
              <a aria-label="Github" target="_blank" href="https://github.com/JoelDamato"><img alt="github" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" className='w-[5vh]' />
              </a>
            </Tooltip>

          </div>

        </div>

        <div className="relative pt-16 pb-35 flex content-center items-center justify-center"
          style={{
            minHeight: "105vh"
          }}>
          <div className={` absolute top-0 w-full h-[100vh] ${darkMode? "opacity-50 ":""} bg-center bg-cover`}
            style={{
              backgroundImage: "url('https://i.ibb.co/GtRb0hx/fondo.png')"
            }}>

          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">


              <div className="flex flex-col items-center  w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <img className=" w-[50%] mt-[-10%]" src="https://i.ibb.co/tYyMHkc/J.png" alt="" />

                <div className={`pt-2 w-[100%] ${darkMode ? 'bg-black/80 border-[1px] border-violet-950 ' : ' bg-white/50'} flex flex-col text-center items-center justify-center rounded-lg shadow-lg `}>


                  <p className={` ${darkMode ? ' text-violet-700' : ''} z-50 flex flex-col  mt-4 text-lg sm:text-3xl  items-center font-montserrat  text-black`}>
                  <MaquinaEscribir texto={textoMaquina} intervalo={intervaloEscritura} />
                  <h2 className="font-montserrat font-semibold text-2xl tracking-[10px] ">FULL STACK DEVELOPER</h2>

                  </p>

                  <button
                    onClick={handleSeeMore}
                    className={`${darkMode ? ' bg-black text-violet-900 border-[2px] border-violet-900/60' : 'bg-white text-black'} animate-bounce  rounded-full mt-5 p-1 mb-[-2%]`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-8 h-8"
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

              <div className="mt-5 w-full h-[10vh] pb-4  flex justify-center items-center ">
  <div className={`flex justify-center gap-2 items-center rounded-lg p-2 ${darkMode ? 'bg-black/70 border-[1px] border-violet-950 text-violet-800' : 'bg-white/50'}`}>
  Modo Dark 
 <button
      className={`flex items-center justify-between w-16 h-8 rounded-full p-1 transition-colors ${
        darkMode ? 'bg-violet-800' : 'bg-gray-300'
      }`}
      onClick={toggleDarkMode}
    >
      <span
        className={`inline-block w-6 h-6 rounded-full transition-transform transform ${
          darkMode ? 'translate-x-8' : 'translate-x-1 '
        } bg-white`}
      >
        {darkMode ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hover:animate-spin w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>:      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hover:animate-spin w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>}
   
    </span>
    </button>
    </div>
        </div>

            </div>
          </div>
        </div>

        <section className="mob:mt-[-5%] relative w-full min-h-[100%]   pb-10  mob:flex mob:flex-col mob:items-center">

          <About dark={darkMode} />
          <Carousel dark={darkMode} />
          <div className="gap-2 mt-5 flex justify-center w-full">

            <Projects dark={darkMode} />
           
          </div>

        </section>



        <div className={`flex justify-center  pt-[10vh]`}>


          <Contacto dark={darkMode} />

        </div>
        <button
      className={`fixed bottom-4 right-3  ${darkMode ? "bg-black/50 border-[1px] border-violet-950 text-violet-800" : " text-white bg-gray-500"} ${isVisible ? "opacity-100" : "opacity-0"}  py-2 px-4 rounded-full transition-opacity `}
      
      onClick={scrollToTop}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="animate-pulse w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
</svg>

    </button>

      </div>
     

    </>
  );
}

