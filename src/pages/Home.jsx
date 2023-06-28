import { useState } from "react";
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
                 
                  <p  className="z-50  mt-4 text-5xl text-black">
                    Full Stack Developer
                  </p>
                  <h1 className="mob:text-lg tracking-[20px] text-black font-bold text-5xl shadow-lg ">
                  DAMATO JOEL
                  </h1>
                  <img className="mob:hidden absolute right-[23%] w-[7vw] " src="https://images.credly.com/images/9ab2bbf5-a5cd-4c36-9c5a-1ce7e0e0cd32/Insignia_MERN-20.png" alt="" />

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
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-black fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
            
          </div>

        </div>

        <section className="pb-20 bg-black/80 -mt-24">
          <div className="container lg:mx-auto lg:px-4 mob:w-full">
            <div className="flex flex-wrap">
              
              <div className="mob:w-[100%] w-[50%] md:w-4/12 lg:px-4 text-center">
                <div className="h-[90%] relative flex flex-col min-w-0  mob:w-[120%] break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                  <h6 className="text-xl font-semibold font-montserrat tracking-widest ">
                      HABILIDADES </h6>
  
                    <p className="mt-2 mb-4  flex-col">
                 
<p className="shadow-md  hover:bg-black/10">Resolutivo</p>
<p className="shadow-md  hover:bg-black/10">Creativo</p>
<p className="shadow-md  hover:bg-black/10">Aprendizaje rapido</p>
<p className="shadow-md hover:bg-black/10">Trabajo colaborativo</p>
<p className="shadow-md  hover:bg-black/10">Productivo</p>


                    </p>
                  </div>
                </div>
              </div>
              <div className="mob:w-[100%] w-[50vw] md:w-4/12 md:px-4 text-center">
                <div className="h-[90%] mob:w-[120%]  relative flex flex-col min-w-0 break-words bg-white w-[61VW] mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-xl font-semibold font-montserrat tracking-[1vw]  md:ml-[18%] ">
                      SOBRE MI </h6>
                
  
                    <div className="flex mob:flex-col items-center">
                      <img className="rounded-full w-[10vw]" src="https://i.ibb.co/dPzzCSw/1685723210690.jpg" alt="" />
                     
                   <div className="flex flex-col">
                   <p className="p-4 mt-2 mb-4 text-gray-600 ">
                    <p>Me dicen J  y tengo 27 años.</p> 

Soy Desarrollador Full Stack, especializado en MERN. 
Decidí redirigir mi carrera hacia el mundo de la programación, que para mí es una forma de facilitar la vida humana, está presente en todo lo que hacemos.
                    </p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
                
             

              
            </div>

          </div>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-[93.2%] ml-[3.6%]  shadow-lg rounded-lg">
                  

<Carousel/>

                </div>
        </section>
       
<div className="flex justify-center w-full">

     <Projects/>

     </div>
       
<div className="bg-gray-500">
        <section className="pb-20 relative block">
         

          <div className="mt-[10%] container mx-auto px-4 lg:pt-24 lg:pb-64 ">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="mob:hidden text-4xl font-bold tracking-widest font-montserrat text-black">
                 CONTACTAME
                </h2>
                <p className="mob:hidden text-lg leading-relaxed mt-4 mb-4 text-black">
                Si te parece interesante mi perfil y mis conocimientos te dejo un formulario para que me mandes un mail o sino mi WhatsApp
                en la esquina superior izquierda.
                </p>
              </div>
            </div>
    
          </div>
        </section>

       <Contacto/>
        
        </div>
      </div>

    </>
  );
}

