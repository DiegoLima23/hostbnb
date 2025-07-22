import React from 'react'
import { Link } from 'react-router-dom'

const Item = () => {
  return (  
    <Link to='/' className="flex flex-col gap-4">
      <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1371160063089744305/original/856b0f23-6fd0-4b6b-a46e-d1a0b64eba46.jpeg?im_w=1200"
       alt="imagem de acomodações" 
       className="aspect-square object-cover rounded-2xl"
       />

     <div>
         <h3 className="text-2xl font-bold">São Paulo, Brasil</h3>
          <p className="truncate text-gray-500">Bem-vindo à Vista Mar, um studio exclusivo, em condomínio, perfeito para casais que buscam conexão e relaxamento. 
           Com um design elegante e um acabamento impecável, este refúgio oferece conforto, luxo e uma vista panorâmica deslumbrante do mar.
           Localizado em uma região privilegiada, você estará a poucos passos da praia e terá fácil acesso a restaurantes, mercados, 
          farmácias e praias garantindo praticidade e comodidade durante sua estadia.</p>
      </div>
          
          
      <p><span className="font-bold">R$ 734</span> por noite</p>
    </Link>
  )
}

export default Item