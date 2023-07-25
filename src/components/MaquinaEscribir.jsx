import React, { useState, useEffect } from 'react';

const MaquinaEscribir = ({ texto, intervalo }) => {
  const [textoMostrado, setTextoMostrado] = useState('');

  useEffect(() => {
    let i = 0;
    const longitudTexto = texto.length;

    const interval = setInterval(() => {
      if (i < longitudTexto) {
        setTextoMostrado((prevTexto) => prevTexto + texto.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, intervalo);

    return () => clearInterval(interval);
  }, [texto, intervalo]);

  return <p>{textoMostrado}</p>;
};

export default MaquinaEscribir;
