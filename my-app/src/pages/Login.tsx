import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Nome de usuário:", username);
        console.log("Senha:", password); 

        if (username === 'usuario' && password === 'senha') {
            console.log('Login bem-sucedido!');
        } else {
            console.log('Credenciais inválidas!');
        }
    };

    return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center'>
      <div className='max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300'>
        <div className='text-3xl font-bold text-blue-600 mt-2 text-center mb-10'>Entrar</div>
          <form action="" onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label htmlFor="username" className='text-sm font-bold text-gray-600 block'>Nome de usuário</label>
              <input type="text" className='w-full p-1 border border-gray-300 rounded mt-1' id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
              <label htmlFor="password" className='text-sm font-bold text-gray-600 block'>Senha</label>
              <input type="password" className='w-full p-1 border border-gray-300 rounded mt-1' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
              <button className='w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm  '>Entrar</button>
            </div>
          </form>
      </div>
      <div>
      <p>Nome de usuário: {username}</p> 
      <p>Senha: {password}</p>
    </div>
    </div>
    
    )
}

export default Login