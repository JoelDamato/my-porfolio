import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Tooltip } from "@material-tailwind/react";
import { useMediaQuery } from "react-responsive";

export default function Carousel( darkMode ) {

    const isMobile = useMediaQuery({ maxWidth: 768 })

    const settings = {
      
      infinite: true,
      slidesToShow: isMobile ? 5 : 10,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };




    return (
        <div className="w-full flex justify-center">
      <div className={` shadow-lg rounded-lg w-[93.2%] mob:w-[90%]  p-10 ${darkMode.dark ? 'bg-gray-700/40 border-[1px] border-violet-950 text-violet-800' : 'bg-white/80'}`}>
 <h6 className="text-xl pb-5 font-semibold text-center font-montserrat tracking-[1vw]  ">
              TECNOLOGIAS</h6>

        <Slider {...settings} >
        <Tooltip content="REACT" placement="bottom">
                        <img
                            className="w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
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
                        <Tooltip content="GITHUB" placement="bottom">
                        <img
                            className="rounded-full w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"                            alt=""
                        />
                        </Tooltip>
                        <Tooltip content="GIT" placement="bottom">
                        <img
                            className="rounded-full w-[5vw] h-[5vh] mob:h-[87h] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://git-scm.com/images/logos/logomark-orange@2x.png"                            alt=""
                        />
                        </Tooltip>
                        <Tooltip content="POSTMAN" placement="bottom">
                        <img
                            className="rounded-full w-[5vw] h-[5vh] mob:h-[7vh] mob:w-[9vw] lg:w-[3vw] lg:h-[3vw]"
                            src="https://cdn.worldvectorlogo.com/logos/postman.svg"                            alt=""
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
        </div>
      </div>
    );
  }
