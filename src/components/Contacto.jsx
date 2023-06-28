import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';




export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [respuesta,setRespuesta]=useState('')

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    emailjs.init('NpFjVa-LTSPfZQzmr');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !email || !mensaje) {
        setRespuesta("Completar los datos por favor")
        openModal()

      return;
    }

    const templateParams = {
      from_name: nombre,
      a_nombre: email,
      message: mensaje,
    };

    emailjs
      .send("service_6jtsjqn", "template_b1k0dcy", templateParams, 'NpFjVa-LTSPfZQzmr')
      .then((response) => {
        setRespuesta("Email enviado con exito, Gracias",response)
        setNombre('');
        setEmail('');
        setMensaje('');
        openModal()

      })
      .catch((error) => {
        setRespuesta("Hubo un problema al enviar el mail",error)
        openModal()
      });
  };

  return (
    <section className="mob:mt-[20%] relative block py-24 lg:pt-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
              <div className="flex-auto p-5 lg:p-10">
                <h4 className="text-2xl font-semibold">Formulario de Contacto</h4>
                <div className="relative w-full mb-3 mt-8">
                  <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="full-name">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Nombre"
                    style={{ transition: 'all .15s ease' }}
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Email"
                    style={{ transition: 'all .15s ease' }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="message"
                >
                  Mensaje
                </label>
                <textarea
                  rows="4"
                  cols="80"
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="escribe un mensaje..."
                  onChange={(e) => setMensaje(e.target.value)}
                />
              </div>
              <div className="text-center mt-6">
                <button
                  onClick={handleSubmit}
                  className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {modalOpen && (

              <div className="fixed inset-0 flex items-center justify-center z-50 mob:[80vw] ">
                <div className="border-[1px] border-gray-500 bg-white/80 w-[30%] mob:w-[80%] shadow-md rounded-lg h-[22%]  flex flex-col justify-evenly items-center">
                  <div className="p-4 w-[80%] flex flex-col items-center">
                    {/* Contenido del modal */}

                    <p className="mb-4 ">{respuesta}</p>

                    {/* Botón para cerrar el modal */}
                    <div className="flex justify-evenly w-[80%]">

                    
                      <button
                        onClick={closeModal}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          
            )}



  </section>
  
  )
}
