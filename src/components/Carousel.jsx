import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Tooltip,
    Accordion,
  Avatar, ButtonGroup, Button } from "@material-tailwind/react";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

export default function Carousel( darkMode ) {
    const [open, setOpen] = useState(0);
    const [stack,setStack]= useState("Front")
 
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };
    const isMobile = useMediaQuery({ maxWidth: 768 })

    const settings = {
      
      infinite: true,
      slidesToShow: isMobile ? 3 : 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };




    return (
        <div className="w-full flex justify-center">
      <div className={`flex flex-col items-center shadow-lg rounded-lg w-[93.2%] mob:w-[90%]  p-10 ${darkMode.dark ? 'bg-gray-700/40 border-[1px] border-violet-950 text-violet-800' : 'bg-white/80'}`}>

 <h6 className="flex gap-2 items-center text-xl pb-5 text-center font-montserrat font-semibold tracking-[1vw]   ">

              TECNOLOGIAS <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
</svg>
</h6>


              <ButtonGroup className= "bg-black  rounded-lg mb-5" fullWidth>
      <Button onClick={()=>setStack("Front")} className={`${darkMode.dark  ? "border-violet-950 text-violet-800 hover:bg-violet-600/20" :"hover:bg-white/20"} ${stack === "Front"? `${darkMode.dark ? "bg-violet-600/20" :"bg-white/20"}` :""}  `}>Front-End</Button>
      <Button onClick={()=>setStack("Back")} className={`${darkMode.dark ? "border-violet-950 text-violet-800 hover:bg-violet-600/20" :"hover:bg-white/20"} ${stack === "Back"? `${darkMode.dark ? "bg-violet-600/20" :"bg-white/20"}` :""}  `}>Back-End</Button>
      <Button onClick={()=>setStack("Herramientas")} className={`${darkMode.dark ? "border-violet-950 text-violet-800 hover:bg-violet-600/20" :"hover:bg-white/20"} ${stack === "Herramientas"? `${darkMode.dark ? "bg-violet-600/20" :"bg-white/20"}` :""}  `} >Otras</Button>
    </ButtonGroup>


{stack === "Front" ? 
   <Accordion
        className=" border-[1px] border-black px-10 py-5 rounded-lg mb-2"
      >
    <h2
          
          className={`mb-5 text-xl text-center font-montserrat font-semibold border-b-0 transition-colors
          ${darkMode.dark ? ' text-violet-800 hover:text-black ' : ' text-black hover:text-indigo-700/60'}
        }`}
        >
          FRONT-END
        </h2>
       

   <Slider {...settings} >
        <Tooltip  content="REACT" placement="bottom">
                        <Avatar
                            className="border-[1px] border-black rounded-full p-1 w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                            alt=""
                        />
                        </Tooltip>
                        <Tooltip  content="NEXT" placement="bottom">
                        <img
                            className="border-[1px] border-black rounded-full p-1 w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png"
                            alt=""
                        />
                        </Tooltip>



                        
                    
                        <Tooltip content="JAVASCRIPT" placement="bottom">
                        <img

className="border-[1px] border-black rounded-full p-1 w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
src="https://www.jovenesprogramadores.cl/wp-content/uploads/2020/07/JavaScript.png"

                            alt=""
                        />
                        </Tooltip>
                        <Tooltip content="HTML" placement="bottom">
                        <img

className="border-[1px] border-black rounded-full p-1 w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMuXIKOZAg4Yjpx49EpGZz6NECbSLQpl22MQ&usqp=CAU"

                            alt=""
                        />
                        </Tooltip>
                        <Tooltip content="CSS" placement="bottom">
                        <img
                            className="border-[1px] border-black rounded-full p-1 w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817"                            alt=""

                        />
                        </Tooltip>
                        
                        <Tooltip content="REDUX" placement="bottom">
                        <img
                            className="border-[1px] border-black rounded-full p-1 w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"

                            src="https://www.svgrepo.com/show/303557/redux-logo.svg"                            alt=""
                        />
                        </Tooltip>
                        <Tooltip content="TAILWIND" placement="bottom">
                        <img
                            className="border-[1px] border-black rounded-full p-1 w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://cdn-1.webcatalog.io/catalog/tailwind-play/tailwind-play-icon-filled-256.webp?v=1675594012719"                            alt=""
                        />
                        </Tooltip>
                        <Tooltip content="BOOTSTRAP" placement="bottom">
                        <img
                            className="border-[1px] border-black rounded-full p-1 w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"                            alt=""
                        />
                        </Tooltip>
        </Slider>

        



      </Accordion>
:""}


{stack === "Back"? 
      <Accordion
        className="mb-2 border-[1px] border-black px-10 py-5 rounded-lg"
      >
    <h2
          
          className={`mb-5  text-xl text-center font-montserrat font-semibold border-b-0 transition-colors 
          ${darkMode.dark ? ' text-violet-800 hover:text-black ' : ' text-black hover:text-indigo-700/60'}
        }`}
        >
          BACK-END
        </h2>
     

   
      
<Slider {...settings} >
   <Tooltip content="SQL" placement="bottom">
                        
                        <img
                            className="border-[1px] border-black rounded-full p-1 w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://img2.freepng.es/20190610/gou/kisspng-microsoft-azure-sql-database-microsoft-azure-sql-d-postani-spletni-razvijalec-izberite-svojo-uno-5cfe7bd5b6e377.6992930615601817177491.jpg"

                            alt=""
                        />
                        
                        </Tooltip>
                        <Tooltip content="MONGO" placement="bottom">
                        
                        <img

className="border-[1px] border-black rounded-full p-1 w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMRzP2i8h_xIFrtbyJvXy29eTCtyUpwIrzg&usqp=CAU"

                            alt=""
                        />
                        
                        </Tooltip>
                        <Tooltip content="EXPRESS"  placement="bottom">
                        <img

className="border-[1px] border-black rounded-full p-1 w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR2dM_4ZceKe2hpJ-4k-gEOZKn1f8JPr_ARhbMPDjjUyu3oLS7zEA3wZGzjrxt0NU6BRY&usqp=CAU"
                            alt=""

                        />
                        </Tooltip>
                        <Tooltip content="NODE" placement="bottom">
                        <img
                            className="border-[1px] border-black rounded-full p-1 w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"

                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-oDlqsGZafPOdrWATbpoIQ8w2IMxT5XRY4w&usqp=CAU"
                            alt=""

                        />
                        </Tooltip>
                        <Tooltip content="JAVASCRIPT" placement="bottom">
                        <img

className="border-[1px] border-black rounded-full p-1 w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
src="https://www.jovenesprogramadores.cl/wp-content/uploads/2020/07/JavaScript.png"
                            alt=""

                        />
                        </Tooltip>
                        
                        
                        </Slider>
    

        



      </Accordion>
:""}




{stack === "Herramientas"?  

      <Accordion
        className="mb-5 border-[1px] border-black px-10 py-5 rounded-lg "
      >
    <h2
          
          className={`mb-5  text-xl text-center font-montserrat font-semibold border-b-0 transition-colors 
           ${darkMode.dark ? ' text-violet-800 hover:text-black ' : ' text-black hover:text-indigo-700/60'}
          }`}
        >
          HERRAMIENTAS ADICIONALES
        </h2>


 
   
 <Slider {...settings} >

 <Tooltip content="VISUAL" placement="bottom">
                        <img
                            className="border-[1px] border-black rounded-full p-1 w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://logowik.com/content/uploads/images/visual-studio-code7642.jpg"                            alt=""

                        />
                        </Tooltip>
                        <Tooltip content="POSTMAN" placement="bottom">
                        <img
                            className="border-[1px] border-black rounded-full p-1 w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://seeklogo.com/images/P/postman-logo-F43375A2EB-seeklogo.com.png"                            alt=""

                        />
                        </Tooltip>
                        <Tooltip content="FIGMA" placement="bottom">
                        <img
                            className="border-[1px] border-black rounded-full p-1 w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/400px-Figma-logo.svg.png"                            alt=""
                        />
                        </Tooltip>
                        <Tooltip content="TRELLO" placement="bottom">
                        <img
                            className="border-[1px] border-black rounded-full p-1 w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://play-lh.googleusercontent.com/CiGs15N1e1tXrSnVLEY9jOnKi1oNzPQNRjqhR8fXE0pnu_bRyNmfc8xXr2VQUJTfJ9A=s48-rw"                             alt=""
                        />
                        </Tooltip>

                        <Tooltip content="GITHUB" placement="bottom">
                        <img
                            className="border-[1px] border-black rounded-full p-1 w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"                            alt=""

                        />
                        </Tooltip>
                        <Tooltip content="GIT" placement="bottom">
                        <img

                            className="border-[1px] border-black rounded-full p-1 w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://git-scm.com/images/logos/logomark-orange@2x.png"                            alt=""

                        />
                        </Tooltip>
                        </Slider>

        



      </Accordion>
: ""}


        </div>
      </div>
    );
  }
