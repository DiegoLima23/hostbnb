import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from "axios";

const Register = ({setUser}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

  //   if(email && password){
  //     try{
  //        const {data: userDoc} = await axios.post("/login", {
  //         email,
  //         password,
  //        });

  //        setUser(userDoc)
  //        setRedirect(true)
  //     }catch(error){
  //         alert(`Deu erro ao logar: ${error.response.data}`)
  //     }
  //   }else{
  //       alert("Você precisa preencher o email e a senha!")
  //   }
  // 
  };

  if(redirect) return <Navigate to="/" />;


  return (
  
  <section className='flex items-center'>
    <div className="flex flex-col gap-4 items-center max-w-96 mx-auto w-full">
       
       <h1 className='text-3xl font-bold'>Faça seu cadastro</h1>
         <form className='flex flex-col gap-2 w-full' onSubmit={handleSubmit}>
           <input 
              type="text" 
              className='w-full border border-gray-100 rounded-full py-2 px-4'
              placeholder='Digite seu nome'
              value={name}
              onChange={(e) => setName(e.target.value) }
           />

           <input 
              type="email" 
              className='w-full border border-gray-100 rounded-full py-2 px-4'
              placeholder='Digite seu email'
              value={email}
              onChange={(e) => setEmail(e.target.value) }
           />

           <input 
                  type="password" 
                  className='w-full border border-gray-100 rounded-full py-2 px-4'
                  placeholder='Digite sua senha'
                  value={password}
                  onChange={(e) => setPassword(e.target.value) }
            />
           <button className='w-full rounded-full bg-primary-400 text-white p-2 text-xl cursor-pointer font-bold'>Cadastrar</button>
         </form>
       <p>Já tem uma conta? <span><Link to="/login" className='font-bold text-primary-400'>Logue aqui</Link></span></p>
  
    </div>
  </section>
  )
}

export default Register;