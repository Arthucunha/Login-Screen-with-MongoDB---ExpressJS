import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center'>
      <div className='max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300'>
        <div className='text-3xl font-bold text-blue-600 mt-2 text-center mb-10'>Entrar</div>
          <form action="" className='space-y-6'>
            <div>
              <label htmlFor="" className='text-sm font-bold text-gray-600 block'>Nome de usuário</label>
              <input type="text" className='w-full p-2 border border-gray-300 rounded mt-1' />
            </div>
            <div>
              <label htmlFor="" className='text-sm font-bold text-gray-600 block'>Senha</label>
              <input type="password" className='w-full p-2 border border-gray-300 rounded mt-1' />
            </div>
            <div>
              <button className='w-full py-2 px-4 bg-blue-600 hover:bg-clue-700 rounded-md text-white text-sm  '>Entrar</button>
            </div>
          </form>
      </div>
    </div>
  );
}

export default App;
