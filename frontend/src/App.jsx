import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen w-screen bg-gray-800 text-white flex justify-center items-center text-3xl'>Welcome!</div>
    </>
  )
}

export default App
