import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setErrorMessage('');
  
      try {
        // Note a URL completa do servidor backend:
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });
        const data = await response.json();

      if (response.ok) {
        // Login bem-sucedido
        console.log(data.message); // Exibe a mensagem do servidor
        localStorage.setItem('username', username);
        // Redirecione o usuário ou faça outras ações necessárias
        setTimeout(() => {
          navigate('/dashboard'); 
        }, 500);
      } else {
        // Credenciais inválidas
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Erro durante o login:", error);
      setErrorMessage('Erro ao conectar com o servidor.');
    }
  };

    return (
      <div className='min-h-screen bg-gray-50 flex flex-col justify-center'>
        <div className='max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300'>
          <div className='text-3xl font-bold text-blue-600 mt-2 text-center mb-10'>Entrar</div>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label htmlFor="username" className='text-sm font-bold text-gray-600 block'>Nome de usuário</label>
              <input 
                id='username'
                name='usernameInput'
                type="text"
                placeholder='example@example.com' 
                className='w-full p-1 border border-gray-300 rounded mt-1' 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              />
            </div>
            <div>
              <label htmlFor="password" className='text-sm font-bold text-gray-600 block'>Senha</label>
              <input 
                id='password' 
                type="password" 
                name='passwordInput'
                className='w-full p-1 border border-gray-300 rounded mt-1' 
                placeholder='********'
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <div>
              <button type="submit" className='w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm  '>Entrar</button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Login