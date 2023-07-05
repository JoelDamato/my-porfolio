import React from 'react'

export default function About(darkMode) {
  return (

    <div className="w-full flex justify-evenly mob:flex-col mob:items-center">

      <div className="mob:w-[90%] w-[30%] text-center">
        <div className={`h-[90%]  flex flex-col min-w-0  mob:w-[100%] ${darkMode.dark ? 'bg-gray-700/40 border-[1px] border-violet-950 text-violet-800' : 'bg-white/80'}  w-full mb-8 shadow-lg rounded-lg`}>
          <div className="px-4 py-5 flex-auto">
            <h6 className="text-xl font-semibold font-montserrat tracking-widest ">
              HABILIDADES </h6>

            <p className="mt-2 mb-4  flex-col">

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

        <div className={`h-[90%] mob:w-[100%]  flex flex-col min-w-0 ${darkMode.dark ? 'bg-gray-700/40 border-[1px] border-violet-950 text-violet-800' : 'bg-white/80'}  mb-8 shadow-lg rounded-lg`}>

          <div className="px-4 py-5 flex-auto">
            <h6 className="md:pl-[16%] text-xl font-semibold font-montserrat tracking-[1vw]  ">
              SOBRE MI </h6>


            <div className="flex mob:flex-col items-center">
              <img className="rounded-full w-[10vw] mob:w-[30%] mob:mt-5" src="https://i.ibb.co/dPzzCSw/1685723210690.jpg" alt="" />

              <div className="flex flex-col">
                <p className="p-4 mt-2 mb-4">
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


  )
}
