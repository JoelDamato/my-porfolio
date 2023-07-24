import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Tooltip,
    Accordion,
  AccordionHeader,
  AccordionBody, } from "@material-tailwind/react";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

export default function Carousel( darkMode ) {
    const [open, setOpen] = useState(0);
 
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
 <h6 className="text-xl pb-5 text-center font-montserrat font-semibold tracking-[1vw]   ">
              TECNOLOGIAS</h6>
   <Accordion
        open={open === 1}
        className=" border-[1px] border-black px-10 py-5 rounded-lg mb-2"
      >
    <h2
          onClick={() => handleOpen(1)}
          className={` cursor-pointer text-xl text-center font-montserrat font-semibold border-b-0 transition-colors
          ${darkMode.dark ? ' text-violet-800 hover:text-black ' : ' text-black hover:text-indigo-700/60'}
        }`}
        >
          FRONT-END
        </h2>
        <AccordionBody className={` pt-5 text-base font-normal pt-0border-b-0 transition-colors ${
            open === 1 ? "text-blue-500 hover:!text-blue-700" : "hidden"
          }`}>

   <Slider {...settings} >
        <Tooltip  content="REACT" placement="bottom">
                        <img
                            className="w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                            alt=""
                        />
                        </Tooltip>
                        <Tooltip  content="NEXT" placement="bottom">
                        <img
                            className="w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png"
                            alt=""
                        />
                        </Tooltip>



                        
                    
                        <Tooltip content="JAVASCRIPT" placement="bottom">
                        <img

                            className="rounded-full w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://www.jovenesprogramadores.cl/wp-content/uploads/2020/07/JavaScript.png"

                            alt=""
                        />
                        </Tooltip>
                        <Tooltip content="HTML" placement="bottom">
                        <img

                            className="rounded-full w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMuXIKOZAg4Yjpx49EpGZz6NECbSLQpl22MQ&usqp=CAU"

                            alt=""
                        />
                        </Tooltip>
                        <Tooltip content="CSS" placement="bottom">
                        <img
                            className="rounded-full w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817"                            alt=""

                        />
                        </Tooltip>
                        
                        <Tooltip content="REDUX" placement="bottom">
                        <img
                            className="rounded-full w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"

                            src="https://www.svgrepo.com/show/303557/redux-logo.svg"                            alt=""
                        />
                        </Tooltip>
                        <Tooltip content="TAILWIND" placement="bottom">
                        <img
                            className="rounded-full w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://cdn-1.webcatalog.io/catalog/tailwind-play/tailwind-play-icon-filled-256.webp?v=1675594012719"                            alt=""
                        />
                        </Tooltip>
                        <Tooltip content="BOOTSTRAP" placement="bottom">
                        <img
                            className="rounded-full w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"                            alt=""
                        />
                        </Tooltip>
        </Slider>

        </AccordionBody>



      </Accordion>
      <Accordion
        open={open === 2}
        className=" border-[1px] border-black px-10 py-5 rounded-lg mb-2"
      >
    <h2
          onClick={() => handleOpen(2)}
          className={` cursor-pointer text-xl text-center font-montserrat font-semibold border-b-0 transition-colors 
          ${darkMode.dark ? ' text-violet-800 hover:text-black ' : ' text-black hover:text-indigo-700/60'}
        }`}
        >
          BACK-END
        </h2>
        <AccordionBody className={` text-base font-normal  transition-colors ${
            open === 2 ? "text-blue-500 hover:!text-blue-700" : "hidden"
          }`}>

   
      
<Slider {...settings} >
   <Tooltip content="SQL" placement="bottom">
                        
                        <img
                            className="rounded-full w-[5vw]  mob:h-[7vh] mob:w-[9vw] h-[5vh] lg:w-[3vw] lg:h-[3vw]"
                            src="https://img2.freepng.es/20190610/gou/kisspng-microsoft-azure-sql-database-microsoft-azure-sql-d-postani-spletni-razvijalec-izberite-svojo-uno-5cfe7bd5b6e377.6992930615601817177491.jpg"

                            alt=""
                        />
                        
                        </Tooltip>
                        <Tooltip content="MONGO" placement="bottom">
                        
                        <img

                            className="rounded-full w-[5vw]  mob:h-[7vh] mob:w-[9vw] h-[5vh] lg:w-[3vw] lg:h-[3vw]"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMRzP2i8h_xIFrtbyJvXy29eTCtyUpwIrzg&usqp=CAU"

                            alt=""
                        />
                        
                        </Tooltip>
                        <Tooltip content="EXPRESS"  placement="bottom">
                        <img

                            className="rounded-full w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw]  lg:w-[3vw] lg:h-[3vw]"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR2dM_4ZceKe2hpJ-4k-gEOZKn1f8JPr_ARhbMPDjjUyu3oLS7zEA3wZGzjrxt0NU6BRY&usqp=CAU"
                            alt=""

                        />
                        </Tooltip>
                        <Tooltip content="NODE" placement="bottom">
                        <img
                            className="rounded-full w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"

                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-oDlqsGZafPOdrWATbpoIQ8w2IMxT5XRY4w&usqp=CAU"
                            alt=""

                        />
                        </Tooltip>
                        <Tooltip content="JAVASCRIPT" placement="bottom">
                        <img

                            className="rounded-full w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://www.jovenesprogramadores.cl/wp-content/uploads/2020/07/JavaScript.png"
                            alt=""

                        />
                        </Tooltip>
                        
                        
                        </Slider>
    

        </AccordionBody>



      </Accordion>
      <Accordion
        open={open === 3}
        className=" border-[1px] border-black px-10 py-5 rounded-lg mb-2"
      >
    <h2
          onClick={() => handleOpen(3)}
          className={` cursor-pointer text-xl text-center font-montserrat font-semibold border-b-0 transition-colors 
           ${darkMode.dark ? ' text-violet-800 hover:text-black ' : ' text-black hover:text-indigo-700/60'}
          }`}
        >
          HERRAMIENTAS ADICIONALES
        </h2>

<AccordionBody className={`pt-5 text-base font-normal  border-b-0 transition-colors ${
            open === 3 ? "text-blue-500 hover:!text-blue-700" : "hidden"
          }`}>
 
   
 <Slider {...settings} >

 <Tooltip content="VISUAL" placement="bottom">
                        <img
                            className="rounded-full w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://logowik.com/content/uploads/images/visual-studio-code7642.jpg"                            alt=""

                        />
                        </Tooltip>
                        <Tooltip content="POSTMAN" placement="bottom">
                        <img
                            className="rounded-full w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://seeklogo.com/images/P/postman-logo-F43375A2EB-seeklogo.com.png"                            alt=""

                        />
                        </Tooltip>
                        <Tooltip content="FIGMA" placement="bottom">
                        <img
                            className="rounded-full w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/400px-Figma-logo.svg.png"                            alt=""
                        />
                        </Tooltip>
                        <Tooltip content="TRELLO" placement="bottom">
                        <img
                            className="rounded-full w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://play-lh.googleusercontent.com/CiGs15N1e1tXrSnVLEY9jOnKi1oNzPQNRjqhR8fXE0pnu_bRyNmfc8xXr2VQUJTfJ9A=s48-rw"                             alt=""
                        />
                        </Tooltip>

                        <Tooltip content="GITHUB" placement="bottom">
                        <img
                            className="rounded-full w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"                            alt=""

                        />
                        </Tooltip>
                        <Tooltip content="GIT" placement="bottom">
                        <img

                            className="rounded-full w-[5vw] h-[5vh] mob:h-[8vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://git-scm.com/images/logos/logomark-orange@2x.png"                            alt=""

                        />
                        </Tooltip>
                        </Slider>

        </AccordionBody>



      </Accordion>
        </div>
      </div>
    );
  }
