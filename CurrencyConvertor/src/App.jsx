import { use, useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrency'
import './App.css'

function App() {
 
  const [amount, setamount] = useState(0)
  const [from , setfrom] = useState("usd")
  const [to, setto] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
  const option =  Object.keys(currencyInfo)

  const swap = () => {
    setfrom(to)
    setto(from)
    setConvertedAmount(amount)
    setamount(convertedAmount)
  }

  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg')`,}}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
        <form onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}>
          <div className='w-full mb-1'>
            <InputBox classname='text-left' label="from" amount={amount} currencyOption={option} onCurrencyChange={(currency) => setamount(amount)} selectCurrency={from} onAmountChange={(amount) => setamount(amount)}/>
          </div>
          <div className='relative w-full h-0.5'>
            <button
            type='button'
            className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-slate-600 text-white px-2 py-0.5'
            onClick={swap}>
            swap
            </button>

          </div>
          <div className='w-full mt-1 mb-4'>
            <InputBox classname='text-left text-black' label="to" amount={convertedAmount} currencyOption={option} onCurrencyChange={(currency) => setto(amount)} selectCurrency={to} amountDisable/>
          </div>
          <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
             Convert {from.toUpperCase} to {to.toUpperCase()}
          </button>
        </form>

        </div>

      </div>

    </div>
  )
}

export default App
