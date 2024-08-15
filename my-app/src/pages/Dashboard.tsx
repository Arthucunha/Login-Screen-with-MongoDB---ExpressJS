import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Recuperar o nome de usuário do localStorage quando o componente for montado
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []); 

  return (
    <div className="flex flex-col items-center justify-center h-screen"> 
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-800"> 
        Bem-vindo {username ? username : ''}! 
      </h1>
    </div>
  );
};

export default Dashboard;