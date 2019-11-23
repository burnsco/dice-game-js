import React, { useState } from 'react'
import { Die } from './components/Die'

const App = () => {
  const [number, setNumber] = useState(0)
  return (
    <>
      <Die />
      <Die />
      <button
        style={{ fontSize: 20, width: 200, height: 70, marginTop: 50 }}
        onClick={() => setNumber(number + 1)}
      >
        Roll Dice
        <p>{number}</p>
      </button>
    </>
  )
}

export default App
