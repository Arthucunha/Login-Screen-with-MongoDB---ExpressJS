// import React from 'react'

// const Dashboard = () => {
//     return (
//         <div>Dashboard</div>
//     )
// }

// export default Dashboard

import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen"> 
      {/* O contêiner acima centraliza o conteúdo vertical e horizontalmente */}
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-800"> 
        {/* Texo grande e responsivo */}
        Bem-Vindo!
      </h1>
    </div>
  );
};

export default Dashboard;