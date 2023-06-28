import React from 'react';
import { Tooltip } from "@material-tailwind/react";


const Carousel = () => {
  
    return (
        <div className=" vpx-4 py-5 mob:flex-col w-[20%] flex items-center gap-5">
            <h6 className="mob:ml-[75vw] ml-[10%] text-xl font-semibold font-montserrat tracking-widest">
                TECNOLOGIAS
            </h6>

            <div className="flex mob:flex-wrap mob:w-[80vw] mob:ml-[80vw] mob:min-h-[20%] mt-4 mb-4 text-gray-600 gap-8 ml-10 h-13">
               
                    
                    <Tooltip content="REACT" placement="bottom">
                        <img
                            className="w-[8vw] h-[6vh] hover:animate-bounce"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                            alt=""
                        />
                        </Tooltip>
                        <Tooltip content="MONGO" placement="bottom">
                        <img
                            className="w-[8vw] h-[6vh] hover:animate-bounce"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMRzP2i8h_xIFrtbyJvXy29eTCtyUpwIrzg&usqp=CAU"
                            alt=""
                        />
                        </Tooltip>
                        <Tooltip content="EXPRESS"  placement="bottom">
                        <img
                            className="w-[8vw] h-[6vh] hover:animate-bounce"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR2dM_4ZceKe2hpJ-4k-gEOZKn1f8JPr_ARhbMPDjjUyu3oLS7zEA3wZGzjrxt0NU6BRY&usqp=CAU"
                            alt=""
                        />
                        </Tooltip>
                        <Tooltip content="NODE" placement="bottom">
                        <img
                            className="w-[8vw] h-[6vh] hover:animate-bounce"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-oDlqsGZafPOdrWATbpoIQ8w2IMxT5XRY4w&usqp=CAU"
                            alt=""
                        />
                        </Tooltip>
                        <Tooltip content="JAVASCRIPT" placement="bottom">
                        <img
                            className="w-[8vw] h-[6vh] hover:animate-bounce"
                            src="https://www.jovenesprogramadores.cl/wp-content/uploads/2020/07/JavaScript.png"
                            alt=""
                        />
                        </Tooltip>
                        <Tooltip content="HTML" placement="bottom">
                        <img
                            className="w-[8vw] h-[6vh] hover:animate-bounce"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMuXIKOZAg4Yjpx49EpGZz6NECbSLQpl22MQ&usqp=CAU"
                            alt=""
                        />
                        </Tooltip>
                        <Tooltip content="CSS" placement="bottom">
                        <img
                            className="w-[8vw] h-[6vh] hover:animate-bounce"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817"                            alt=""
                        />
                        </Tooltip>
                        <Tooltip content="GITHUB" placement="bottom">
                        <img
                            className="w-[8vw] h-[6vh] hover:animate-bounce"
                            src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"                            alt=""
                        />
                        </Tooltip>
                        <Tooltip content="GIT" placement="bottom">
                        <img
                            className="w-[8vw] h-[6vh] hover:animate-bounce"
                            src="https://git-scm.com/images/logos/logomark-orange@2x.png"                            alt=""
                        />
                        </Tooltip>
                        <Tooltip content="POSTMAN" placement="bottom">
                        <img
                            className="w-[8vw] h-[6vh] hover:animate-bounce"
                            src="https://cdn.worldvectorlogo.com/logos/postman.svg"                            alt=""
                        />
                        </Tooltip>
                        <Tooltip content="FIGMA" placement="bottom">
                        <img
                            className="w-[8vw] h-[6vh] hover:animate-bounce"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/400px-Figma-logo.svg.png"                            alt=""
                        />
                        </Tooltip>
                        <Tooltip content="TRELLO" placement="bottom">
                        <img
                            className="w-[8vw] h-[6vh] hover:animate-bounce"
                            src="https://play-lh.googleusercontent.com/CiGs15N1e1tXrSnVLEY9jOnKi1oNzPQNRjqhR8fXE0pnu_bRyNmfc8xXr2VQUJTfJ9A=s48-rw"                             alt=""
                        />
                        </Tooltip>
                        <Tooltip content="REDUX" placement="bottom">
                        <img
                            className="w-[8vw] h-[6vh] hover:animate-bounce"
                            src="https://www.svgrepo.com/show/303557/redux-logo.svg"                            alt=""
                        />
                        </Tooltip>
                        <Tooltip content="TAILWIND" placement="bottom">
                        <img
                            className="w-[8%] h-[6vh] hover:animate-bounce"
                            src="https://cdn-1.webcatalog.io/catalog/tailwind-play/tailwind-play-icon-filled-256.webp?v=1675594012719"                            alt=""
                        />
                        </Tooltip>
                        <Tooltip content="BOOTSTRAP" placement="bottom">
                        <img
                            className="w-[8%] h-[6vh] hover:animate-bounce"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"                            alt=""
                        />
                        </Tooltip>
                       
                   
                    
    

           
            </div>
        </div>
    );
};

export default Carousel;
