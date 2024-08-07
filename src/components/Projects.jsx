import React from "react";
import { useState,useEffect} from "react";
import { ButtonGroup, Button } from "@material-tailwind/react";



export default function Projects(darkMode) {

  let categories= [
    {"image":"https://i.ibb.co/kmxztP6/2023-06-27.png","description":"Desarolle esta web individualmente, utilizando HTML, CSS, JAVASCRIPT VANILLA. La funcionalidad de la pagina es poder aportar datos a su cliente, filtar por un buscador o check. Ademas de estadisticas y datos de cada evento individualmente,","name":"AMAZING","color":"violet","code":"https://github.com/JoelDamato/Amazing-Events","web":""},
    {"image":"https://i.ibb.co/ZmHvGHN/2023-06-27-3.png","description":"Desarrollo de una web, aplicando metodología AGILE para la organización del trabajo en grupo. Utilizamos tecnologías HTML, CSS, Boostrap, los datos del producto fueron consumidos de la API provista por el cliente. Dentro de las funcionalidades de la web, generamos una página dinámica, seccionada en hogar, juguetes, farmacia, contacto y forma de pago. Además, incorporamos la opción de agregar o quitar productos al carrito de compras.","name":"PETSHOP","color":"gray","code":"https://github.com/JoelDamato/Petshop-HappyPets","web":"https://pet-shop-ashy.vercel.app/"},
    {"image":"https://i.ibb.co/CQH2rk6/2023-06-27-4.png","description":"Web desarrollada en equipo, utilizando la metodología de trabajo AGILE , organizando y distribuyendo tareas en Trello, aplicando diferentes tecnologías para asegurar el correcto funcionamiento de la aplicación, desde el lado Front-end y Back-end. ","name":"MINGA","color":"red","code":"https://github.com/JoelDamato/Minga_green_front","web":"https://minga-verde-front.vercel.app/"},
    {"image":"https://i.ibb.co/m476tqk/2023-06-27-1.png","description":"Web desarrollada en equipo, utilizando la metodología de trabajo AGILE , organizando y distribuyendo tareas en Trello, aplicando diferentes tecnologías para asegurar el correcto funcionamiento de la aplicación, desde el lado Front-end y Back-end. ","name":"MINDTECH","color":"green","code":"https://github.com/JoelDamato/Mindtech-web-front","web":"https://mindtech.store"},
    {"image":"https://i.ibb.co/GFXx0wG/Captura-de-pantalla-2024-07-01-15-41-11.png","description":"Web desarrollada indepediente, organizando tareas en Notion, aplicando diferentes tecnologías para asegurar el correcto funcionamiento de la aplicación, desde el lado Front-end implemente NEXT.JS con TS y en el Back-end una base de datos SQL. ","name":"BIENESTAR","color":"brown","code":"https://github.com/JoelDamato/consultora-just-front","web":"https://bienestarelemental.vercel.app/"},
]

  let [counter,setCounter] = useState(0)

 let sumar = ()=> {
  setCounter(counter+1)
  if(counter === categories.length-1){
    setCounter(0)}
 }
  let restar = ()=> {
  setCounter(counter-1)
  if(counter===0){
    setCounter(categories.length-1)
  }
}


  return (
    <>
    
    <div className={` mob:hidden shadow-lg   flex flex-col ${darkMode.dark ? 'bg-gray-700/40 border-[1px] border-violet-950 text-white' : 'bg-white/80'} rounded-lg w-[22%] min-h-[20%] items-center `}>
    <h6 className="mt-5 text-xl text-center font-bold font-montserrat tracking-widest ">
                     MIS PROYECTOS</h6>
     <ButtonGroup variant="text" className="mt-5 flex flex-col w-[80%] gap-5 font-semibold" >
        <Button onClick={()=>setCounter(0)} className={` ${darkMode.dark ? 'bg-black border-[1px] border-violet-950 text-violet-800 hover:bg-gray-600/20 ' : 'bg-black text-white hover:bg-black/60 '} shadow-lg   font-bold py-2 px-4 rounded-l`} >AMAZING</Button>
        <Button onClick={()=>setCounter(1)} className={` ${darkMode.dark ? 'bg-black border-[1px] border-violet-950 text-violet-800 hover:bg-gray-600/20 ' : 'bg-black text-white hover:bg-black/60 '} shadow-lg   font-bold py-2 px-4 rounded-l`}>PETSHOP</Button>
        <Button onClick={()=>setCounter(2)} className={` ${darkMode.dark ? 'bg-black border-[1px] border-violet-950 text-violet-800 hover:bg-gray-600/20 ' : 'bg-black text-white hover:bg-black/60 '} shadow-lg   font-bold py-2 px-4 rounded-l`} >MINGA</Button>
        <Button onClick={()=>setCounter(3)} className={` ${darkMode.dark ? 'bg-black border-[1px] border-violet-950 text-violet-800 hover:bg-gray-600/20 ' : 'bg-black text-white hover:bg-black/60 '} shadow-lg   font-bold py-2 px-4 rounded-l`}>MINDTECH</Button>
        <Button onClick={()=>setCounter(4)} className={` ${darkMode.dark ? 'bg-black border-[1px] border-violet-950 text-violet-800 hover:bg-gray-600/20 ' : 'bg-black text-white hover:bg-black/60 '} shadow-lg   font-bold py-2 px-4 rounded-l`}>BIENESTAR</Button>
      </ButtonGroup>
    </div>

      <div className={` p-5 gap-1 mob:h-[50%] mob:w-[90%] flex row mob:flex-col justify-evenly rounded-lg items-center shadow-lg w-[70.7%] h-[50vh] ${darkMode.dark ? 'bg-gray-700/40 border-[1px] border-violet-950 text-violet-800 ' : 'bg-white/80 text-black'} `}>
        
        <div className={` mob:hidden self-center rounded-full  ${darkMode.dark? 'text-white':'bg-white'}`}>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={restar} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`rounded-full w-[3vw] mob:w-[10%] ${darkMode.dark? 'text-black':'bg-white'}`}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
        </div>

        <img
          className=" border-violet-950 mob:h-[80%] mob:w-[100%]  w-[40%] h-[90%] rounded-lg sm:my-10"
          src={categories[counter]?.image}
          alt=""/>

        <div className={` ${darkMode.dark? 'text-white':''}  mob:w-[100%] w-[100%] h-[40%] flex flex-col justify-center items-center p-[1rem]`}>
          <h1 className="p-2  text-[2rem] rounded-lg tracking-widest font-montserrat"  > {categories[counter]?.name.charAt(0).toUpperCase()+categories[counter]?.name.slice(1)}</h1>
          <p className="font-semibold text-[0.7rem] lg:text-[1rem]">
            {categories[counter]?.description}
          </p>

          <div class="mt-5 gap-5 inline-flex">

<a href={categories[counter]?.code} target="_blank">  <button className={` ${darkMode.dark ? 'bg-black border-[1px] border-violet-950 text-violet-700 hover:bg-gray-600/20 ' : 'bg-black text-white hover:bg-black/60'} shadow-lg font-semibold py-2 px-4 rounded-lg`}>
    Codigo
  </button></a>

  <a href={categories[counter]?.web} target="_blank"> <button className={` ${darkMode.dark ? 'bg-black border-[1px] border-violet-950 text-violet-700  hover:bg-gray-600/20 ' : 'bg-black text-white hover:bg-black/60'} shadow-lg font-semibold py-2 px-6 rounded-lg`}>

    Web
  </button></a>
 
</div>
        </div>
        
        <div className={`mob:flex mob:justify-evenly sm:self-center rounded-full `}>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={restar} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={` rounded-full sm:hidden w-[3vw] mob:w-[10%] ${darkMode.dark? ' text-black':'bg-white'}`}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>


<svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={sumar} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`rounded-full w-[3vw] mob:w-[10%] ${darkMode.dark? ' text-black':'bg-white'}`}>
  <path stroke-linecap="round" stroke-linejoin="round"  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

        </div>
      </div>

    </>
  );
}
