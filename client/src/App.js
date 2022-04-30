import React from 'react'
// import ReactDOM from 'react-dom'
import logo from './logo.png';
import './style.css';
import {BellIcon, SearchIcon} from '@heroicons/react/solid';

function App() {
  return (
   <div>
      <header className="flex w-full bg-gray-800 p-2">
        <div className = "mx-4"> 
        <img src={logo} alt="" className="w-8 h-8" />
         </div>
         <form action = "" className='bg-gray-800  px-3 flex rounded-md border border-gray-700'> 
         <input type="text" className="bg-white-500  h-6 text-sm  p-3" placeholder='Search'/>
         <SearchIcon className='text-gray-300 h-6 w- mx--10 mt-1' /> 

         </form>
         <BellIcon className='text-white w-8 h-8' />
    </header>
   </div>
   
  );
}

export default App;
