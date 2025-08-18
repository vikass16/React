import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed , setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const[password, setpassword] = useState("")

  const passwordRef = useRef(null)
  const passwordgenerator = useCallback(()=>{

    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str +="0123456789"
    if(charAllowed) str +="`!@#$%^&*()_+-=?/:;<>{}[]"
    for (let i = 0; i <=length; i++) {
      let char = Math.floor(Math.random()*str.length+1)

       pass += str.charAt(char)
      
    }

    setpassword(pass)
  },[length, numberAllowed,charAllowed,setpassword])

  const copyPasswordToclip = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,6);
    window.navigator.clipboard.writeText(password)
  },[password])

useEffect(()=> {
  passwordgenerator()
},[length,numberAllowed,charAllowed,passwordgenerator])

  return (
    <>
     <div className='w-full max-w-full max-auto shadow-md rounded-lg px-4 py-3 my-8 text-white bg-gray-400'> <h1 className='mb-4 text-2xl'>Password Generator</h1>
       <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full bg-slate-500 py-1 px-3' placeholder='password' readOnly ref={passwordRef}/>
          <button onClick={copyPasswordToclip} className='outerline-none bg-blue-300 text-black px-3 py-0.5 shrink-0'>copy</button>
       </div>

       <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {setlength(e.target.value)}} />
            <label>Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'></div>
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => {setnumberAllowed((prev) => !prev)}} />
            <label htmlFor="numberInput">Numbers</label>
            <div className='flex items-center gap-x-1'></div>
            <input type="checkbox" defaultChecked={numberAllowed} id='charInput' onChange={() => {setcharAllowed((prev) => !prev)}} />
            <label htmlFor="charInput">Characters</label>
       </div>
        
     </div>
     
    </>
  )
}

export default App
