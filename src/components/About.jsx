import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import {
  Avatar,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from 'react';

export default function About(darkMode) {
  const myRef = document.querySelector('.scrollable-div')
  const [size, setSize] = useState(null);
 
  const handleOpen = (value) => setSize(value);
  return (

    <div className="w-full flex justify-evenly mob:flex-col mob:items-center">

      <div className="mob:w-[90%] w-[30%] text-center">
        <div className={`h-[90%]  flex flex-col min-w-0  mob:w-[100%] ${darkMode.dark ? 'bg-gray-700/40 border-[1px] border-violet-950 text-violet-700' : 'bg-white/80'}  w-full mb-8 shadow-lg rounded-lg`}>
          <div className="px-4 py-5 flex-auto">
            <h6 className="text-xl font-semibold font-montserrat tracking-widest ">
              HABILIDADES </h6>

            <p className="mt-2 mb-4  flex-co font-semibold">

              <p className="shadow-md ">Resolutivo</p>
              <p className="shadow-md ">Creativo</p>
              <p className="shadow-md ">Aprendizaje rapido</p>
              <p className="shadow-md">Trabajo colaborativo</p>
              <p className="shadow-md ">Productivo</p>


            </p>
          </div>
        </div>
      </div>
      <div className="mob:w-[90%] w-[60%]   text-center mob:items-center">
        <div className={`h-[90%] mob:w-[100%]  flex flex-col min-w-0 ${darkMode.dark ? 'bg-gray-700/40 border-[1px] border-violet-950 text-violet-700' : 'bg-white/80'}  mb-8 shadow-lg rounded-lg`}>
          <div className="px-4 py-5 flex-auto">
            <h6 className=" text-xl font-semibold font-montserrat tracking-[1vw]  ">
              SOBRE MI </h6>


            <div className="flex mob:flex-col items-center">
         
            <Avatar className={`rounded-full  p-0.5 border-[2px] hover:transition duration-500 ${darkMode.dark ? "border-violet-900 opacity-70":  "border-black"} w-[10vw] mob:w-[30%] mob:mt-5 `} src="https://i.ibb.co/dPzzCSw/1685723210690.jpg" withBorder={true} />
             
              <div className="flex flex-col">
                <p className="p-4 mt-2 mb-4 text-lg  text-justify font-semibold">
                  <p ><TypeWriterEffect
            textStyle={{ fontFamily: 'Red Hat Display' }}
            startDelay={40}
            cursorColor="black"
            hideCursorAfterText="true"
            text="Me dicen J y tengo 27 años."
            typeSpeed={100}
            scrollArea={myRef}
         
          /></p>
                  <TypeWriterEffect
            textStyle={{ fontFamily: 'Red Hat Display' }}
            startDelay={3500}
            cursorColor="black"
            text="Soy Desarrollador Full Stack, especializado en MERN
            (Mongo, Express, React y Node).
            Decidí redirigir mi carrera hacia el mundo de la programación, que para mí es una forma de facilitar la vida humana, está presente en todo lo que hacemos.
          "
            typeSpeed={70}
            scrollArea={myRef}
          />
               </p>
           
              </div>
            </div>
            <div className='w-full'>
               <Button onClick={() => handleOpen("sm")} className={` ${darkMode.dark ? 'bg-gray-700/40 border-[1px] border-violet-950 text-violet-800 ' : 'bg-white/80 text-gray-800'} shadow-lg  hover:bg-indigo-700/60  font-bold py-2 px-4 rounded-l`} variant="gradient">
          CERTIFICADO FULL STACK
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
<img src="https://imageup.me/images/9c5845fb-3bb4-4b41-b64c-5d819907d88b.jpeg" className='object-fit w-[80vw] h-[80vh] mob:[w-90vw] mob:h-[50vh]' alt="" />
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
