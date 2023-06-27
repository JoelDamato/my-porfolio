import React from "react";
import { useState,useEffect} from "react";
import { ButtonGroup, Button } from "@material-tailwind/react";



export default function Projects() {

  let categories= [
    {"image":"https://i.ibb.co/kmxztP6/2023-06-27.png","description":"Desarolle esta web individualmente, utilizando HTML, CSS, JAVASCRIPT VANILLA. La funcionalidad de la pagina es poder aportar datos a su cliente, filtar por un buscador o check. Ademas de estadisticas y datos de cada evento individualmente,","name":"AMAZING","color":"violet","code":"https://github.com/JoelDamato/Amazing-Events","web":""},
    {"image":"https://i.ibb.co/ZmHvGHN/2023-06-27-3.png","description":"Desarrollo de una web, aplicando metodología AGILE para la organización del trabajo en grupo. Utilizamos tecnologías HTML, CSS, Boostrap, los datos del producto fueron consumidos de la API provista por el cliente. Dentro de las funcionalidades de la web, generamos una página dinámica, seccionada en hogar, juguetes, farmacia, contacto y forma de pago. Además, incorporamos la opción de agregar o quitar productos al carrito de compras.","name":"PETSHOP","color":"gray","code":"https://github.com/JoelDamato/Petshop-HappyPets","web":"https://pet-shop-ashy.vercel.app/"},
    {"image":"https://i.ibb.co/CQH2rk6/2023-06-27-4.png","description":"Web desarrollada en equipo, utilizando la metodología de trabajo AGILE , organizando y distribuyendo tareas en Trello, aplicando diferentes tecnologías para asegurar el correcto funcionamiento de la aplicación, desde el lado Front-end y Back-end. ","name":"MINGA","color":"red","code":"https://github.com/JoelDamato/Minga_green_front","web":"https://minga-verde-front-olive.vercel.app/"},
    {"image":"https://i.ibb.co/m476tqk/2023-06-27-1.png","description":"Web desarrollada en equipo, utilizando la metodología de trabajo AGILE , organizando y distribuyendo tareas en Trello, aplicando diferentes tecnologías para asegurar el correcto funcionamiento de la aplicación, desde el lado Front-end y Back-end. ","name":"MINDTECH","color":"green","code":"https://github.com/JoelDamato/Mindtech-web-front","web":"www.mindtech.store"},
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
    <div className="shadow-lg h-[40vh] mt-5 flex flex-col bg-white rounded-lg w-[20%] items-center mr-5">
    <h6 className="mt-5 text-xl font-semibold font-montserrat tracking-widest ">
                     MIS PROYECTOS</h6>
     <ButtonGroup variant="text" className="mt-5 flex flex-col w-[80%] gap-5" >
        <Button onClick={()=>setCounter(0)} className="shadow-lg bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" >AMAZING</Button>
        <Button onClick={()=>setCounter(1)} className="shadow-lg bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"  >PETSHOP</Button>
        <Button onClick={()=>setCounter(2)} className="shadow-lg bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"  >MINGA</Button>
        <Button onClick={()=>setCounter(3)} className="shadow-lg bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" >MINDTECH</Button>
      </ButtonGroup>
      </div>

      <div className="flex row justify-evenly rounded-2xl items-center shadow-lg w-[67%] h-[50vh] bg-white  md:mt-[10%] lg:mt-1 ">
        <div className="self-center">
        <img className="w-[3vw]" src="https://i.ibb.co/CQMXb3w/angulo-doble-pequeno-izquierdo.png" onClick={restar} alt="" />
        </div>
        <img
          className="w-[40%] h-[90%] rounded-lg my-10"
          src={categories[counter]?.image}
          alt=""/>

        <div className="w-[40%] h-[40%] flex flex-col justify-center items-center p-[1rem]">
          <h1 className="p-2 text-black text-[2rem] rounded-lg tracking-widest font-montserrat"  style={{color:categories[counter]?.color}} > {categories[counter]?.name.charAt(0).toUpperCase()+categories[counter]?.name.slice(1)}</h1>
          <p className="text-black text-[0.7rem] lg:text-[1rem]">
            {categories[counter]?.description}
          </p>
          <div class="mt-5 inline-flex">
<a href={categories[counter]?.code}>  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
    Codigo
  </button></a>

  <a href={categories[counter]?.web}> <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
    Web
  </button></a>
 
</div>
        </div>
        
        <div className="self-center">






<img className="w-[3vw]" src="https://i.ibb.co/2nQh4HT/angulo-doble-pequeno-derecho.png" onClick={sumar} alt="" />
        </div>
      </div>
    </>
  );
}
