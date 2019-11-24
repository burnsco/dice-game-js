import React, { useState } from 'react'
import { Die } from './components/Die'
import './App.css'

const App = () => {
  const [number, setNumber] = useState(0)
  let [rolling, setRolling] = useState(false)

  const rollDice = () => {
    setRolling((rolling = true))

    setTimeout(rolling => {
      setRolling((rolling = false))
    }, 1000)
  }

  return (
    <>
      <div className={rolling ? 'dice shakeDice' : 'dice'}>
        <Die />
        <Die />
      </div>
      <button
        style={{ fontSize: 20, width: 200, height: 70, marginTop: 50 }}
        onClick={() => {
          rollDice()
          setNumber(number + 1)
        }}
      >
        <p>Roll</p>
      </button>
    </>
  )
}

export default App
