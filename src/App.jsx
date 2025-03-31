import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1 className="text-3xl bg-stone-500 font-bold underline mt-14">
        Hello world!
      </h1>
      <h1 className="text-3xl bg-stone-500 font-bold underline mt-24 py-24  text-align-center">
        Hello world!
      </h1>
      </div>
    </>
  )
}

export default App
