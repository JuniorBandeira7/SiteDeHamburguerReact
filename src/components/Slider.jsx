import React, { useState, useEffect } from 'react';
import style from './Slider.module.css'
import imagem1 from './imgs/s1.jpg'
import imagem2 from './imgs/s2.jpg'
import imagem3 from './imgs/s3.jpg'


function Slider (){
  const imagens = [imagem1, imagem2, imagem3];
  const [imagemFundoIndex, setImagemFundoIndex] = useState(0);

  function alterarImagemFundo(){
    let novoIndice = (imagemFundoIndex + 1)
    
    if (novoIndice === imagens.length){
        novoIndice = 0
    }
    setImagemFundoIndex(novoIndice)
  };

  useEffect(function () {
    const intervalId = setInterval(alterarImagemFundo, 5000); // Trocar a cada 5 segundos

    return function () {
      clearInterval(intervalId); // Limpar o intervalo quando o componente é desmontado
    };
  }, [imagemFundoIndex]);

  return (
    <div id={style.dvslider} style={{backgroundImage: `url(${imagens[imagemFundoIndex]})`}}>
    </div>
  );
};

export default Slider;
