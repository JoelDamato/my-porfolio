import React from 'react'
import {
  Avatar,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from 'react';
import { saveAs } from 'file-saver';


export default function About(darkMode) {
  const myRef = document.querySelector('.scrollable-div')
  const [size, setSize] = useState(null);

  const handleDownload = () => {
    const fileURL = 'https://drive.google.com/u/0/uc?id=1f2z1bw-RHcIhK8LGjIAEiOv0gEoo-NE7&export=download'; // Ruta relativa al archivo PDF
  
    // Usar FileSaver.js para descargar el archivo
    saveAs(fileURL, 'CV-Damato-Joel.pdf');
  };
  
  
  const handleOpen = (value) => setSize(value);
  return (

    <div className="w-full flex justify-evenly mob:flex-col mob:items-center">

      <div className="mob:w-[90%] w-[30%] text-center">
        <div className={`h-[90%]  flex flex-col items-center min-w-0  mob:w-[100%] ${darkMode.dark ? 'bg-gray-700/40 border-[1px] border-violet-950 text-white' : 'bg-white/80'}  w-full mb-8 shadow-lg rounded-lg`}>
          <div className=" py-5 flex-col items-center w-[80%]">
            <h6 className="text-xl font-semibold font-montserrat tracking-[1vw]">
              DATOS </h6>


            <p className=" text-lg mb-4  flex-col items-center mt-5 font-semibold">

              <p className=" flex gap-2 "> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
</svg>
Me llamo Joel D'amato</p>

<p className=" flex gap-2 "> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

Me dicen J</p>

<p className=" flex gap-2  ">   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
</svg>Full Stack Developer</p>

              <p className=" flex gap-2 "> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
</svg>
Tengo 28 años</p>

<p className=" flex gap-2  ">   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg> Vivo en Argentina </p>

<p className=" flex gap-2  "> 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg> Arbitrador Financiero
</p>

<p className=" flex gap-2  "> 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
</svg> Emprendedor
</p>










            




            </p>
          </div>
        </div>
      </div>
      <div className="mob:w-[90%] w-[60%]   text-center mob:items-center">
        <div className={`h-[90%] mob:w-[100%]  flex flex-col min-w-0 ${darkMode.dark ? 'bg-gray-700/40 border-[1px] border-violet-950 text-white' : 'bg-white/80'}  mb-8 shadow-lg rounded-lg`}>
          <div className="px-4 py-5 flex-auto">
            <h6 className=" text-xl font-semibold font-montserrat tracking-[1vw]  ">
              SOBRE MI </h6>


            <div className="flex mob:flex-col items-center">
         
            <Avatar className={` rounded-full  p-0.5 border-[2px] hover:transition duration-500 ${darkMode.dark ? "border-violet-900 opacity-70":  "border-black"} w-[10vw] mob:w-[30%] mob:mt-5 `} src="https://i.ibb.co/dPzzCSw/1685723210690.jpg" withBorder={true} />
             
              <div className="flex flex-col">
                <p className="p-4 mt-2 mb-4 text-lg  text-justify">

                <p > Soy <span className='font-bold' > Desarrollador Full Stack </span> especializado en el stack <span className='font-bold' > MERN </span> <span className='italic'> (MongoDB, Express, React y Node.js). </span> </p>
                <p>                  
                   Decidí redirigir mi carrera hacia la programación porque veo en ella una forma de facilitar la vida humana, ya que está presente en todo lo que hacemos. Me destaco por ser dinámico, resolver problemas con eficacia y adaptarme rápidamente a nuevas situaciones. Disfruto trabajar en equipo y tengo habilidades destacadas en coordinación. Me apasiona implementar procesos que faciliten la automatización, tanto mediante código como utilizando otras tecnologías. Poseo una gran capacidad para aprender y ajustarme a diferentes herramientas y entornos tecnológicos.</p>
               </p>
           
              </div>
            </div>
            <div className='w-full gap-2 flex flex-col items-center justify-center sm:flex-row sm:justify-evenly'>
          
               <Button onClick={() => handleOpen("sm")} className={`flex gap-1 items-center  ${darkMode.dark ? ' bg-black  text-violet-800 hover:bg-violet-600/10  ' : 'bg-white/80 text-gray-800 hover:bg-black/60'} shadow-lg    font-bold  rounded-lg`} variant="gradient">
          CERTIFICADO FULL STACK <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
</svg>

        </Button>
        <Dialog
        open={
          size === "xs" ||
          size === "sm" ||
          size === "md" ||
          size === "lg" ||
          size === "xl" ||
          size === "xxl"
        }
        size={size || "md"}
        handler={handleOpen}
        className={`flex mob:flex-col mob:h-[80%] justify-center ${darkMode.dark ? 'bg-gray-700/40 border-[1px] border-violet-950 text-violet-800 ' : 'bg-white/80 text-gray-800'} shadow-lg font-bold py-2 px-4 rounded-l`}
      >
        <div className='flex flex-col items-center justify-center '>
        <DialogHeader>BOOTCAMP FULL STACK MERN</DialogHeader>
        <img src="https://images.credly.com/images/9ab2bbf5-a5cd-4c36-9c5a-1ce7e0e0cd32/Insignia_MERN-20.png" className='w-[40%]' alt="" />
      
        </div>
       
        <DialogBody divider>
<img src="https://i.ibb.co/0QMMKbD/1688654257393.jpg" className='object-fit w-[80vw] h-[80vh] mob:[w-90vw] mob:h-[50vh]' alt="" />
        </DialogBody>
        <DialogFooter className='flex justify-center'>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className={` ${darkMode.dark ? 'bg-gray-700/40 border-[1px] border-violet-950 text-violet-800 ' : 'bg-white/80 text-gray-800'} shadow-lg  hover:bg-indigo-700/60  font-bold py-2 px-4 rounded-l`}
          >
            <span>Cerrar</span>
          </Button>
        
        </DialogFooter>
      </Dialog>
      </div>
          </div>
        </div>
      </div>




    </div>


  )
}
