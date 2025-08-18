import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color , setColor] = useState("white")

  return (
    <div className='w-full h-screen duration-150' style={{backgroundColor:color}}>
       <div className='fixed flex flex-wrap bg-blue-200 rounded justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap m-2 justify-center gap-3 shadow-3xl p-1.5 w-20 bg-green-400 rounded-lg'><button onClick={()=>{setColor("Green")}}>Green</button></div>
        
        <div className='flex smooth flex-wrap m-2 justify-center gap-3 shadow-2xl p-1.5 w-20 bg-white rounded-lg'><button onClick={()=>{setColor("white")}}>White</button></div>
        <div className='flex smooth flex-wrap m-2 justify-center gap-3 shadow-2xl p-1.5 w-20 bg-black text-white rounded-lg'><button onClick={()=>{setColor("Black")}}>Black</button></div>
        <div className='flex smooth flex-wrap m-2 justify-center gap-3 shadow-2xl p-1.5 w-20 bg-slate-400 rounded-lg'><button onClick={()=>{setColor("Grey")}}>Grey</button></div>
        <div className='flex smooth flex-wrap m-2 justify-center gap-3 shadow-2xl p-1.5 w-20 bg-violet-500 rounded-lg'><button onClick={()=>{setColor("Violet")}}>Violet</button></div>
        <div className='flex smooth flex-wrap m-2 justify-center gap-3 shadow-2xl p-1.5 w-20 bg-sky-400 rounded-lg'><button onClick={()=>{setColor("SkyBlue")}}>SkyBlue</button></div>
        <div className='flex smooth flex-wrap m-2 justify-center gap-3 shadow-2xl p-1.5 w-20 bg-pink-400 rounded-lg'><button onClick={()=>{setColor("Pink")}}>Pink</button></div>
        <div className='flex smooth flex-wrap m-2 justify-center gap-3 shadow-2xl p-1.5 w-20 bg-orange-400 rounded-lg'><button onClick={()=>{setColor("orange")}}>Orange</button></div>
        <div className='flex smooth flex-wrap m-2 justify-center gap-3 shadow-2xl p-1.5 w-20 bg-blue-800 rounded-lg'><button onClick={()=>{setColor("Blue")}}>Blue</button></div>
       </div>
    </div>
  )
}

export default App
