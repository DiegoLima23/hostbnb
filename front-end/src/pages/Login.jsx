import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
  
  <section className='flex items-center'>
    <div className="flex flex-col gap-4 items-center max-w-96 mx-auto w-full">
       
       <h1 className='text-3xl font-bold'>Faça seu login</h1>
         <form className='flex flex-col gap-2 w-full'>
           <input 
              type="email" 
              className='w-full border border-gray-100 rounded-full py-2 px-4'
              placeholder='Digite seu email'
           />
           <input 
                  type="password" 
                  className='w-full border border-gray-100 rounded-full py-2 px-4'
                  placeholder='Digite sua senha'
            />
           <button className='w-full rounded-full bg-primary-400 text-white p-2 text-xl cursor-pointer font-bold'>Fazer login</button>
         </form>
       <p>Você ainda não tem registro? <span><Link to="/register" className='font-bold text-primary-400'>Registre-se aqui</Link></span></p>
  
    </div>
  </section>
  )
}

export default Login