import React, { useState } from 'react';

export default function Contacto(darkMode) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [respuesta, setRespuesta] = useState('');

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !email || !mensaje) {
      setRespuesta("Por favor completa todos los campos");
      openModal();
      return;
    }

    // Formatear el mensaje para WhatsApp
    const whatsappMessage = `Nombre: ${nombre}%0AEmail: ${email}%0AMensaje: ${mensaje}`;

    // Número de WhatsApp al que quieres enviar el mensaje (código de país incluido)
    const phoneNumber = '1523965661'; // Reemplaza con tu número de WhatsApp

    // Abrir WhatsApp con el mensaje preformateado
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;
    window.open(whatsappURL, '_blank');

    // Mostrar mensaje de éxito en el modal
    setRespuesta("Gracias por contactarte");
    openModal();

    // Limpiar campos del formulario
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <div className={`relative flex flex-col w-[90%] lg:w-[60%] mb-6 shadow-lg rounded-lg ${darkMode.dark ? 'bg-gray-700/20 border-[1px] border-violet-950 text-white' : 'bg-gray-300'}`}>
      <div className="flex-auto p-5 lg:p-10">
        <h4 className="text-2xl font-semibold flex  gap-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
</svg>

          
          Formulario de Contacto</h4>
          <p className='pt-5'>Contáctame por WhatsApp. Te pido que dejes tu nombre, el asunto y detalles sobre la razón de tu mensaje.</p>
        <div className= "relative w-full mb-3 mt-8">
          <label className={`${darkMode.dark ? 'text-white':'text-gray-700'} block uppercase text-xs font-bold mb-2 `} htmlFor="full-name">
            Nombre
          </label>
          <input
            type="text"
            className={`${darkMode.dark ? 'bg-gray-700/30 border-[1px] border-violet-950 placeholder-gray-400/20' : 'placeholder-gray-400 bg-white'} border-0 px-3 py-3 text-gray-700 rounded text-sm shadow focus:outline-none focus:ring w-full`}
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="relative w-full mb-3">
          <label className={`${darkMode.dark ? 'text-white':'text-gray-700'} block uppercase text-xs font-bold mb-2 `} htmlFor="email">
            ASUNTO
          </label>
          <input
            type="text"
            className={`${darkMode.dark ? 'bg-gray-700/30 border-[1px] border-violet-950 placeholder-gray-400/20' : 'placeholder-gray-400 bg-white'} border-0 px-3 py-3 text-gray-700 rounded text-sm shadow focus:outline-none focus:ring w-full`}
            placeholder="Asunto"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="relative w-full mb-3">
          <label className={`${darkMode.dark ? 'text-white':'text-gray-700'} block uppercase text-xs font-bold mb-2 `} htmlFor="message">
            Mensaje
          </label>
          <textarea
            rows="4"
            className={`${darkMode.dark ? 'bg-gray-700/30 border-[1px] border-violet-950 placeholder-gray-400/20' : 'placeholder-gray-400 bg-white'} border-0 px-3 py-3 text-gray-700 rounded text-sm shadow focus:outline-none focus:ring w-full`}
            placeholder="Escribe un mensaje..."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </div>

        <div className="text-center mt-6">
          <button
            onClick={handleSubmit}
            className={`${darkMode.dark ? 'bg-black border-[1px] border-violet-950 placeholder-gray-400/20' : 'bg-black text-white'} active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1`}
            type="button"
          >
            Enviar
          </button>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 mob:[80vw] ">
          <div className={`border-[1px] ${darkMode.dark ? 'bg-black/80 border-[1px] border-violet-950 text-violet-800' : ' border-gray-500 bg-white/80 '} w-[30%] mob:w-[80%] shadow-md rounded-lg h-[22%] flex flex-col justify-evenly items-center`}>
            <div className="p-4 w-[80%] flex flex-col items-center">
              <p className="mb-4 ">{respuesta}</p>
              <div className="flex justify-evenly w-[80%]">
                <button
                  onClick={closeModal}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
